import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
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

function RoomCommon() {

    const dispatch = useDispatch()
    const roomLength = useSelector((state) => state.common.roomLength)
    const roomWidth = useSelector((state) => state.common.roomWidth)
    const roomHeight = useSelector((state) => state.common.roomHeight)
    const roomTemperature = useSelector((state) => state.common.roomTemperature)
    const roomRH = useSelector((state) => state.common.roomRH)
    const roomAirVelocity = useSelector((state) => state.common.roomAirVelocity)
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
                    <InputNumber
                        labelName="Arerage air velocity:"
                        unitsName="m/s"
                        valueNumber={roomAirVelocity}
                        dispatchHandler={setRoomAirVelocity}
                    />
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