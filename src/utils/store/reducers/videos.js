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

export const fetchVideosByUser = createAsyncThunk(
    "getVideos/fetchVideos",
    async function (params) {
        const {name,id} = params
    
        const res = await request({path: `videos/channel/${name}/${id}`, method: "GET"});
        
        return res.data
    }
)

export const cardSlice = createSlice({
    name: "cards",
    initialState,
    extraReducers: {
        [fetchVideos.fulfilled]: (state,payload) => {
            //console.log("fetchVideos.fulfilled >>> ", payload)
            state.cards = payload.payload
        },
        [fetchVideos.rejected]: (state, action) => {
            console.log("STAATE REJJ >>> ", state, action)
        },
        [fetchVideosByUser.fulfilled]: (state,payload) => {
            console.log("fetchVideos.fulfilled >>> ", payload)
                console.log("CARDS >>> ", state.cards);
            state.cards = payload.payload;
        },
        [fetchVideosByUser.rejected]: (state, action) => {
            console.log("STAATE REJJ >>> ", state,'\n', action)
        }
    }
})
export default cardSlice.reducer;