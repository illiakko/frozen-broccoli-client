import { configureStore } from '@reduxjs/toolkit'
import authSlice from './features/auth/authSlice'
import wallsSlice from './features/calc/wallsSlice'


const store = configureStore({
    reducer: {
        auth: authSlice,
        walls: wallsSlice,
    },
})

export default store