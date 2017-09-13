import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'

import rootReducer from './reducers'
import rootEpic from './epics'

// For initialize in application
const epicMiddleware = createEpicMiddleware(rootEpic)

function configureStore() {
    return createStore(rootReducer, applyMiddleware(epicMiddleware));
}

export const store = configureStore();