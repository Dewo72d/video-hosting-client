import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    modal: null,
    modalData: {}
};

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        on: (state, action) => {
            state.modal = action.payload.modal;
            state.isOpen = action.payload.isOpen;
            state.modalData = action.payload.modalData;
        },
        off: (state) => {
            state.modal = null;
            state.isOpen = false;
            state.modalData = {};
        }
    },
});

export default modalSlice.reducer;