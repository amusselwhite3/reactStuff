import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
//Store file that creates the backing data object behind the reducer.
export default createStore(reducers, applyMiddleware(thunk));