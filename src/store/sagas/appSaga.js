import { call, put, takeEvery } from 'redux-saga/effects';
import { makeRequestApi } from '../../configs/api';
import { makeFakeDb } from '../fakeDb';

const requestApiPending = (name) => put({
    type: `${name}_PENDING`,
    payload: {
        name,
        isLoading: true
    }
});

const requestApiFailed = (name) => put({
    type: `${name}_FAILED`,
    payload: {
        name,
        isLoading: false,
        status: null,
        data: null
    }
});

const requestApiSuccess = ({ name = null, response = null }) => {
    if (!response) return requestApiFailed(name);

    return put({
        type: `${name}_SUCCESS`,
        payload: {
            name,
            isLoading: false,
            ...response
        }
    })
}

const makeFakeApiAction = (payload = null) => {
    const {
        name = null,
        request = null,
        params = null
    } = payload;

    try {
        // Thể hiện kết nối request api
        // Mặc dù đang giả lập api và link api là giả
        makeRequestApi(request)
    } catch (error) { }

    const result = makeFakeDb(name, params);
    return result;
}

function* makeRequestApiAction({ payload = null }) {
    const {
        name = null,
        request = null,
        params = null
    } = payload;
    
    yield requestApiPending(name);
    try {
        const fakeDb = params?.fakeDb ?? false;
        const ioResponse = params?.ioResponse ?? false;
        let response = null;
        if (fakeDb) {
            response = yield call(makeFakeApiAction, payload);
        }
        else if(ioResponse) {
            response = { 
                request,
                data: params 
            };
        }
        else {
            response = yield call(makeRequestApi, request);
        }
    
        yield requestApiSuccess({
            name,
            response
        });

        // Thực hiện hành động kế tiếp
        // yield nextActions && nextActions(actionPayload && actionPayload);
    } catch (error) {
        yield requestApiFailed(name);
    }
}

export default function* appSaga() {
    yield takeEvery('MAKE_REQUEST_API_ACTION', makeRequestApiAction);
}