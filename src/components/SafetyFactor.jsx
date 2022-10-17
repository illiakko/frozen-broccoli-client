import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as QuestionIcon } from '../icons/question.svg';

import {
    setOperatingHours,
    setSafetyFactor,
    setPipeLosses,
} from '../redux/features/calc/safetySlice'

import InputNumber from './InputNumber';
import Tooltip from './Tooltip/Tooltip';
import { operatingHoursMsg, safetyFactorMsg, pipeLossesMsg } from '../utils/prompts'


function SafetyFactor(props) {

    const operatingHours = useSelector((state) => state.safety.operatingHours)
    const safetyFactor = useSelector((state) => state.safety.safetyFactor)
    const pipeLosses = useSelector((state) => state.safety.pipeLosses)



    return (
        <div className='sectionInner'>
            <div>
                <p>Safety factors</p>
            </div>


            <div className='flex  items-center'>
                <InputNumber
                    labelName="Safety factor:"
                    unitsName="%"
                    valueNumber={safetyFactor}
                    dispatchHandler={setSafetyFactor}
                />
                <Tooltip
                    content={
                        <React.Fragment>
                            <p>{safetyFactorMsg.one}</p>
                            <p>{safetyFactorMsg.two}</p>
                            <p>{safetyFactorMsg.three}</p>
                            <p>{safetyFactorMsg.four}</p>
                        </React.Fragment>
                    }
                    direction="right"
                    delay="400"
                >
                    <QuestionIcon className="w-4 h-4 hover:fill-sky-500 transition ease-in-out delay-150" />
                </Tooltip>
            </div>


            <div className='flex  items-center'>
                <InputNumber
                    labelName="Operating hours:"
                    unitsName="h/day"
                    valueNumber={operatingHours}
                    dispatchHandler={setOperatingHours}
                />
                <Tooltip
                    content={
                        <React.Fragment>
                            <p>{operatingHoursMsg.one}</p>
                            <p>{operatingHoursMsg.two}</p>
                            <p>{operatingHoursMsg.three}</p>
                        </React.Fragment>
                    }
                    direction="right"
                    delay="400"
                >
                    <QuestionIcon className="w-4 h-4 hover:fill-sky-500 transition ease-in-out delay-150" />
                </Tooltip>
            </div>


            <div className='flex  items-center'>
                <InputNumber
                    labelName="Losses in pipes:"
                    unitsName="%"
                    valueNumber={pipeLosses}
                    dispatchHandler={setPipeLosses}
                />
                <Tooltip
                    content={
                        <React.Fragment>
                            <p>{pipeLossesMsg.one}</p>
                            <p>{pipeLossesMsg.two}</p>
                            <p>{pipeLossesMsg.three}</p>
                            <p>{pipeLossesMsg.four}</p>
                        </React.Fragment>
                    }
                    direction="right"
                    delay="400"
                >
                    <QuestionIcon className="w-4 h-4 hover:fill-sky-500 transition ease-in-out delay-150" />
                </Tooltip>
            </div>



        </div>
    );
}

export default SafetyFactor;