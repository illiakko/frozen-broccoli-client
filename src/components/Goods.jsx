import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {
    setTotalMass,
    setPerDayMass,
    setInletProdTemperature,
} from '../redux/features/calc/goodsSlice'
import InputNumber from './InputNumber';

function Goods(props) {

    const dispatch = useDispatch()
    const totalMass = useSelector((state) => state.goods.totalMass)
    const perDayMass = useSelector((state) => state.goods.perDayMass)
    const inletProdTemperature = useSelector((state) => state.goods.inletProdTemperature)



    return (
        <div className="section">
            <div>
                <p>Goods:</p>
            </div>
            <div className='flex gap-8'>
                <div>
                    <InputNumber
                        labelName="Total mass in room:"
                        unitsName="kg"
                        valueNumber={totalMass}
                        dispatchHandler={setTotalMass}
                    />
                    <InputNumber
                        labelName="Quantity per day:"
                        unitsName="kg"
                        valueNumber={perDayMass}
                        dispatchHandler={setPerDayMass}
                    />
                    <InputNumber
                        labelName="Inlet temperature:"
                        unitsName="C°"
                        valueNumber={inletProdTemperature}
                        dispatchHandler={setInletProdTemperature}
                    />

                    <label className='flex my-3'>
                        <p className='w-48'>Respiration heat load:</p>
                        <input type="text" name="" id="" />
                        <p className='mx-3'>kW</p>
                    </label>
                </div>

                <div>
                    <select name="" id="">
                        <option value="">Meat</option>
                        <option value="">Milk</option>
                        <option value="">Oranges</option>
                        <option value="">Tomatos</option>
                    </select>
                </div>
            </div>
            <div>
                -------------
                <p>Total mass in room:  <span>{totalMass}</span></p>
                <p>Quantity per day:  <span>{perDayMass}</span></p>
                <p>Inlet temperature: <span>{inletProdTemperature}</span></p>
            </div>
        </div>
    );
}

export default Goods;