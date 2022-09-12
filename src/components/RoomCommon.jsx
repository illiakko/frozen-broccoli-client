import React from 'react';
import { RiWindyFill } from "react-icons/ri";
import { WiStrongWind } from "react-icons/wi";
import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as QuestionIcon } from '../icons/question.svg';
import {
    setRoomLength,
    setRoomWidth,
    setRoomHeight,
    setRoomTemperature,
    setRoomRH,
    setRoomAirVelocity,
    setOperatingHours,
    setCoolingTime,
    setRoomDimentions,
} from '../redux/features/calc/roomCommonSlice'
import InputNumber from './InputNumber';
import Tooltip from './Tooltip/Tooltip';
import { windSpeedMsg } from '../utils/prompts'

function RoomCommon() {

    const dispatch = useDispatch()
    const roomLength = useSelector((state) => state.common.roomLength)
    const roomWidth = useSelector((state) => state.common.roomWidth)
    const roomHeight = useSelector((state) => state.common.roomHeight)
    const roomTemperature = useSelector((state) => state.common.roomTemperature)
    const roomRH = useSelector((state) => state.common.roomRH)
    const operatingHours = useSelector((state) => state.common.operatingHours)
    const coolingTime = useSelector((state) => state.common.coolingTime)
    const roomDimentions = useSelector((state) => state.common.roomDimentions)
    const roomSquare = useSelector((state) => state.common.roomSquare)
    const roomVolume = useSelector((state) => state.common.roomVolume)

    return (
        <div className='section flex gap-8'>
            <div>
                <p>Room dimentions:</p>

                <InputNumber
                    labelName="Length:"
                    unitsName="m"
                    valueNumber={roomLength}
                    dispatchHandler={setRoomLength}
                />
                <InputNumber
                    labelName="Width:"
                    unitsName="m"
                    valueNumber={roomWidth}
                    dispatchHandler={setRoomWidth}
                />
                <InputNumber
                    labelName="Height:"
                    unitsName="m"
                    valueNumber={roomHeight}
                    dispatchHandler={setRoomHeight}
                />

                <div>
                    <label className='flex my-3'>
                        <input
                            className='mx-3'
                            type="radio"
                            name="whatDimentions"
                            defaultChecked
                            onClick={() => {
                                dispatch(setRoomDimentions("outer"))
                            }}
                        />
                        <p>Inner dimentions</p>
                    </label>
                    <label className='flex my-3'>
                        <input
                            className='mx-3'
                            type="radio"
                            name="whatDimentions"
                            onClick={() => {
                                dispatch(setRoomDimentions("inner"))
                            }}
                        />
                        <p>Outer dimentions</p>
                    </label>
                </div>
            </div>

            <div>
                <p>Room conditions:</p>
                <div className="flex-col max-w-screen-sm">
                    <InputNumber
                        labelName="Temperature:"
                        unitsName="C°"
                        valueNumber={roomTemperature}
                        dispatchHandler={setRoomTemperature}
                    />
                    <InputNumber
                        labelName="Relative humidity:"
                        unitsName="%"
                        valueNumber={roomRH}
                        dispatchHandler={setRoomRH}
                    />


                    <div className="text-center flex items-center">
                        <div className="flex gap-2 mr-[61px] cursor-pointer">
                            <p >Air velocity</p>

                            <div className="example-wrapper">
                                <Tooltip
                                    content={
                                        <React.Fragment>
                                            <p>{windSpeedMsg.one}</p>
                                            <div className='flex items-center gap-2'>
                                                <p>{windSpeedMsg.two}</p>
                                                <WiStrongWind className=" w-5 h-5 fill-white block" />
                                            </div>
                                            <div className='flex items-center gap-2'>
                                                <p>{windSpeedMsg.three}</p>
                                                <RiWindyFill className=" w-5 h-5 fill-white" />
                                            </div>
                                        </React.Fragment>
                                    }
                                    direction="left"
                                    delay="400"
                                >
                                    <QuestionIcon className="w-4 h-4 hover:fill-sky-500 transition ease-in-out delay-150" />
                                </Tooltip>
                            </div>

                        </div>
                        <label >
                            <WiStrongWind className="m-auto mt-1 mb-2" />
                            <input
                                className="w-12"
                                type="radio"
                                name="room-wind"
                                defaultChecked
                                onChange={(e) => dispatch(setRoomAirVelocity("slow"))}
                            />
                        </label>
                        <label>
                            <RiWindyFill className="m-auto mt-1 mb-2" />
                            <input
                                className="w-12"
                                type="radio"
                                name="room-wind"
                                onChange={(e) => dispatch(setRoomAirVelocity("fast"))}
                            />
                        </label>
                    </div>




                    <InputNumber
                        labelName="Operating hours:"
                        unitsName="h/day"
                        valueNumber={operatingHours}
                        dispatchHandler={setOperatingHours}
                    />
                    <InputNumber
                        labelName="Cooling time:"
                        unitsName="h"
                        valueNumber={coolingTime}
                        dispatchHandler={setCoolingTime}
                    />
                </div>
            </div>
        </div>
    );
}

export default RoomCommon;