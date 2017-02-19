import { UPDATE_COLOR } from './actionTypes';

export function colorReducer(state = { color: 'Aqua' }, action) {
    switch (action.type) {
    case UPDATE_COLOR:
        return Object.assign({}, state, {
            color: action.color
        })
    default:
        return state
    }
}
