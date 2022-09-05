import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../../utils/axios'


const initialState = {
    isVentLoading: false,
    airDoorTemperature: 31,
    airDoorRH: 85,
    dorsOpenHours: 2,
    dorsWidth: 3,
    dorsHeight: 3.5,
    dorsProtection: 'windCurtain',
    ventilationIsOn: true,
    ventilatedAirTemperature: 18,
    ventilatedAirRH: 95,
    airExchange: 4,
    Q3vent: 0,
    Q44dors: 0,
}

export const getQ3vent = createAsyncThunk(
    'infiltration/getQ3vent',
    async (props) => {
        const {
            ventilationIsOn,
            ventilatedAirTemperature,
            ventilatedAirRH,
            airExchange,
            roomLength,
            roomWidth,
            roomHeight,
            roomTemperature,
            roomRH
        } = props
        try {
            const { data } = await axios.post(`calc/ventilation`, {
                ventilationIsOn,
                ventilatedAirTemperature: ventilatedAirTemperature * 1,
                ventilatedAirRH: ventilatedAirRH * 1,
                airExchange: airExchange * 1,
                roomLength: roomLength * 1,
                roomWidth: roomWidth * 1,
                roomHeight: roomHeight * 1,
                roomTemperature: roomTemperature * 1,
                roomRH: roomRH * 1,
            })
            return data
        } catch (error) {
            console.log(error)
        }
    },
)

export const getQ44dors = createAsyncThunk(
    'infiltration/getQ44dors',
    async ({
        airDoorTemperature,
        airDoorRH,
        dorsOpenHours,
        dorsWidth,
        dorsHeight,
        dorsProtection,
        roomTemperature,
        roomRH
    }) => {
        try {
            const { data } = await axios.post(`calc/infiltration`, {
                airDoorTemperature: airDoorTemperature * 1,
                airDoorRH: airDoorRH * 1,
                dorsOpenHours: dorsOpenHours * 1,
                dorsWidth: dorsWidth * 1,
                dorsHeight: dorsHeight * 1,
                dorsProtection: dorsProtection * 1,
                roomTemperature: roomTemperature * 1,
                roomRH: roomRH * 1,
            })
            return data
        } catch (error) {
            console.log(error)
        }
    },
)








export const infiltrationSlice = createSlice({
    name: 'infiltration',
    initialState,
    reducers: {
        setAirDoorTemperature: (state, action) => {
            state.airDoorTemperature = action.payload
        },
        setAirDoorRH: (state, action) => {
            state.airDoorRH = action.payload
        },
        setDorsOpenHours: (state, action) => {
            state.dorsOpenHours = action.payload
        },

        setDorsWidth: (state, action) => {
            state.dorsWidth = action.payload
        },
        setDorsHeight: (state, action) => {
            state.dorsHeight = action.payload
        },
        setDorsProtection: (state, action) => {
            state.dorsProtection = action.payload
        },
        setVentilationIsOn: (state, action) => {
            state.ventilationIsOn = action.payload
        },
        setVentilatedAirTemperature: (state, action) => {
            state.ventilatedAirTemperature = action.payload
        },
        setVentilatedAirRH: (state, action) => {
            state.ventilatedAirRH = action.payload
        },
        setAirExchange: (state, action) => {
            state.airExchange = action.payload
        },
    },
    extraReducers: {
        // Get heat load from ventilation
        [getQ3vent.pending]: (state) => {
            state.isVentLoading = true
        },
        [getQ3vent.fulfilled]: (state, action) => {
            state.isVentLoading = false
            state.Q3vent = action.payload.Q3vent
        },
        [getQ3vent.rejectWithValue]: (state) => {
            state.isVentLoading = false
        },
        // Get heat load from open doors
        [getQ44dors.pending]: (state) => {
            state.isVentLoading = true
        },
        [getQ44dors.fulfilled]: (state, action) => {
            state.isVentLoading = false
            state.Q44dors = action.payload.Q44dors
        },
        [getQ44dors.rejectWithValue]: (state) => {
            state.isVentLoading = false
        },
    }
})

export default infiltrationSlice.reducer
export const {
    setAirDoorTemperature,
    setAirDoorRH,
    setDorsOpenHours,
    setDorsWidth,
    setDorsHeight,
    setDorsProtection,
    setVentilationIsOn,
    setVentilatedAirTemperature,
    setVentilatedAirRH,
    setAirExchange,
} = infiltrationSlice.actions