import { handleError } from "@/utils/handleError";
import { clearUser, getUser, setUser } from "@/utils/token";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const loginThunkAction = createAsyncThunk('auth/login', async (data, thunkApi) => {
    try {
        thunkApi.dispatch(authActions.toggleLoading(true))
        setUser(data)
        thunkApi.fulfillWithValue(data)
        return data
    } catch (err) {
        thunkApi.rejectWithValue(err)
        handleError(err)
        throw err
    } finally {
        thunkApi.dispatch(authActions.toggleLoading(false))
    }
})

export const logoutThunkAction = createAsyncThunk('auth/logout', async (_,thunkApi) => {
    thunkApi.dispatch(authActions.logout())
    clearUser()
})

export const { reducer: authReducer, actions: authActions, getInitialState } = createSlice({
    initialState: {
        user: getUser(),
        loginLoading: false
    },
    name: 'auth',
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        logout: (state) => {
            state.user = null
        },
        toggleLoading: (state,action) => {
            state.loginLoading = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginThunkAction.pending, (state) => {
            state.loginLoading = true
            state.status = 'pending'
        })
        builder.addCase(loginThunkAction.fulfilled, (state, action) => {
            state.user = action.payload
            state.status = 'success'
            state.loginLoading = false

        })
        builder.addCase(loginThunkAction.rejected, (state) => {
            state.status = 'error'
            state.loginLoading = false

        })
    }
})