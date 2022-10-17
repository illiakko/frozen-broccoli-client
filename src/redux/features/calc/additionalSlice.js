import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../../utils/axios'

const initialState = {
    q4Totall: 0,
    lightPower: 0.3,
    lightTime: 2,
    lightQ: 0,
    fanNumber: 6,
    fanPower: 0.41,
    fanTime: 20,
    fanQ: 0,
    peopleNumber: 4,
    peopleTime: 2,
    peopleQ: 0,
    otherPower: 15,
    otherTime: 3,
    otherQ: 0,
    defrostType: "electro",
    defrostPower: 48,
    defrostNumber: 1,
    defrostTime: 15,
    defrostQ: 0,
}

export const getLightQ = createAsyncThunk(
    'goods/getLightQ',
    async ({ lightPower, lightTime }) => {
        try {
            const { data } = await axios.post(`calc/additional/light`, {
                lightPower,
                lightTime
            })
            return data
        } catch (error) {
            console.log(error)
        }
    },
)
export const getFanQ = createAsyncThunk(
    'goods/getFanQ',
    async ({ fanNumber, fanPower, fanTime }) => {
        try {
            const { data } = await axios.post(`calc/additional/fans`, {
                fanNumber,
                fanPower,
                fanTime
            })
            return data
        } catch (error) {
            console.log(error)
        }
    },
)
export const getPeopleQ = createAsyncThunk(
    'goods/getPeopleQ',
    async ({ peopleNumber, peopleTime }) => {
        try {
            const { data } = await axios.post(`calc/additional/people`, {
                peopleNumber,
                peopleTime
            })
            return data
        } catch (error) {
            console.log(error)
        }
    },
)
export const getOtherQ = createAsyncThunk(
    'goods/getOtherQ',
    async ({ otherPower, otherTime }) => {
        try {
            const { data } = await axios.post(`calc/additional/other`, {
                otherPower,
                otherTime
            })
            return data
        } catch (error) {
            console.log(error)
        }
    },
)
export const getDefrostQ = createAsyncThunk(
    'goods/getDefrostQ',
    async ({ defrostType, defrostPower, defrostNumber, defrostTime }) => {
        try {
            const { data } = await axios.post(`calc/additional/defrost`, {
                defrostType,
                defrostPower,
                defrostNumber,
                defrostTime
            })
            return data
        } catch (error) {
            console.log(error)
        }
    },
)


export const additionalSlice = createSlice({
    name: 'additional',
    initialState,
    reducers: {
        setLightPower: (state, action) => {
            if (action.payload <= 0) {
                state.lightPower = 0
            } else {
                state.lightPower = action.payload
            }
        },
        setLightTime: (state, action) => {
            if (action.payload <= 0) {
                state.lightTime = 0
            } else {
                state.lightTime = action.payload
            }
        },
        setFanNumber: (state, action) => {
            if (action.payload <= 0) {
                state.fanNumber = 0
            } else {
                state.fanNumber = action.payload
            }
        },
        setFanPower: (state, action) => {
            if (action.payload <= 0) {
                state.fanPower = 0
            } else {
                state.fanPower = action.payload
            }
        },
        setFanTime: (state, action) => {
            if (action.payload <= 0) {
                state.fanTime = 0
            } else {
                state.fanTime = action.payload
            }
        },
        setPeopleNumber: (state, action) => {
            if (action.payload <= 0) {
                state.peopleNumber = 0
            } else {
                state.peopleNumber = action.payload
            }
        },
        setPeopleTime: (state, action) => {
            if (action.payload <= 0) {
                state.peopleTime = 0
            } else {
                state.peopleTime = action.payload
            }
        },
        setOtherTime: (state, action) => {
            if (action.payload <= 0) {
                state.otherTime = 0
            } else {
                state.otherTime = action.payload
            }
        },
        setOtherPower: (state, action) => {
            if (action.payload <= 0) {
                state.otherPower = 0
            } else {
                state.otherPower = action.payload
            }
        },
        setDefrostType: (state, action) => {
            state.defrostType = action.payload
        },

        setDefrostPower: (state, action) => {
            if (action.payload <= 0) {
                state.defrostPower = 0
            } else {
                state.defrostPower = action.payload
            }
        },
        setDefrostNumber: (state, action) => {
            if (action.payload <= 0) {
                state.defrostNumber = 0
            } else {
                state.defrostNumber = action.payload
            }
        },
        setDefrostTime: (state, action) => {
            if (action.payload <= 0) {
                state.defrostTime = 0
            } else {
                state.defrostTime = action.payload
            }
        },
    },
    extraReducers: {
        // Get lights heat load
        [getLightQ.fulfilled]: (state, action) => {
            state.lightQ = action.payload.lightQ
            state.q4Totall = Math.round((state.lightQ + state.fanQ + state.peopleQ + state.otherQ + state.defrostQ) * 100) / 100
        },
        // Get fans heat load
        [getFanQ.fulfilled]: (state, action) => {
            state.fanQ = action.payload.fanQ
            state.q4Totall = Math.round((state.lightQ + state.fanQ + state.peopleQ + state.otherQ + state.defrostQ) * 100) / 100
        },
        // Get fans people  load
        [getPeopleQ.fulfilled]: (state, action) => {
            state.peopleQ = action.payload.peopleQ
            state.q4Totall = Math.round((state.lightQ + state.fanQ + state.peopleQ + state.otherQ + state.defrostQ) * 100) / 100
        },
        // Get other  load
        [getOtherQ.fulfilled]: (state, action) => {
            state.otherQ = action.payload.otherQ
            state.q4Totall = Math.round((state.lightQ + state.fanQ + state.peopleQ + state.otherQ + state.defrostQ) * 100) / 100
        },
        // Get defrost  load
        [getDefrostQ.fulfilled]: (state, action) => {
            state.defrostQ = action.payload.defrostQ
            state.q4Totall = Math.round((state.lightQ + state.fanQ + state.peopleQ + state.otherQ + state.defrostQ) * 100) / 100
        },


    },
})

export default additionalSlice.reducer

export const {
    setLightPower,
    setLightTime,
    setFanNumber,
    setFanPower,
    setFanTime,
    setPeopleNumber,
    setPeopleTime,
    setOtherTime,
    setOtherPower,
    setDefrostType,
    setDefrostPower,
    setDefrostNumber,
    setDefrostTime,
} = additionalSlice.actions