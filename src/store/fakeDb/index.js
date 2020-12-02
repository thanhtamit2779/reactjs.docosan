import { getDoctors } from './DoctorData';

const getFakeDb = (name, params) => {
    let data = null;
    switch (name) {
        case 'DOCTOR/GET_DOCTORS':
            data = getDoctors(params);
            break;

        default: 
            data = null;
            break;
    }

    const result = {
        headers: null,
        status: 200,
        data
    }
    return result;
}

export const makeFakeDb = (name, params = null) => getFakeDb(name, params);