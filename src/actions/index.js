import { makeRequestApi } from '../store/actions/ApiAction';
import { API } from '../configs/api';
const baseUrl = API.BASE_URL;

export const REQUEST = {
    GET_APPOINTMENTS: 'APPOINTMENT/GET_APPOINTMENTS',
    CHANGE_STATUS_APPOINTMENT: 'APPOINTMENT/CHANGE_STATUS_APPOINTMENT',
    GET_PATIENTS: 'PATIENT/GET_PATIENTS',
    ADD_PATIENT: 'PATIENT/ADD_PATIENT',
    UPDATE_PATIENT: 'PATIENT/UPDATE_PATIENT',
    CHANGE_STATE_PATIENT: 'PATIENT/CHANGE_STATE_PATIENT',
    LOGIN: 'AUTHORIZE/LOGIN',
    GET_WIDGETS: 'WIDGET/GET_WIDGETS',
}

export const getWidgets = (params = null) => makeRequestApi({
    name: REQUEST.GET_WIDGETS,
    params,
    request: {
        method: 'GET',
        url: `${baseUrl}/widget`,
        data: params
    }
});

export const getAppointments = (params = null) => makeRequestApi({
    name: REQUEST.GET_APPOINTMENTS,
    params,
    request: {
        method: 'GET',
        url: `${baseUrl}/appointment`,
        data: params
    }
});

export const changeStatusAppointment = (AppointmentId = null, AppointmentStatusId = null) => makeRequestApi({
    name: REQUEST.CHANGE_STATUS_APPOINTMENT,
    params: null,
    request: {
        method: 'PUT',
        url: `${baseUrl}/appointment/${AppointmentId}/change-status/${AppointmentStatusId}`,
        data: null
    }
});

export const getPatients = (params = null) => makeRequestApi({
    name: REQUEST.GET_PATIENTS,
    params,
    request: {
        method: 'GET',
        url: `${baseUrl}/patient`,
        data: params
    }
});

export const addPatient = (params = null) => makeRequestApi({
    name: REQUEST.ADD_PATIENT,
    params,
    request: {
        method: 'POST',
        url: `${baseUrl}/patient`,
        data: params
    }
});

export const updatePatient = (patientId, params = null) => makeRequestApi({
    name: REQUEST.UPDATE_PATIENT,
    params,
    request: {
        method: 'PUT',
        url: `${baseUrl}/patient/${patientId}`,
        data: params
    }
});

export const changeStatePatient = (PatientId = null, State = null) => makeRequestApi({
    name: REQUEST.CHANGE_STATE_PATIENT,
    params: null,
    request: {
        method: 'PUT',
        url: `${baseUrl}/patient/${PatientId}/change-state/${State}`,
        data: null
    }
});

export const login = (params = null) => makeRequestApi({
    name: REQUEST.LOGIN,
    params,
    request: {
        method: 'POST',
        url: `${baseUrl}/login`,
        data: params
    }
});