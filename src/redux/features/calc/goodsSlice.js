import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../../utils/axios'

const initialState = {
    q2Totall: 0,
    isLoading: false,
    coolingTime: 24,
    isFoodInfoLoading: false,
    totalMass: 50,
    perDayMass: 5,
    inletProdTemperature: 25,
    currentFoodItem: 'Strawberries',
    currentFoodCategory: 'Fruits',
    foodCategoryList: [],
    foodList: [],
    foodItemInfo: null,
    packaging: {
        name: "Wood",
        specificHeat: 1.7,
        weight: 0.1
    },
    q21: 0,
    q22New: 0,
    q22Old: 0,
    q21packaging: 0,

}

export const getFoodCategories = createAsyncThunk(
    'goods/getFoodCategories',
    async () => {
        try {
            const { data } = await axios.get('calc/food/categories')
            return data
        } catch (error) {
            console.log(error)
        }
    },
)
export const getFoodItemsOfCategory = createAsyncThunk(
    'goods/getFoodItemsOfCategory',
    async (category) => {
        try {
            const { data } = await axios.get(`calc/food/items/${category}`)
            return data
        } catch (error) {
            console.log(error)
        }
    },
)
export const getFoodItemInfo = createAsyncThunk(
    'goods/getFoodItemInfo',
    async (foodItem) => {
        try {
            const { data } = await axios.get(`calc/food/item/${foodItem}`)
            return data
        } catch (error) {
            console.log(error)
        }
    },
)
export const getQ2 = createAsyncThunk(
    'goods/getQ2',
    async ({ totalMass, perDayMass, inletProdTemperature, currentFoodItem, roomTemperature, coolingTime, packaging }) => {
        // console.log(totalMass, perDayMass, inletProdTemperature, currentFoodItem, roomTemperature, coolingTime, packaging);
        try {
            const { data } = await axios.post(`calc/food/q2`, {
                totalMass,
                perDayMass,
                inletProdTemperature,
                currentFoodItem,
                roomTemperature,
                coolingTime,
                packaging
            })

            return data
        } catch (error) {
            console.log(error)
        }
    },
)

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
        setCurrentFoodItem: (state, action) => {
            state.currentFoodItem = action.payload
        },
        setCurrentFoodCategory: (state, action) => {
            state.currentFoodCategory = action.payload
        },
        setPackaging: (state, action) => {
            state.packaging = action.payload
        },
        setPackagingWeight: (state, action) => {

            if (action.payload <= 0) {
                state.packaging.weight = 0
            } else {
                state.packaging.weight = action.payload
            }
        },
        setCoolingTime: (state, action) => {
            if (action.payload <= 0.1) {
                state.coolingTime = 0.1
            } else if ((action.payload >= 48)) {
                state.coolingTime = 48
            } else {
                state.coolingTime = action.payload
            }
        },
    },
    extraReducers: {
        // Get food categories
        [getFoodCategories.pending]: (state) => {
            state.isLoading = true
        },
        [getFoodCategories.fulfilled]: (state, action) => {
            state.isLoading = false
            state.foodCategoryList = action.payload
        },
        [getFoodCategories.rejectWithValue]: (state, action) => {
            state.isLoading = false
        },

        // Get food items by category getFoodItemsOfCategory
        [getFoodItemsOfCategory.pending]: (state) => {
            state.isLoading = true
        },
        [getFoodItemsOfCategory.fulfilled]: (state, action) => {
            state.isLoading = false
            state.foodList = action.payload
        },
        [getFoodItemsOfCategory.rejectWithValue]: (state, action) => {
            state.isLoading = false
        },

        // Get foodItem public properties
        [getFoodItemInfo.pending]: (state) => {
            state.isFoodInfoLoading = true
        },
        [getFoodItemInfo.fulfilled]: (state, action) => {
            state.isFoodInfoLoading = false
            state.foodItemInfo = action.payload
        },
        [getFoodItemInfo.rejectWithValue]: (state) => {
            state.isFoodInfoLoading = false
        },
        // Get Q2
        [getQ2.pending]: (state) => {
            state.isLoading = true
        },
        [getQ2.fulfilled]: (state, action) => {
            state.isLoading = false
            state.q21 = action.payload.Q2
            state.q22New = action.payload.breathNewFood
            state.q22Old = action.payload.breathAllFood
            state.q21packaging = action.payload.Q2packaging
            state.q2Totall = Math.round((action.payload.Q2 + action.payload.breathNewFood + action.payload.breathAllFood + action.payload.Q2packaging) * 100) / 100

        },
        [getQ2.rejectWithValue]: (state) => {
            state.isLoading = false
        },
    },
})

export default goodsSlice.reducer

export const {
    setTotalMass,
    setPerDayMass,
    setInletProdTemperature,
    setCurrentFoodItem,
    setCurrentFoodCategory,
    setCoolingTime,
    setPackaging,
    setPackagingWeight
} = goodsSlice.actions