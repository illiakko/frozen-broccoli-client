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
    setCurrentFoodCategory,
    getQ2,
    setCoolingTime
} from '../../redux/features/calc/goodsSlice'
import ProductInfo from './ProductInfo';
import PackageType from './PackageType'


const URL_IMG_SM = `${process.env.REACT_APP_DOMAIN}/static/img-150/`
// "http://localhost:8000"


function Goods() {

    const dispatch = useDispatch()
    const totalMass = useSelector((state) => state.goods.totalMass)
    const perDayMass = useSelector((state) => state.goods.perDayMass)
    const inletProdTemperature = useSelector((state) => state.goods.inletProdTemperature)


    const foodCategoryList = useSelector((state) => state.goods.foodCategoryList)
    const foodList = useSelector((state) => state.goods.foodList)
    const roomTemperature = useSelector((state) => state.common.roomTemperature)
    const coolingTime = useSelector((state) => state.goods.coolingTime)
    const packaging = useSelector((state) => state.goods.packaging)

    const currentFoodItem = useSelector((state) => state.goods.currentFoodItem)
    const currentFoodCategory = useSelector((state) => state.goods.currentFoodCategory)
    // const q21 = useSelector((state) => state.goods.q21)
    // const q22New = useSelector((state) => state.goods.q22New)
    // const q22Old = useSelector((state) => state.goods.q22Old)
    // const q21packaging = useSelector((state) => state.goods.q21packaging)

    useEffect(() => {
        dispatch(getFoodCategories())
        dispatch(getFoodItemsOfCategory(currentFoodCategory))
        dispatch(getFoodItemInfo(currentFoodItem))
    }, [currentFoodCategory])


    useEffect(() => {
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
    }, [roomTemperature,
        currentFoodItem,
        totalMass,
        perDayMass,
        inletProdTemperature,
        coolingTime,
        packaging])


    const foodCategoryHandler = (event) => {
        dispatch(setCurrentFoodCategory(event.currentTarget.id))
        dispatch(getFoodItemsOfCategory(event.currentTarget.id))
    }

    const foodItemHandler = (event) => {
        dispatch(setCurrentFoodItem(event.currentTarget.id))
        dispatch(getFoodItemInfo(event.currentTarget.id))
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

                </div>
                <div className='sectionInner w-48' >
                    {
                        foodCategoryList.map((category, index) => {
                            return (
                                <div className='m-2'>
                                    <p
                                        key={`category-${index}`}
                                        id={category}
                                        className={category === currentFoodCategory
                                            ? "p-5 m-auto text-center  cursor-pointer hover:bg-[#dde6eb] text-white rounded-lg bg-[#969da0] ease-in-out duration-300"
                                            : "p-5 m-auto text-center cursor-pointer hover:bg-[#dde6eb] text-green-900 rounded-lg bg-[#bec6ca] ease-in-out duration-300"

                                        }

                                        onClick={(event) => {
                                            foodCategoryHandler(event)
                                        }}
                                    >{category}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='sectionInner w-60'>
                    {
                        foodList.map((food, index) => {
                            return (
                                <div
                                    className={food.foodItem === currentFoodItem
                                        ? "flex gap-6 h-16 my-2 cursor-pointer hover:bg-[#dde6eb] text-white rounded-lg bg-[#969da0] ease-in-out duration-300"
                                        : "flex gap-6 h-16 my-2 cursor-pointer hover:bg-[#dde6eb] text-green-900 rounded-lg bg-[#bec6ca] ease-in-out duration-300"
                                    }
                                    onClick={foodItemHandler}
                                    key={`food-${index}`}
                                    id={food.foodItem}
                                >
                                    <img
                                        className='w-10 h-10 self-center ml-2 rounded-md'
                                        src={`${URL_IMG_SM}${food.imgSmall}`}
                                        alt={food.foodItem}
                                    />
                                    <p
                                        className='self-center'
                                    >{food.foodItem}</p>
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