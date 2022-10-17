import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InputNumber from '../InputNumber';
import Tooltip from '../Tooltip/Tooltip';
import { coolingTimeMsg } from '../../utils/prompts'
import {
    setPackaging,
    setPackagingWeight
} from '../../redux/features/calc/goodsSlice'

const packagingInfo = [
    {
        name: "Wood",
        specificHeat: 1.7,
        weight: 0.1
    },
    {
        name: "Cardboard",
        specificHeat: 1.4,
        weight: 0.5
    },
    {
        name: "Plastic",
        specificHeat: 1.6,
        weight: 0.8
    },
    {
        name: "Aluminum",
        specificHeat: 0.8,
        weight: 0.1
    },
    {
        name: "Steel",
        specificHeat: 0.1,
        weight: 0.1
    },
    {
        name: "Glass",
        specificHeat: 0.8,
        weight: 0.1
    },
]


function PackageType() {

    const dispatch = useDispatch()
    const packagingWeight = useSelector((state) => state.goods.packaging.weight)

    return (
        <div>
            <p className='my-4 font-semibold'>Packaging:</p>
            <div className='flex gap-6'>
                <p>Packaging type:</p>
                <select
                    onChange={(event) => {
                        dispatch(setPackaging(packagingInfo.find(packaging => packaging.name === event.currentTarget.value)))
                    }
                    }
                >
                    {packagingInfo.map((packaging, index) => (
                        <option key={packaging.name + index} value={packaging.name}>{packaging.name}</option>
                    ))}
                </select>
            </div>
            <InputNumber
                labelName="Packaging weight:"
                unitsName="kg/kg"
                valueNumber={packagingWeight}
                dispatchHandler={setPackagingWeight}
            />
        </div>
    );
}

export default PackageType;