import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {request} from "../../utils";


const initialState = {
    cards: [],
};


export const fetchVideos = createAsyncThunk(
    "getVideos/fetchVideos",
    async function () {
        const res = await request({path: "videos", method: "GET"});
        return res.data
    }
)

export const cardSlice = createSlice({
    name: "cards",
    initialState,
    reducers: {
        getVideos: (state, payload) => {
            //console.log("HEHE GET", state, payload)
        }
    },
    extraReducers: {
        [fetchVideos.fulfilled]: (state,payload) => {
            //console.log("fetchVideos.fulfilled >>> ", payload)
            state.cards = payload.payload
        },
        [fetchVideos.rejected]: (state, action) => {
            console.log("STAATE REJJ >>> ", state, action)
        }
    }
})
export default cardSlice.reducer;