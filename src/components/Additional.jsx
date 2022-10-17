import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    setLightPower,
    setLightTime,
    setFanNumber,
    setFanPower,
    setFanTime,
    setPeopleNumber,
    setPeopleTime,
    setOtherPower,
    setOtherTime,
    setDefrostType,
    setDefrostPower,
    setDefrostNumber,
    setDefrostTime,

    getLightQ,
    getFanQ,
    getPeopleQ,
    getOtherQ,
    getDefrostQ,

} from '../redux/features/calc/additionalSlice'
import InputNumber from './InputNumber';

function Additional(props) {

    const dispatch = useDispatch()
    const lightPower = useSelector((state) => state.additional.lightPower)
    const lightTime = useSelector((state) => state.additional.lightTime)
    const lightQ = useSelector((state) => state.additional.lightQ)
    const fanNumber = useSelector((state) => state.additional.fanNumber)
    const fanPower = useSelector((state) => state.additional.fanPower)
    const fanTime = useSelector((state) => state.additional.fanTime)
    const fanQ = useSelector((state) => state.additional.fanQ)
    const peopleNumber = useSelector((state) => state.additional.peopleNumber)
    const peopleTime = useSelector((state) => state.additional.peopleTime)
    const peopleQ = useSelector((state) => state.additional.peopleQ)
    const otherPower = useSelector((state) => state.additional.otherPower)
    const otherTime = useSelector((state) => state.additional.otherTime)
    const otherQ = useSelector((state) => state.additional.otherQ)
    const defrostPower = useSelector((state) => state.additional.defrostPower)
    const defrostNumber = useSelector((state) => state.additional.defrostNumber)
    const defrostTime = useSelector((state) => state.additional.defrostTime)
    const defrostType = useSelector((state) => state.additional.defrostType)
    const defrostQ = useSelector((state) => state.additional.defrostQ)

    useEffect(() => {
        dispatch(getLightQ({ lightPower, lightTime }))
    }, [lightPower, lightTime, dispatch])
    useEffect(() => {
        dispatch(getFanQ({ fanNumber, fanPower, fanTime }))
    }, [fanNumber, fanPower, fanTime, dispatch])
    useEffect(() => {
        dispatch(getPeopleQ({ peopleNumber, peopleTime }))
    }, [peopleNumber, peopleTime, dispatch])
    useEffect(() => {
        dispatch(getOtherQ({ otherPower, otherTime }))
    }, [otherPower, otherTime, dispatch])
    useEffect(() => {
        dispatch(getDefrostQ({ defrostType, defrostPower, defrostNumber, defrostTime }))
    }, [defrostType, defrostPower, defrostNumber, defrostTime, dispatch])

    return (
        <div className='section'>
            <div>
                <p>Additional</p>
            </div>

            <div className='flex flex-wrap gap-4'>
                <div className='sectionInner'>
                    <p className='text-sm text-center' >Lights</p>
                    <InputNumber
                        labelName="Lights total:"
                        unitsName="kW"
                        valueNumber={lightPower}
                        dispatchHandler={setLightPower}
                    />
                    <InputNumber
                        labelName="Lights time:"
                        unitsName="h/day"
                        valueNumber={lightTime}
                        dispatchHandler={setLightTime}
                    />
                    <p className='border-t-solid border-t-[1px] pt-3 border-t-slate-300'>{lightQ}, kW</p>

                </div>

                <div className='sectionInner'>
                    <p className='text-sm text-center' >Fans</p>
                    <InputNumber
                        labelName="Fans number:"
                        unitsName=" "
                        valueNumber={fanNumber}
                        dispatchHandler={setFanNumber}
                    />
                    <InputNumber
                        labelName="Power per fan:"
                        unitsName="kW"
                        valueNumber={fanPower}
                        dispatchHandler={setFanPower}
                    />
                    <InputNumber
                        labelName="Fans working time:"
                        unitsName="h/day"
                        valueNumber={fanTime}
                        dispatchHandler={setFanTime}
                    />
                    <p className='border-t-solid border-t-[1px] pt-3 border-t-slate-300'>{fanQ}, kW</p>

                </div>

                <div className='sectionInner'>
                    <p className='text-sm text-center' >People</p>
                    <InputNumber
                        labelName="People number:"
                        unitsName=" "
                        valueNumber={peopleNumber}
                        dispatchHandler={setPeopleNumber}
                    />
                    <InputNumber
                        labelName="Time per worker"
                        unitsName="h/day"
                        valueNumber={peopleTime}
                        dispatchHandler={setPeopleTime}
                    />
                    <p className='border-t-solid border-t-[1px] pt-3 border-t-slate-300'>{peopleQ}, kW</p>

                </div>

                <div className='sectionInner'>
                    <p className='text-sm text-center' >Other</p>
                    <InputNumber
                        labelName="Other:"
                        unitsName="kW"
                        valueNumber={otherPower}
                        dispatchHandler={setOtherPower}
                    />
                    <InputNumber
                        labelName="Other working time:"
                        unitsName="h/day"
                        valueNumber={otherTime}
                        dispatchHandler={setOtherTime}
                    />
                    <p className='border-t-solid border-t-[1px] pt-3 border-t-slate-300'>{otherQ}, kW</p>
                </div>

                <div className="sectionInner">

                    <p className='mb-4'>Defrost</p>

                    <InputNumber
                        labelName="Power:"
                        unitsName="kW"
                        valueNumber={defrostPower}
                        dispatchHandler={setDefrostPower}
                    />
                    <InputNumber
                        labelName="Defrosts per day:"
                        unitsName=" "
                        valueNumber={defrostNumber}
                        dispatchHandler={setDefrostNumber}
                    />
                    <InputNumber
                        labelName="Defrosts time:"
                        unitsName="min"
                        valueNumber={defrostTime}
                        dispatchHandler={setDefrostTime}
                    />
                    <div>
                        <label className='flex gap-4'>
                            <input
                                type="radio"
                                name="defrost"
                                onChange={() => dispatch(setDefrostType("electro"))}
                                defaultChecked />
                            <p>Electric</p>
                        </label>
                        <label className='flex gap-4'>
                            <input
                                type="radio"
                                name="defrost"
                                onChange={() => dispatch(setDefrostType("none"))}
                            />
                            <p>Natural</p>
                        </label>
                    </div>
                    <p className='border-t-solid border-t-[1px] pt-3 border-t-slate-300'>{defrostQ}, kW</p>
                </div>
            </div>
        </div>
    );
}

export default Additional;