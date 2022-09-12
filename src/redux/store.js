import { configureStore } from '@reduxjs/toolkit'
import authSlice from './features/auth/authSlice'
import commonRoomSlice from './features/calc/roomCommonSlice'
import goodsSlice from './features/calc/goodsSlice'
import infiltrationSlice from './features/calc/infiltrationSlice'
import wallsSlice from './features/calc/wallsSlice'
import additionalSlice from './features/calc/additionalSlice'



const store = configureStore({
    reducer: {
        auth: authSlice,
        common: commonRoomSlice,
        goods: goodsSlice,
        infiltration: infiltrationSlice,
        walls: wallsSlice,
        additional: additionalSlice,
    },
})

export default store