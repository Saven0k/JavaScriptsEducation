import {configureStore} from '@reduxjs/toolkit'
import loggerMiddleWare from './middleware'


import createSagaMiddleware from 'redux-saga'
import rootReducer from './rootReducer.js'
import usersSaga from './userSage';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middlaware: (getDefualtMiddleware) => getDefualtMiddleware().concat(loggerMiddleWare, sagaMiddleware),
})
sagaMiddleware.run(usersSaga)

export default store;