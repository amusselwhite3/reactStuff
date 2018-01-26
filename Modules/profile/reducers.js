import { combineReducers } from 'redux';

import { DATA_RECIEVED } from './actions';

let dataState = { data: [], loading: true};

const dataReducer = (state = dataState, action) => {
    switch (action.type) {
        case DATA_RECIEVED: 
            console.log("CALLED");
            state = Object.assign({}, state, {data: action.data, loading:false});
            console.log(state);
            return state;
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    dataReducer
})

export default rootReducer;