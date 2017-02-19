import { createStore } from 'redux';
import rootReducer from './rootReducer';

export default function configureStore(initialState) {
    return createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}