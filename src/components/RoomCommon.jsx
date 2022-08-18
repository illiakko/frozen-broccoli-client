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
                </div>
            </div>
            <div>
                <p>Length:  <span>{roomLength}</span></p>
                <p>Width:  <span>{roomWidth}</span></p>
                <p>Height:  <span>{roomHeight}</span></p>
                <p>Temperature:  <span>{roomTemperature}</span></p>
                <p>Relative humidity: <span>{roomRH}</span></p>
                <p>Arerage air velocity: <span>{roomAirVelocity}</span></p>
                <p>Operating hours:  <span>{operatingHours}</span></p>
                <p>dimentions:  <span>{roomDimentions}</span></p>
                <p>-------</p>
                <p>Room square:  <span>{roomSquare}</span></p>
                <p>Room volume:  <span>{roomVolume}</span></p>
            </div>
        </div>
    );
}

export default RoomCommon;