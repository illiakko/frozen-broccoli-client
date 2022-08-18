import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    totalMass: 100000,
    perDayMass: 10000,
    inletProdTemperature: 25,
    selectedProd: null,
}

export const goodsSlice = createSlice({
    name: 'goods',
    initialState,
    reducers: {
        setTotalMass: (state, action) => {
            state.totalMass = action.payload
        },
        setPerDayMass: (state, action) => {
            state.perDayMass = action.payload
        },
        setInletProdTemperature: (state, action) => {
            state.inletProdTemperature = action.payload
        },


    },
})

export default goodsSlice.reducer
export const {
    setTotalMass,
    setPerDayMass,
    setInletProdTemperature,
} = goodsSlice.actions