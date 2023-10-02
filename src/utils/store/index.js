import {combineReducers, configureStore} from "@reduxjs/toolkit";
import modalReducer from "./reducers/changeModal";
import videoReducer from "./reducers/videos";
import userReducer from "./reducers/user";

const rootReducer = combineReducers({
    modalReducer,
    videoReducer,
    userReducer,
    
})

export const setupStore = () => configureStore({
    reducer: rootReducer
})
