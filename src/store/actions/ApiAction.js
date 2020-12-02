export const makeRequestApi = ({ name, params = null, request = null}) => ({
    type: 'MAKE_REQUEST_API_ACTION',
    payload: {
        name,
        params,
        request
    }
});