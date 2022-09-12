import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InputNumber from './InputNumber';

import {
    setTotalMass,
    setPerDayMass,
    setInletProdTemperature,
    getFoodCategories,
    getFoodItemsOfCategory,
    getFoodItemInfo,
    setCurrentFoodItem,
    getQ2
} from '../redux/features/calc/goodsSlice'

const URL_IMG_SM = "http://localhost:8000/static/img-150/"
const URL_IMG_MD = "http://localhost:8000/static/img-300/"

function Goods() {

    const dispatch = useDispatch()
    const totalMass = useSelector((state) => state.goods.totalMass)
    const perDayMass = useSelector((state) => state.goods.perDayMass)
    const inletProdTemperature = useSelector((state) => state.goods.inletProdTemperature)
    const [selectedFoodCategory, setSelectedFoodCategory] = useState('')


    const foodCategoryList = useSelector((state) => state.goods.foodCategoryList)
    const foodList = useSelector((state) => state.goods.foodList)
    const roomTemperature = useSelector((state) => state.common.roomTemperature)
    const coolingTime = useSelector((state) => state.common.coolingTime)
    const foodItemInfo = useSelector((state) => state.goods.foodItemInfo)
    const currentFoodItem = useSelector((state) => state.goods.currentFoodItem)
    const q21 = useSelector((state) => state.goods.q21)
    const q22New = useSelector((state) => state.goods.q22New)
    const q22Old = useSelector((state) => state.goods.q22Old)

    useEffect(() => {
        dispatch(getFoodCategories())
        setSelectedFoodCategory("Fruits")
        dispatch(getFoodItemsOfCategory("Fruits"))
        dispatch(setCurrentFoodItem("Pears"))
        dispatch(getFoodItemInfo("Pears"))
    }, [])


    useEffect(() => {
        q2Handler()
    }, [roomTemperature, currentFoodItem, totalMass, perDayMass, inletProdTemperature, coolingTime])


    const foodCategoryHandler = (event) => {
        setSelectedFoodCategory(event.currentTarget.id)
        dispatch(getFoodItemsOfCategory(event.currentTarget.id))
    }

    const foodItemHandler = (event) => {
        dispatch(setCurrentFoodItem(event.currentTarget.id))
        dispatch(getFoodItemInfo(event.currentTarget.id))
    }

    const q2Handler = () => {
        dispatch(getQ2(
            {
                totalMass,
                perDayMass,
                inletProdTemperature,
                currentFoodItem,
                roomTemperature,
                coolingTime
            }
        ))
    }

    return (
        <div className="section">
            <div>
                <p>Goods:</p>
            </div>
            <div className='flex gap-8'>
                <div>
                    <InputNumber
                        labelName="Total mass in room:"
                        unitsName="tonn"
                        valueNumber={totalMass}
                        dispatchHandler={setTotalMass}
                    />
                    <InputNumber
                        labelName="Quantity per day:"
                        unitsName="tonn"
                        valueNumber={perDayMass}
                        dispatchHandler={setPerDayMass}
                    />
                    <InputNumber
                        labelName="Inlet temperature:"
                        unitsName="C°"
                        valueNumber={inletProdTemperature}
                        dispatchHandler={setInletProdTemperature}
                    />
                    <p>Q2: <span className='text-xl font-bold'> {q21} </span> kW</p>
                    <p>Q21 from just loaded product: <span className='text-xl font-bold'> {q22New} </span> kW</p>
                    <p>Q21 from stored poduct: <span className='text-xl font-bold'> {q22Old} </span> kW</p>
                </div>
                <div className='sectionInner w-48' >
                    {
                        foodCategoryList.map((category, index) => {
                            return <h1
                                key={`category-${index}`}
                                id={category}
                                className={category === selectedFoodCategory
                                    ? "cursor-pointer bg-sky-500 hover:bg-sky-700 duration-300"
                                    : "cursor-pointer bg-sky-200 hover:bg-sky-700 duration-300"}
                                onClick={foodCategoryHandler}
                            >{category}</h1>
                        })
                    }
                </div>
                <div className='sectionInner w-60'>
                    {
                        foodList.map((food, index) => {
                            return (
                                <div
                                    className={food.foodItem === currentFoodItem
                                        ? "flex gap-6 h-16 my-2 cursor-pointer bg-sky-500 hover:bg-sky-700 duration-300"
                                        : "flex gap-6 h-16 my-2 cursor-pointer bg-sky-200 hover:bg-sky-700 duration-300"}
                                    onClick={foodItemHandler}
                                    key={`food-${index}`}
                                    id={food.foodItem}
                                >
                                    <img
                                        className='w-10 h-10 self-center ml-2'
                                        src={`${URL_IMG_SM}${food.imgSmall}`}
                                        alt={food.foodItem}
                                    />
                                    <h1
                                        className='self-center'
                                    >{food.foodItem}</h1>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='sectionInner w-[450px]'>
                    {foodItemInfo
                        ?
                        <div>
                            <img
                                className='w-[200px]'
                                src={`${URL_IMG_MD}${foodItemInfo.imgMedium}`}
                                alt={foodItemInfo.imgMedium}
                            />
                            <div className='flex gap-6'>
                                <p className='font-semibold w-32'>Product:</p>
                                <p>{foodItemInfo.foodItem}</p>
                            </div>
                            <div className='flex gap-6'>
                                <p className='font-semibold w-32'>Water content:</p>
                                <p className='self-end'>{foodItemInfo.waterContent} <span>%</span> </p>
                            </div>
                            <div className='flex gap-6'>
                                <p className='font-semibold w-32'>Freez temperature:</p>
                                <p className='self-end'>{foodItemInfo.freezPoint} <span>C°</span> </p>
                            </div>
                            <div className='flex gap-6'>
                                <p className='font-semibold w-32'>Storage temperature:</p>
                                <p className='self-end'>{foodItemInfo.storageTemperature} <span>C°</span> </p>
                            </div>
                            <div className='flex gap-6'>
                                <p className='font-semibold w-32'>Storage RH: </p>
                                <p className='self-end'>{foodItemInfo.storageRH} <span>%</span> </p>
                            </div>
                            <div className='flex gap-6'>
                                <p className='font-semibold w-32'>Storage time:</p>
                                <p className='self-end'>{foodItemInfo.storageTime} </p>
                            </div>
                            <div className='flex gap-6'>
                                <p className='font-semibold w-32'>Fresh air: </p>
                                <p className='self-end'>{foodItemInfo.freshAir} <span>m3/h</span> </p>
                            </div>
                            <div className='flex gap-6'>
                                <p className='font-semibold w-32'>Cold room air circulation:</p>
                                <p className='self-end'>{foodItemInfo.airExchange} <span>times room volume per 24 hours</span> </p>
                            </div>
                        </div>
                        : ''
                    }
                </div>
            </div>
        </div>
    );
}

export default Goods;