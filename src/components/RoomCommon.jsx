import React from 'react';
import { useSelector } from 'react-redux'
import { ReactComponent as QuestionIcon } from '../icons/question.svg';
import {
    setRoomLength,
    setRoomWidth,
    setRoomHeight,
    setRoomTemperature,
    setRoomRH,
} from '../redux/features/calc/roomCommonSlice'
import InputNumber from './InputNumber';
// import Tooltip from './Tooltip/Tooltip';
// import { operatingHoursMsg, coolingTimeMsg } from '../utils/prompts'
import ColdroomSvg from './coldroom/ColdroomSvg'

function RoomCommon() {

    const roomLength = useSelector((state) => state.common.roomLength)
    const roomWidth = useSelector((state) => state.common.roomWidth)
    const roomHeight = useSelector((state) => state.common.roomHeight)
    const roomTemperature = useSelector((state) => state.common.roomTemperature)
    const roomRH = useSelector((state) => state.common.roomRH)


    return (
        <div className='section flex gap-8'>
            <div>
                <p>Room dimensions:</p>

                <InputNumber
                    labelName="Length (inner):"
                    unitsName="m"
                    valueNumber={roomLength}
                    dispatchHandler={setRoomLength}

                />
                <InputNumber
                    labelName="Width  (inner):"
                    unitsName="m"
                    valueNumber={roomWidth}
                    dispatchHandler={setRoomWidth}

                />
                <InputNumber
                    labelName="Height (inner):"
                    unitsName="m"
                    valueNumber={roomHeight}
                    dispatchHandler={setRoomHeight}

                />
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
                </div>
            </div>

            <div className='w-[400px]'>
                <ColdroomSvg />
            </div>
        </div>
    );
}

export default RoomCommon;