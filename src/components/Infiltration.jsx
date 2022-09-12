import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    setAirDoorTemperature,
    setAirDoorRH,
    setDorsOpenHours,
    setDorsWidth,
    setDorsHeight,
    setDorsProtection,
    setVentilationIsOn,
    setVentilatedAirTemperature,
    setVentilatedAirRH,
    setAirExchange,
    getQ3vent,
    getQ44dors,
} from '../redux/features/calc/infiltrationSlice'
import InputNumber from './InputNumber';

function Infiltration() {

    const dispatch = useDispatch()

    const airDoorTemperature = useSelector((state) => state.infiltration.airDoorTemperature)
    const airDoorRH = useSelector((state) => state.infiltration.airDoorRH)
    const dorsOpenHours = useSelector((state) => state.infiltration.dorsOpenHours)
    const dorsWidth = useSelector((state) => state.infiltration.dorsWidth)
    const dorsHeight = useSelector((state) => state.infiltration.dorsHeight)
    const dorsProtection = useSelector((state) => state.infiltration.dorsProtection)
    const ventilationIsOn = useSelector((state) => state.infiltration.ventilationIsOn)
    const ventilatedAirTemperature = useSelector((state) => state.infiltration.ventilatedAirTemperature)
    const ventilatedAirRH = useSelector((state) => state.infiltration.ventilatedAirRH)
    const airExchange = useSelector((state) => state.infiltration.airExchange)

    const Q3vent = useSelector((state) => state.infiltration.Q3vent)
    const Q44dors = useSelector((state) => state.infiltration.Q44dors)

    const roomTemperature = useSelector((state) => state.common.roomTemperature)
    const roomRH = useSelector((state) => state.common.roomRH)
    const roomLength = useSelector((state) => state.common.roomLength)
    const roomWidth = useSelector((state) => state.common.roomWidth)
    const roomHeight = useSelector((state) => state.common.roomHeight)


    useEffect(() => {
        Q3hendler()
        Q44hendler()
    }, [airDoorTemperature,
        airDoorRH,
        dorsOpenHours,
        dorsWidth,
        dorsHeight,
        dorsProtection,
        ventilationIsOn,
        ventilatedAirTemperature,
        ventilatedAirRH,
        airExchange, roomTemperature, roomRH, roomLength, roomWidth, roomHeight])

    const Q3hendler = () => {
        dispatch(getQ3vent(
            {
                ventilationIsOn,
                ventilatedAirTemperature,
                ventilatedAirRH,
                airExchange,
                roomLength,
                roomWidth,
                roomHeight,
                roomTemperature,
                roomRH
            }
        ))
    }
    const Q44hendler = () => {
        dispatch(getQ44dors(
            {
                airDoorTemperature,
                airDoorRH,
                dorsOpenHours,
                dorsWidth,
                dorsHeight,
                dorsProtection,
                roomTemperature,
                roomRH
            }
        ))
    }



    return (
        <div className='section'>
            <div>
                <p>Air exchange (infiltration)</p>
            </div>
            <div className='flex gap-8'>
                <div className='sectionInner '>
                    <div>
                        <p>Doors</p>
                    </div>
                    <InputNumber
                        labelName="Inlet air:"
                        unitsName="°C"
                        valueNumber={airDoorTemperature}
                        dispatchHandler={setAirDoorTemperature}
                    />
                    <InputNumber
                        labelName="Relative humidity:"
                        unitsName="%"
                        valueNumber={airDoorRH}
                        dispatchHandler={setAirDoorRH}
                    />
                    <InputNumber
                        labelName="Doors time:"
                        unitsName="h"
                        valueNumber={dorsOpenHours}
                        dispatchHandler={setDorsOpenHours}
                    />
                    <InputNumber
                        labelName="Doors width:"
                        unitsName="m"
                        valueNumber={dorsWidth}
                        dispatchHandler={setDorsWidth}
                    />
                    <InputNumber
                        labelName="Doors height:"
                        unitsName="m"
                        valueNumber={dorsHeight}
                        dispatchHandler={setDorsHeight}
                    />
                    <div className='sectionInner'>
                        <p>Door infiltration protection</p>
                        <label className='flex my-3'>
                            <input
                                className='mx-3'
                                type="radio"
                                name="doorProtection"
                                defaultChecked
                                onClick={() => {
                                    dispatch(setDorsProtection("noProtection"))
                                }}
                            />
                            <p>No infiltration protection</p>
                        </label>
                        <label className='flex my-3'>
                            <input
                                className='mx-3'
                                type="radio"
                                name="doorProtection"
                                defaultChecked
                                onClick={() => {
                                    dispatch(setDorsProtection("stripCurtain"))
                                }}
                            />
                            <p>Strip Curtain</p>
                        </label>
                        <label className='flex my-3'>
                            <input
                                className='mx-3'
                                type="radio"
                                name="doorProtection"
                                defaultChecked
                                onClick={() => {
                                    dispatch(setDorsProtection("airCurtain"))
                                }}
                            />
                            <p>Air Curtain</p>
                        </label>
                    </div>
                </div>

                <div className='sectionInner'>
                    <div>
                        Cold room ventilation
                    </div>
                    <label className='flex gap-6'>
                        <input type="checkbox" />
                        <p>Enable ventilation</p>
                    </label>
                    <InputNumber

                        labelName="Ventilation air temperature:"
                        unitsName="°C"
                        valueNumber={ventilatedAirTemperature}
                        dispatchHandler={setVentilatedAirTemperature}
                    />
                    <InputNumber
                        labelName="Ventilation air humidity:"
                        unitsName="%"
                        valueNumber={ventilatedAirRH}
                        dispatchHandler={setVentilatedAirRH}
                    />
                    <InputNumber
                        labelName="Air exchange rate:"
                        unitsName="times room volume per 24 hours"
                        valueNumber={airExchange}
                        dispatchHandler={setAirExchange}
                    />
                </div>
            </div>
            <p>Q3: <span className='text-xl font-bold'>{Q3vent}</span> kW</p>
            <p>Q44: <span className='text-xl font-bold'> {Q44dors} </span> kW</p>
        </div>
    );
}

export default Infiltration;