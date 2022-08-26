import {legacy_createStore,applyMiddleware} from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"
import rootReducer from "./rootReducer"

const middlware = [thunk]

if(process.env.NODE_ENV === "deveolpment"){
    middlware.push(logger)
}

export const store = legacy_createStore(rootReducer,applyMiddleware(...middlware))