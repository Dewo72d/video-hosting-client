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
            console.log("WTF >>>> ", userData);
            const res = await request({
                method: "POST",
                path: `auth/${userData.type}`,
                data: {
                    username: userData.username,
                    password: userData.password,
                }
            });

            console.log("RES SIGN >>> ", res);
            location.reload();
        } catch (error) {
            console.log("ERROR USER AUTH>>> ", error);
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