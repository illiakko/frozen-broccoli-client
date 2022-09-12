import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux';
import axios from '../../../utils/axios'

const initialState = {
    result: null,
    isLoading: false,
    status: null,

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
            console.log(data);
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
            console.log(data);
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
            console.log(data);
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
            console.log(data);
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
            console.log(data);
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
            state.frontWall.insulationThickness = action.payload
        },
        setFrontWallConstructionThickness: (state, action) => {
            state.frontWall.constructionThickness = action.payload
        },
        setFrontWallOuterTemperature: (state, action) => {
            state.frontWall.outerTemperature = action.payload
        },
        setFrontWallSolarTemperature: (state, action) => {
            state.frontWall.solarTemperature = action.payload
        },
        setFrontWallWindSpeed: (state, action) => {
            state.frontWall.windSpeed = action.payload
        },
        setFrontWallCustomConstruction: (state, action) => {
            state.frontWall.customConstruction = action.payload
        },
        setFrontWallCustomInsulation: (state, action) => {
            state.frontWall.customInsulation = action.payload
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
            state.backWall.insulationThickness = action.payload
        },
        setBackWallConstructionThickness: (state, action) => {
            state.backWall.constructionThickness = action.payload
        },
        setBackWallOuterTemperature: (state, action) => {
            state.backWall.outerTemperature = action.payload
        },
        setBackWallSolarTemperature: (state, action) => {
            state.backWall.solarTemperature = action.payload
        },
        setBackWallWindSpeed: (state, action) => {
            state.backWall.windSpeed = action.payload
        },
        setBackWallCustomConstruction: (state, action) => {
            state.backWall.customConstruction = action.payload
        },
        setBackWallCustomInsulation: (state, action) => {
            state.backWall.customInsulation = action.payload
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
            state.leftWall.insulationThickness = action.payload
        },
        setLeftWallConstructionThickness: (state, action) => {
            state.leftWall.constructionThickness = action.payload
        },
        setLeftWallOuterTemperature: (state, action) => {
            state.leftWall.outerTemperature = action.payload
        },
        setLeftWallSolarTemperature: (state, action) => {
            state.leftWall.solarTemperature = action.payload
        },
        setLeftWallWindSpeed: (state, action) => {
            state.leftWall.windSpeed = action.payload
        },
        setLeftWallCustomConstruction: (state, action) => {
            state.leftWall.customConstruction = action.payload
        },
        setLeftWallCustomInsulation: (state, action) => {
            state.leftWall.customInsulation = action.payload
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
            state.rightWall.insulationThickness = action.payload
        },
        setRightWallConstructionThickness: (state, action) => {
            state.rightWall.constructionThickness = action.payload
        },
        setRightWallOuterTemperature: (state, action) => {
            state.rightWall.outerTemperature = action.payload
        },
        setRightWallSolarTemperature: (state, action) => {
            state.rightWall.solarTemperature = action.payload
        },
        setRightWallWindSpeed: (state, action) => {
            state.rightWall.windSpeed = action.payload
        },
        setRightWallCustomConstruction: (state, action) => {
            state.rightWall.customConstruction = action.payload
        },
        setRightWallCustomInsulation: (state, action) => {
            state.rightWall.customInsulation = action.payload
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
            state.topWall.insulationThickness = action.payload
        },
        setTopWallConstructionThickness: (state, action) => {
            state.topWall.constructionThickness = action.payload
        },
        setTopWallOuterTemperature: (state, action) => {
            state.topWall.outerTemperature = action.payload
        },
        setTopWallSolarTemperature: (state, action) => {
            state.topWall.solarTemperature = action.payload
        },
        setTopWallWindSpeed: (state, action) => {
            state.topWall.windSpeed = action.payload
        },
        setTopWallCustomConstruction: (state, action) => {
            state.topWall.customConstruction = action.payload
        },
        setTopWallCustomInsulation: (state, action) => {
            state.topWall.customInsulation = action.payload
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
            state.bottomWall.insulationThickness = action.payload
        },
        setBottomWallConstructionThickness: (state, action) => {
            state.bottomWall.constructionThickness = action.payload
        },
        setBottomWallOuterTemperature: (state, action) => {
            state.bottomWall.outerTemperature = action.payload
        },
        setBottomWallSolarTemperature: (state, action) => {
            state.bottomWall.solarTemperature = action.payload
        },
        setBottomWallWindSpeed: (state, action) => {
            state.bottomWall.windSpeed = action.payload
        },
        setBottomWallCustomConstruction: (state, action) => {
            state.bottomWall.customConstruction = action.payload
        },
        setBottomWallCustomInsulation: (state, action) => {
            state.bottomWall.customInsulation = action.payload
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
        },
        [getBackWallQ1.fulfilled]: (state, action) => {
            state.backWall.heatLoad = action.payload.heatWall
        },
        [getLeftWallQ1.fulfilled]: (state, action) => {
            state.leftWall.heatLoad = action.payload.heatWall
        },
        [getRightWallQ1.fulfilled]: (state, action) => {
            state.rightWall.heatLoad = action.payload.heatWall
        },
        [getTopWallQ1.fulfilled]: (state, action) => {
            state.topWall.heatLoad = action.payload.heatWall
        },
        [getBottomWallQ1.fulfilled]: (state, action) => {
            state.bottomWall.heatLoad = action.payload.heatWall
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