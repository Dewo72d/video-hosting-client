import {combineReducers, configureStore} from "@reduxjs/toolkit";
import modalReducer from "./reducers/changeModal";
import videoReducer from "./reducers/videos";

const rootReducer = combineReducers({
    modalReducer,
    videoReducer,
})

export const setupStore = () => configureStore({
    reducer: rootReducer
})
