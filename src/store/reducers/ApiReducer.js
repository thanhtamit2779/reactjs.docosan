const initialState = {};

function ApiReducer(state = initialState, { type, payload }) {
    let name = null;
    if (payload) name = payload.name || null;
    if (name) {
        switch(type) {
            case `${name}_SUCCESS`:
            case `${name}_FAILED`:
            case name:  
                state[name] = { ...payload }
                break;
            default:
        }
    }
    return Object.assign({}, state);
};

export default ApiReducer;