import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InputNumber from '../InputNumber';
import Tooltip from '../Tooltip/Tooltip';
import { coolingTimeMsg } from '../../utils/prompts'
import { ReactComponent as QuestionIcon } from '../../icons/question.svg';
import {
    setTotalMass,
    setPerDayMass,
    setInletProdTemperature,
    getFoodCategories,
    getFoodItemsOfCategory,
    getFoodItemInfo,
    setCurrentFoodItem,
    getQ2,
    setCoolingTime
} from '../../redux/features/calc/goodsSlice'
import ProductInfo from './ProductInfo';
import PackageType from './PackageType'

const URL_IMG_SM = "http://localhost:8000/static/img-150/"


function Goods() {

    const dispatch = useDispatch()
    const totalMass = useSelector((state) => state.goods.totalMass)
    const perDayMass = useSelector((state) => state.goods.perDayMass)
    const inletProdTemperature = useSelector((state) => state.goods.inletProdTemperature)
    const [selectedFoodCategory, setSelectedFoodCategory] = useState('')


    const foodCategoryList = useSelector((state) => state.goods.foodCategoryList)
    const foodList = useSelector((state) => state.goods.foodList)
    const roomTemperature = useSelector((state) => state.common.roomTemperature)
    const coolingTime = useSelector((state) => state.goods.coolingTime)
    const packaging = useSelector((state) => state.goods.packaging)

    const currentFoodItem = useSelector((state) => state.goods.currentFoodItem)
    const q21 = useSelector((state) => state.goods.q21)
    const q22New = useSelector((state) => state.goods.q22New)
    const q22Old = useSelector((state) => state.goods.q22Old)
    const q21packaging = useSelector((state) => state.goods.q21packaging)

    useEffect(() => {
        dispatch(getFoodCategories())
        setSelectedFoodCategory("Fruits")
        dispatch(getFoodItemsOfCategory("Fruits"))
        dispatch(setCurrentFoodItem("Pears"))
        dispatch(getFoodItemInfo("Pears"))
    }, [])


    useEffect(() => {
        q2Handler()
    }, [roomTemperature, currentFoodItem, totalMass, perDayMass, inletProdTemperature, coolingTime, packaging])


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
                coolingTime,
                packaging,
            }
        ))
    }

    return (
        <div className="section">
            <div>
                <p className='font-semibold'>Goods:</p>
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
                    <div className='flex  items-center'>
                        <InputNumber
                            labelName="Cooling time:"
                            unitsName="h"
                            valueNumber={coolingTime}
                            dispatchHandler={setCoolingTime}
                        />
                        <Tooltip
                            content={
                                <React.Fragment>
                                    <p>{coolingTimeMsg.one}</p>
                                    <p>{coolingTimeMsg.two}</p>
                                    <p>{coolingTimeMsg.three}</p>
                                </React.Fragment>
                            }
                            direction="right"
                            delay="400"
                        >
                            <QuestionIcon className="w-4 h-4 hover:fill-sky-500 transition ease-in-out delay-150" />
                        </Tooltip>
                    </div>
                    <PackageType />
                    <p>Q2: <span className='text-xl font-bold'> {q21} </span> kW</p>
                    <p>Q21 from just loaded product: <span className='text-xl font-bold'> {q22New} </span> kW</p>
                    <p>Q21 from stored poduct: <span className='text-xl font-bold'> {q22Old} </span> kW</p>
                    <p>Q21 from packaging: <span className='text-xl font-bold'> {q21packaging} </span> kW</p>
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
                <ProductInfo />
            </div>
        </div>
    );
}

export default Goods;