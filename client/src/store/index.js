import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk';
import { SET_SOSIALMEDIA, SET_SOSIALMEDIABYID, SET_DOCUMENT } from './actionTypes'

const initialState = {
    sosialMedia: [],
    sosialMediaById: {},
    document: ''
}

function reducer(state = initialState, action){
    if (action.type === SET_SOSIALMEDIA) {
        return {...state, sosialMedia: action.payload}
    }else if (action.type === SET_SOSIALMEDIABYID) {
        return {...state, sosialMediaById: action.payload}
    }else if (action.type === SET_DOCUMENT) {
        return {...state, document: action.payload}
    }
    return state
}

const middlewares = applyMiddleware(ReduxThunk)
const store = createStore(reducer, middlewares)

export default store

