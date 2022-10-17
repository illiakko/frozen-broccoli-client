import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    roomLength: 18,
    roomWidth: 12,
    roomHeight: 6,
    roomTemperature: 2,
    roomRH: 85,
    roomAirVelocity: 1.5,
    roomDimentions: 'inner',
    roomSquare: 216,
    roomVolume: 1296,
    qTotall: 0,
}

export const commonRoomSlice = createSlice({
    name: 'commonRoom',
    initialState,
    reducers: {
        setQTotall: (state, action) => {
            state.qTotall = action.payload
        },
        setRoomLength: (state, action) => {
            if (action.payload <= 1) {
                state.roomLength = 1
            } else {
                state.roomLength = action.payload
            }
            state.roomSquare = state.roomLength * state.roomWidth
            state.roomVolume = state.roomLength * state.roomWidth * state.roomHeight

        },
        setRoomWidth: (state, action) => {
            if (action.payload <= 1) {
                state.roomWidth = 1
            } else {
                state.roomWidth = action.payload
            }
            state.roomSquare = state.roomLength * state.roomWidth
            state.roomVolume = state.roomLength * state.roomWidth * state.roomHeight
        },
        setRoomHeight: (state, action) => {
            if (action.payload <= 1) {
                state.roomHeight = 1
            } else {
                state.roomHeight = action.payload
            }
            state.roomVolume = state.roomLength * state.roomWidth * state.roomHeight
        },

        setRoomTemperature: (state, action) => {
            if (action.payload <= -50) {
                state.roomTemperature = -50
            } else if ((action.payload >= 50)) {
                state.roomTemperature = 50
            } else {
                state.roomTemperature = action.payload
            }
        },

        setRoomRH: (state, action) => {
            if (action.payload <= 5) {
                state.roomRH = 5
            } else if ((action.payload >= 100)) {
                state.roomRH = 100
            } else {
                state.roomRH = action.payload
            }
        },

        setRoomAirVelocity: (state, action) => {
            state.roomAirVelocity = action.payload
        },

        setRoomDimentions: (state, action) => {
            state.roomDimentions = action.payload
        },

    },
})

export default commonRoomSlice.reducer
export const {
    setQTotall,
    setRoomLength,
    setRoomWidth,
    setRoomHeight,
    setRoomTemperature,
    setRoomRH,
    setRoomAirVelocity,
    setRoomDimentions,

} = commonRoomSlice.actions