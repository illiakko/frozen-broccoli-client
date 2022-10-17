import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    operatingHours: 22,
    safetyFactor: 7,
    pipeLosses: 5,

}



export const safetySlice = createSlice({
    name: 'safety',
    initialState,
    reducers: {
        setOperatingHours: (state, action) => {
            if (action.payload <= 1) {
                state.operatingHours = 1
            } else if ((action.payload >= 24)) {
                state.operatingHours = 24
            } else {
                state.operatingHours = action.payload
            }
        },
        setSafetyFactor: (state, action) => {
            if (action.payload <= 0) {
                state.safetyFactor = 0
            } else if ((action.payload >= 100)) {
                state.safetyFactor = 100
            } else {
                state.safetyFactor = action.payload
            }
        },
        setPipeLosses: (state, action) => {
            if (action.payload <= 0) {
                state.pipeLosses = 0
            } else if ((action.payload >= 100)) {
                state.pipeLosses = 100
            } else {
                state.pipeLosses = action.payload
            }
        },
    },
})

export default safetySlice.reducer
export const {
    setOperatingHours,
    setSafetyFactor,
    setPipeLosses,

} = safetySlice.actions