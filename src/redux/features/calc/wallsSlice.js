import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux';
import axios from '../../../utils/axios'

const initialState = {
    result: null,
    isLoading: false,
    status: null,
    q1Totall: 0,

    frontWall: {
        construction: {
            id: 2003,
            name: "Ceramic hollow brick",
            image: "ceramic_hollow_brick_150.jpg",
            heatTransfer: 0.58
        },
        insulation: {
            id: 1003,
            name: "Polyurethane",
            image: "polyurethane_panel_150.jpg",
            heatTransfer: 0.022,
        },
        constructionThickness: 100,
        insulationThickness: 100,
        outerTemperature: 28,
        solarTemperature: 5,
        windSpeed: "slow",
        heatLoad: 0,
        customConstruction: 0.81,
        customInsulation: 0.024,
        isCustomConstruction: true,
        isCustomInsulation: true,
    },
    backWall: {
        construction: {
            id: 2003,
            name: "Ceramic hollow brick",
            image: "ceramic_hollow_brick_150.jpg",
            heatTransfer: 0.58
        },
        insulation: {
            id: 1003,
            name: "Polyurethane",
            image: "polyurethane_panel_150.jpg",
            heatTransfer: 0.022,
        },
        constructionThickness: 100,
        insulationThickness: 100,
        outerTemperature: 28,
        solarTemperature: 3,
        windSpeed: "slow",
        heatLoad: 0,
        customConstruction: 0.81,
        customInsulation: 0.024,
        isCustomConstruction: true,
        isCustomInsulation: true,
        wHeight: 12,
        wLength: 18,
    },
    leftWall: {
        construction: {
            id: 2003,
            name: "Ceramic hollow brick",
            image: "ceramic_hollow_brick_150.jpg",
            heatTransfer: 0.58
        },
        insulation: {
            id: 1003,
            name: "Polyurethane",
            image: "polyurethane_panel_150.jpg",
            heatTransfer: 0.022,
        },
        constructionThickness: 100,
        insulationThickness: 100,
        outerTemperature: 28,
        solarTemperature: 4,
        windSpeed: "slow",
        heatLoad: 0,
        customConstruction: 0.81,
        customInsulation: 0.024,
        isCustomConstruction: true,
        isCustomInsulation: true,
        wHeight: 12,
        wLength: 18,
    },
    rightWall: {
        construction: {
            id: 2003,
            name: "Ceramic hollow brick",
            image: "ceramic_hollow_brick_150.jpg",
            heatTransfer: 0.58
        },
        insulation: {
            id: 1003,
            name: "Polyurethane",
            image: "polyurethane_panel_150.jpg",
            heatTransfer: 0.022,
        },
        constructionThickness: 100,
        insulationThickness: 100,
        outerTemperature: 28,
        solarTemperature: 7,
        windSpeed: "slow",
        heatLoad: 0,
        customConstruction: 0.81,
        customInsulation: 0.024,
        isCustomConstruction: true,
        isCustomInsulation: true,
        wHeight: 12,
        wLength: 18,
    },
    topWall: {
        construction: {
            id: 2003,
            name: "Ceramic hollow brick",
            image: "ceramic_hollow_brick_150.jpg",
            heatTransfer: 0.58
        },
        insulation: {
            id: 1003,
            name: "Polyurethane",
            image: "polyurethane_panel_150.jpg",
            heatTransfer: 0.022,
        },
        constructionThickness: 100,
        insulationThickness: 100,
        outerTemperature: 28,
        solarTemperature: 10,
        windSpeed: "slow",
        heatLoad: 0,
        customConstruction: 0.81,
        customInsulation: 0.024,
        isCustomConstruction: true,
        isCustomInsulation: true,
        wHeight: 12,
        wLength: 18,
    },
    bottomWall: {
        construction: {
            id: 2003,
            name: "Ceramic hollow brick",
            image: "ceramic_hollow_brick_150.jpg",
            heatTransfer: 0.58
        },
        insulation: {
            id: 1003,
            name: "Polyurethane",
            image: "polyurethane_panel_150.jpg",
            heatTransfer: 0.022,
        },
        constructionThickness: 100,
        insulationThickness: 100,
        outerTemperature: 8,
        solarTemperature: 0,
        windSpeed: "slow",
        heatLoad: 0,
        customConstruction: 0.81,
        customInsulation: 0.024,
        isCustomConstruction: true,
        isCustomInsulation: true,
        wHeight: 12,
        wLength: 18,
    },

}

export const getFrontWallQ1 = createAsyncThunk(
    'wall/getFrontWallQ1',
    async (wallParams) => {
        try {
            const { data } = await axios.post(`calc/walls`, {
                wallParams
            })

            return data
        } catch (error) {
            console.log(error)
        }
    },
)
export const getBackWallQ1 = createAsyncThunk(
    'wall/getBackWallQ1',
    async (wallParams) => {
        try {
            const { data } = await axios.post(`calc/walls`, {
                wallParams
            })

            return data
        } catch (error) {
            console.log(error)
        }
    },
)
export const getLeftWallQ1 = createAsyncThunk(
    'wall/getLeftWallQ1',
    async (wallParams) => {
        try {
            const { data } = await axios.post(`calc/walls`, {
                wallParams
            })

            return data
        } catch (error) {
            console.log(error)
        }
    },
)
export const getRightWallQ1 = createAsyncThunk(
    'wall/getRightWallQ1',
    async (wallParams) => {
        try {
            const { data } = await axios.post(`calc/walls`, {
                wallParams
            })

            return data
        } catch (error) {
            console.log(error)
        }
    },
)
export const getTopWallQ1 = createAsyncThunk(
    'wall/getTopWallQ1',
    async (wallParams) => {
        try {
            const { data } = await axios.post(`calc/walls`, {
                wallParams
            })

            return data
        } catch (error) {
            console.log(error)
        }
    },
)
export const getBottomWallQ1 = createAsyncThunk(
    'wall/getBottomWallQ1',
    async (wallParams) => {
        try {
            const { data } = await axios.post(`calc/walls`, {
                wallParams
            })
            return data
        } catch (error) {
            console.log(error)
        }
    },
)












export const wallsSlice = createSlice({
    name: 'wall',
    initialState,
    reducers: {
        // Front wall
        setFrontWallConstr: (state, action) => {
            state.frontWall.construction = action.payload
        },
        setFrontWallInsul: (state, action) => {
            state.frontWall.insulation = action.payload
        },
        setFrontWallInsulationThickness: (state, action) => {
            if (action.payload < 0) {
                state.frontWall.insulationThickness = 0
            } else {
                state.frontWall.insulationThickness = action.payload
            }
        },
        setFrontWallConstructionThickness: (state, action) => {
            if (action.payload < 0) {
                state.frontWall.constructionThickness = 0
            } else {
                state.frontWall.constructionThickness = action.payload
            }
        },
        setFrontWallOuterTemperature: (state, action) => {
            state.frontWall.outerTemperature = action.payload
        },
        setFrontWallSolarTemperature: (state, action) => {
            if (action.payload < 0) {
                state.frontWall.solarTemperature = 0
            } else {
                state.frontWall.solarTemperature = action.payload
            }
        },
        setFrontWallWindSpeed: (state, action) => {
            state.frontWall.windSpeed = action.payload
        },
        setFrontWallCustomConstruction: (state, action) => {
            if (action.payload < 0) {
                state.frontWall.customConstruction = 0
            } else {
                state.frontWall.customConstruction = action.payload
            }
        },
        setFrontWallCustomInsulation: (state, action) => {
            if (action.payload < 0) {
                state.frontWall.customInsulation = 0
            } else {
                state.frontWall.customInsulation = action.payload
            }
        },
        setFrontWallIsCustomConstruction: (state, action) => {
            state.frontWall.isCustomConstruction = action.payload
        },
        setFrontWallIsCustomInsulation: (state, action) => {
            state.frontWall.isCustomInsulation = action.payload
        },

        // Back wall
        setBackWallConstr: (state, action) => {
            state.backWall.construction = action.payload
        },
        setBackWallInsul: (state, action) => {
            state.backWall.insulation = action.payload
        },
        setBackWallInsulationThickness: (state, action) => {
            if (action.payload < 0) {
                state.backWall.insulationThickness = 0
            } else {
                state.backWall.insulationThickness = action.payload
            }
        },
        setBackWallConstructionThickness: (state, action) => {
            if (action.payload < 0) {
                state.backWall.constructionThickness = 0
            } else {
                state.backWall.constructionThickness = action.payload
            }
        },
        setBackWallOuterTemperature: (state, action) => {
            state.backWall.outerTemperature = action.payload
        },
        setBackWallSolarTemperature: (state, action) => {
            if (action.payload < 0) {
                state.backWall.solarTemperature = 0
            } else {
                state.backWall.solarTemperature = action.payload
            }
        },
        setBackWallWindSpeed: (state, action) => {
            state.backWall.windSpeed = action.payload
        },
        setBackWallCustomConstruction: (state, action) => {
            if (action.payload < 0) {
                state.backWall.customConstruction = 0
            } else {
                state.backWall.customConstruction = action.payload
            }
        },
        setBackWallCustomInsulation: (state, action) => {
            if (action.payload < 0) {
                state.backWall.customInsulation = 0
            } else {
                state.backWall.customInsulation = action.payload
            }
        },
        setBackWallIsCustomConstruction: (state, action) => {
            state.backWall.isCustomConstruction = action.payload
        },
        setBackWallIsCustomInsulation: (state, action) => {
            state.backWall.isCustomInsulation = action.payload
        },

        // Left wall
        setLeftWallConstr: (state, action) => {
            state.leftWall.construction = action.payload
        },
        setLeftWallInsul: (state, action) => {
            state.leftWall.insulation = action.payload
        },
        setLeftWallInsulationThickness: (state, action) => {
            if (action.payload < 0) {
                state.leftWall.insulationThickness = 0
            } else {
                state.leftWall.insulationThickness = action.payload
            }
        },
        setLeftWallConstructionThickness: (state, action) => {
            if (action.payload < 0) {
                state.leftWall.constructionThickness = 0
            } else {
                state.leftWall.constructionThickness = action.payload
            }
        },
        setLeftWallOuterTemperature: (state, action) => {
            state.leftWall.outerTemperature = action.payload
        },
        setLeftWallSolarTemperature: (state, action) => {
            if (action.payload < 0) {
                state.leftWall.solarTemperature = 0
            } else {
                state.leftWall.solarTemperature = action.payload
            }
        },
        setLeftWallWindSpeed: (state, action) => {
            state.leftWall.windSpeed = action.payload
        },
        setLeftWallCustomConstruction: (state, action) => {
            if (action.payload < 0) {
                state.leftWall.customConstruction = 0
            } else {
                state.leftWall.customConstruction = action.payload
            }
        },
        setLeftWallCustomInsulation: (state, action) => {
            if (action.payload < 0) {
                state.leftWall.customInsulation = 0
            } else {
                state.leftWall.customInsulation = action.payload
            }
        },
        setLeftWallIsCustomConstruction: (state, action) => {
            state.leftWall.isCustomConstruction = action.payload
        },
        setLeftWallIsCustomInsulation: (state, action) => {
            state.leftWall.isCustomInsulation = action.payload
        },

        // Right wall
        setRightWallConstr: (state, action) => {
            state.rightWall.construction = action.payload
        },
        setRightWallInsul: (state, action) => {
            state.rightWall.insulation = action.payload
        },
        setRightWallInsulationThickness: (state, action) => {
            if (action.payload < 0) {
                state.rightWall.insulationThickness = 0
            } else {
                state.rightWall.insulationThickness = action.payload
            }
        },
        setRightWallConstructionThickness: (state, action) => {
            if (action.payload < 0) {
                state.rightWall.constructionThickness = 0
            } else {
                state.rightWall.constructionThickness = action.payload
            }
        },
        setRightWallOuterTemperature: (state, action) => {
            state.rightWall.outerTemperature = action.payload
        },
        setRightWallSolarTemperature: (state, action) => {
            if (action.payload < 0) {
                state.rightWall.solarTemperature = 0
            } else {
                state.rightWall.solarTemperature = action.payload
            }
        },
        setRightWallWindSpeed: (state, action) => {
            state.rightWall.windSpeed = action.payload
        },
        setRightWallCustomConstruction: (state, action) => {
            if (action.payload < 0) {
                state.rightWall.customConstruction = 0
            } else {
                state.rightWall.customConstruction = action.payload
            }
        },
        setRightWallCustomInsulation: (state, action) => {
            if (action.payload < 0) {
                state.rightWall.customInsulation = 0
            } else {
                state.rightWall.customInsulation = action.payload
            }
        },
        setRightWallIsCustomConstruction: (state, action) => {
            state.rightWall.isCustomConstruction = action.payload
        },
        setRightWallIsCustomInsulation: (state, action) => {
            state.rightWall.isCustomInsulation = action.payload
        },

        // Top wall
        setTopWallConstr: (state, action) => {
            state.topWall.construction = action.payload
        },
        setTopWallInsul: (state, action) => {
            state.topWall.insulation = action.payload
        },
        setTopWallInsulationThickness: (state, action) => {
            if (action.payload < 0) {
                state.topWall.insulationThickness = 0
            } else {
                state.topWall.insulationThickness = action.payload
            }
        },
        setTopWallConstructionThickness: (state, action) => {
            if (action.payload < 0) {
                state.topWall.constructionThickness = 0
            } else {
                state.topWall.constructionThickness = action.payload
            }
        },
        setTopWallOuterTemperature: (state, action) => {
            state.topWall.outerTemperature = action.payload
        },
        setTopWallSolarTemperature: (state, action) => {
            if (action.payload < 0) {
                state.topWall.solarTemperature = 0
            } else {
                state.topWall.solarTemperature = action.payload
            }
        },
        setTopWallWindSpeed: (state, action) => {
            state.topWall.windSpeed = action.payload
        },
        setTopWallCustomConstruction: (state, action) => {
            if (action.payload < 0) {
                state.topWall.customConstruction = 0
            } else {
                state.topWall.customConstruction = action.payload
            }
        },
        setTopWallCustomInsulation: (state, action) => {
            if (action.payload < 0) {
                state.topWall.customInsulation = 0
            } else {
                state.topWall.customInsulation = action.payload
            }
        },
        setTopWallIsCustomConstruction: (state, action) => {
            state.topWall.isCustomConstruction = action.payload
        },
        setTopWallIsCustomInsulation: (state, action) => {
            state.topWall.isCustomInsulation = action.payload
        },

        // Bottom wall
        setBottomWallConstr: (state, action) => {
            state.bottomWall.construction = action.payload
        },
        setBottomWallInsul: (state, action) => {
            state.bottomWall.insulation = action.payload
        },
        setBottomWallInsulationThickness: (state, action) => {
            if (action.payload < 0) {
                state.bottomWall.insulationThickness = 0
            } else {
                state.bottomWall.insulationThickness = action.payload
            }
        },
        setBottomWallConstructionThickness: (state, action) => {
            if (action.payload < 0) {
                state.bottomWall.constructionThickness = 0
            } else {
                state.bottomWall.constructionThickness = action.payload
            }
        },
        setBottomWallOuterTemperature: (state, action) => {
            state.bottomWall.outerTemperature = action.payload
        },
        setBottomWallSolarTemperature: (state, action) => {
            if (action.payload < 0) {
                state.bottomWall.solarTemperature = 0
            } else {
                state.bottomWall.solarTemperature = action.payload
            }
        },
        setBottomWallWindSpeed: (state, action) => {
            state.bottomWall.windSpeed = action.payload
        },
        setBottomWallCustomConstruction: (state, action) => {
            if (action.payload < 0) {
                state.bottomWall.customConstruction = 0
            } else {
                state.bottomWall.customConstruction = action.payload
            }
        },
        setBottomWallCustomInsulation: (state, action) => {
            if (action.payload < 0) {
                state.bottomWall.customInsulation = 0
            } else {
                state.bottomWall.customInsulation = action.payload
            }
        },
        setBottomWallIsCustomConstruction: (state, action) => {
            state.bottomWall.isCustomConstruction = action.payload
        },
        setBottomWallIsCustomInsulation: (state, action) => {
            state.bottomWall.isCustomInsulation = action.payload
        },

    },
    extraReducers: {
        [getFrontWallQ1.fulfilled]: (state, action) => {
            state.frontWall.heatLoad = action.payload.heatWall
            state.q1Totall = Math.round((state.frontWall.heatLoad + state.backWall.heatLoad + state.leftWall.heatLoad + state.rightWall.heatLoad + state.topWall.heatLoad + state.bottomWall.heatLoad) * 100) / 100


        },
        [getBackWallQ1.fulfilled]: (state, action) => {
            state.backWall.heatLoad = action.payload.heatWall
            state.q1Totall = Math.round((state.frontWall.heatLoad + state.backWall.heatLoad + state.leftWall.heatLoad + state.rightWall.heatLoad + state.topWall.heatLoad + state.bottomWall.heatLoad) * 100) / 100

        },
        [getLeftWallQ1.fulfilled]: (state, action) => {
            state.leftWall.heatLoad = action.payload.heatWall
            state.q1Totall = Math.round((state.frontWall.heatLoad + state.backWall.heatLoad + state.leftWall.heatLoad + state.rightWall.heatLoad + state.topWall.heatLoad + state.bottomWall.heatLoad) * 100) / 100

        },
        [getRightWallQ1.fulfilled]: (state, action) => {
            state.rightWall.heatLoad = action.payload.heatWall
            state.q1Totall = Math.round((state.frontWall.heatLoad + state.backWall.heatLoad + state.leftWall.heatLoad + state.rightWall.heatLoad + state.topWall.heatLoad + state.bottomWall.heatLoad) * 100) / 100

        },
        [getTopWallQ1.fulfilled]: (state, action) => {
            state.topWall.heatLoad = action.payload.heatWall
            state.q1Totall = Math.round((state.frontWall.heatLoad + state.backWall.heatLoad + state.leftWall.heatLoad + state.rightWall.heatLoad + state.topWall.heatLoad + state.bottomWall.heatLoad) * 100) / 100

        },
        [getBottomWallQ1.fulfilled]: (state, action) => {
            state.bottomWall.heatLoad = action.payload.heatWall
            state.q1Totall = Math.round((state.frontWall.heatLoad + state.backWall.heatLoad + state.leftWall.heatLoad + state.rightWall.heatLoad + state.topWall.heatLoad + state.bottomWall.heatLoad) * 100) / 100

        },
    },
})

export default wallsSlice.reducer
export const {
    setFrontWallConstr,
    setFrontWallInsul,
    setFrontWallInsulationThickness,
    setFrontWallConstructionThickness,
    setFrontWallOuterTemperature,
    setFrontWallSolarTemperature,
    setFrontWallWindSpeed,
    setFrontWallCustomConstruction,
    setFrontWallCustomInsulation,
    setFrontWallIsCustomConstruction,
    setFrontWallIsCustomInsulation,

    setBackWallConstr,
    setBackWallInsul,
    setBackWallInsulationThickness,
    setBackWallConstructionThickness,
    setBackWallOuterTemperature,
    setBackWallSolarTemperature,
    setBackWallWindSpeed,
    setBackWallCustomConstruction,
    setBackWallCustomInsulation,
    setBackWallIsCustomConstruction,
    setBackWallIsCustomInsulation,

    setLeftWallConstr,
    setLeftWallInsul,
    setLeftWallInsulationThickness,
    setLeftWallConstructionThickness,
    setLeftWallOuterTemperature,
    setLeftWallSolarTemperature,
    setLeftWallWindSpeed,
    setLeftWallCustomConstruction,
    setLeftWallCustomInsulation,
    setLeftWallIsCustomConstruction,
    setLeftWallIsCustomInsulation,

    setRightWallConstr,
    setRightWallInsul,
    setRightWallInsulationThickness,
    setRightWallConstructionThickness,
    setRightWallOuterTemperature,
    setRightWallSolarTemperature,
    setRightWallWindSpeed,
    setRightWallCustomConstruction,
    setRightWallCustomInsulation,
    setRightWallIsCustomConstruction,
    setRightWallIsCustomInsulation,

    setTopWallConstr,
    setTopWallInsul,
    setTopWallInsulationThickness,
    setTopWallConstructionThickness,
    setTopWallOuterTemperature,
    setTopWallSolarTemperature,
    setTopWallWindSpeed,
    setTopWallCustomConstruction,
    setTopWallCustomInsulation,
    setTopWallIsCustomConstruction,
    setTopWallIsCustomInsulation,

    setBottomWallConstr,
    setBottomWallInsul,
    setBottomWallInsulationThickness,
    setBottomWallConstructionThickness,
    setBottomWallOuterTemperature,
    setBottomWallSolarTemperature,
    setBottomWallWindSpeed,
    setBottomWallCustomConstruction,
    setBottomWallCustomInsulation,
    setBottomWallIsCustomConstruction,
    setBottomWallIsCustomInsulation,



} = wallsSlice.actions