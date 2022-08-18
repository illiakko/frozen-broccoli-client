import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    airInletTemperature: 31,
    airInletRH: 85,
    dorsOpenHours: 2,
    dorsNumber: 1,
    dorsWidth: 3,
    dorsHeight: 3.5,
    dorsProtection: 'windCurtain',
    ventilationIsOn: true,
    ventilatedAirTemperature: 18,
    ventilatedAirRH: 18,
    airExchange: 4,
}

export const infiltrationSlice = createSlice({
    name: 'goods',
    initialState,
    reducers: {
        setAirInletTemperature: (state, action) => {
            state.airInletTemperature = action.payload
        },
        setAirInletRH: (state, action) => {
            state.airInletRH = action.payload
        },
        setDorsOpenHours: (state, action) => {
            state.dorsOpenHours = action.payload
        },
        setDorsNumber: (state, action) => {
            state.dorsNumber = action.payload
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
})

export default infiltrationSlice.reducer
export const {
    setAirInletTemperature,
    setAirInletRH,
    setDorsOpenHours,
    setDorsNumber,
    setDorsWidth,
    setDorsHeight,
    setDorsProtection,
    setVentilationIsOn,
    setVentilatedAirTemperature,
    setVentilatedAirRH,
    setAirExchange,
} = infiltrationSlice.actions