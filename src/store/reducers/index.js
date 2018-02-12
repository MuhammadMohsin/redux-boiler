import { combineReducers } from 'redux'
import authReducer from './authReducer'

const rootReducer = combineReducers({
    userAuth: authReducer
})

export default rootReducer