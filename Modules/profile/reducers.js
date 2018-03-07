import { combineReducers } from 'redux';

import { DATA_RECIEVED } from './actions';

let dataState = { data: [], loading: true};
/**
 * Redux reducer that maps data to an object stored in the state once the DATA_RECIEVED action is completed. 
 */

const dataReducer = (state = dataState, action) => {
    switch (action.type) {
        case DATA_RECIEVED: 
            state = Object.assign({}, state, {data: action.data, loading:false});
            return state;
        default:
            return state;
    }
};
//Reducer that is exported globally, if more than one reducer was being used, they would be combined here. 
const rootReducer = combineReducers({
    dataReducer
})

export default rootReducer;