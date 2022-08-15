import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../../utils/axios'

const initialState = {
    result: null,
    isLoading: false,
    status: null,
}

export const WallCalc = createAsyncThunk(
    'wall/WallCalc',
    async ({ A, B }) => {
        try {
            const { data } = await axios.post('/calc/walls', {
                A,
                B,
            })
            console.log(data);
            return data
        } catch (error) {
            console.log(error)
        }
    },
)


export const wallsSlice = createSlice({
    name: 'wall',
    initialState,
    reducers: {},
    extraReducers: {
        // A+B
        [WallCalc.pending]: (state) => {
            state.isLoading = true
            state.status = null
        },
        [WallCalc.fulfilled]: (state, action) => {
            console.log(action.payload);
            state.isLoading = false
            state.result = action.payload.result
            state.status = action.payload.message
        },
        [WallCalc.rejectWithValue]: (state, action) => {
            state.isLoading = false
            state.status = action.payload.message
        },
    },
})

export default wallsSlice.reducer