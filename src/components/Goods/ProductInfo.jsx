import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
const URL_IMG_MD = "http://localhost:8000/static/img-300/"

function ProductInfo(props) {
    const foodItemInfo = useSelector((state) => state.goods.foodItemInfo)

    return (
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
    );
}

export default ProductInfo;