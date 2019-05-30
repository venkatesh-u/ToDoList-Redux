import {reducer_add_task} from './reducers/reducer1';
import {createStore, combineReducers} from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";


const rootReducer = combineReducers({
    reducer_add_task,
})

const configureStore = ()=>{
    return createStore(rootReducer, composeWithDevTools());
}

export default configureStore;
