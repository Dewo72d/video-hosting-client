import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { request } from "../../utils";

const initialState = {
    user: null
}

export const getUser = createAsyncThunk(
    "user/getUser",
    async function () {
        try {
            const res = await request({ path: "auth", method: "GET" });
            console.log(res.data);
            return res.data
        } catch (error) {
            console.log("ERROR USER AUTH>>> ", error);
            return null;
        }
    }
)

export const logOutUser = createAsyncThunk(
    "user/logOut",
    async function () {
        try {
            await request({ path: "auth/logout", method: "GET" })
            location.reload();
        } catch (error) {
            console.log("ERROR USER AUTH>>> ", error);
        }
    }
)


export const signUser = createAsyncThunk(
    "user/sign",
    async function (userData) {
        try {
            const res = await request({
                method: "POST",
                path: `auth/${userData.type}`,
                data: {
                    username: userData.username,
                    password: userData.password,
                }
            });
            console.log("RES >>> ", res);
            alert(res.data)
            location.reload();
        } catch (error) {
            console.log("ERROR USER AUTH>>> ", error);
        }
    }
)


export const changeUsername = createAsyncThunk(
    "user/change/username",
    async function (userData) {
        try {
            await request({
                method: "POST",
                path: `users/user/change/username`,
                data: {
                    username: userData.username
                }
            })
            if (res?.data) {
                alert("success")
            }
            
        } catch (error) {
            alert("Error")
            console.log("ERROR USER CHANGE>>> ", error);
        }
    }
)


export const changePassword = createAsyncThunk(
    "user/change/password",
    async function (userData) {
        try {
            const res = await request({
                method: "POST",
                path: `users/user/change/password`,
                data: {
                    password: userData.password
                }
            })
            if (res?.data) {
                alert("success")
            }
        } catch (error) {
            alert("Error")
            console.log("ERROR USER CHANGE>>> ", error);
        }
    }
)

export const deleteVideo = createAsyncThunk(
    "users/user/delete/video",
    async function (video) {
        try {
            await request({
                method: "POST",
                path: `videos/video/delete`,
                data: {
                    id: video.id
                }
            })
            if (res?.data) {
                alert("success")
            }
        } catch (error) {
            alert("Error")
            console.log("ERROR USER CHANGE>>> ", error);
        }
    }
)

export const userSlice = createSlice({
    name: "user",
    initialState,

    extraReducers: {
        [getUser.fulfilled]: (state, payload) => {
            state.user = payload.payload
        },
        [logOutUser.fulfilled]: (state, payload) => {
            state.user = null;
        }
    }

})

export default userSlice.reducer;