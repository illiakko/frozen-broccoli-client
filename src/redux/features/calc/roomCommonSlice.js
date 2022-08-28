import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    roomLength: 18,
    roomWidth: 12,
    roomHeight: 6,
    roomTemperature: 2,
    roomRH: 85,
    roomAirVelocity: 1.5,
    operatingHours: 22,
    coolingTime: 24,
    roomDimentions: 'outer',
    roomSquare: 216,
    roomVolume: 1296,
}

export const commonRoomSlice = createSlice({
    name: 'commonRoom',
    initialState,
    reducers: {
        setRoomLength: (state, action) => {
            state.roomLength = action.payload
            state.roomSquare = state.roomLength * state.roomWidth
            state.roomVolume = state.roomLength * state.roomWidth * state.roomHeight
        },
        setRoomWidth: (state, action) => {
            state.roomWidth = action.payload
            state.roomVolume = state.roomLength * state.roomWidth * state.roomHeight
        },
        setRoomHeight: (state, action) => {
            state.roomHeight = action.payload
        },
        setRoomTemperature: (state, action) => {
            state.roomTemperature = action.payload
        },
        setRoomRH: (state, action) => {
            state.roomRH = action.payload
        },
        setRoomAirVelocity: (state, action) => {
            state.roomAirVelocity = action.payload
        },
        setOperatingHours: (state, action) => {
            state.operatingHours = action.payload
        },
        setCoolingTime: (state, action) => {
            state.coolingTime = action.payload
        },
        setRoomDimentions: (state, action) => {
            state.roomDimentions = action.payload
        },

    },
})

export default commonRoomSlice.reducer
export const {
    setRoomLength,
    setRoomWidth,
    setRoomHeight,
    setRoomTemperature,
    setRoomRH,
    setRoomAirVelocity,
    setOperatingHours,
    setRoomDimentions,
    setCoolingTime,

} = commonRoomSlice.actions