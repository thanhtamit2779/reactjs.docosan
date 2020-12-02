import { makeRequestApi } from '../../store/actions/ApiAction';
import { API } from '../../configs/api';
const baseUrl = API.BASE_URL;

export const REQUEST = {
    GET_DOCTORS: 'DOCTOR/GET_DOCTORS'
}

export const getDoctors = (params = null) => makeRequestApi({
    name: REQUEST.GET_DOCTORS,
    params,
    request: {
        method: 'GET',
        url: `${baseUrl}/get-doctors`,
        data: params
    }
});