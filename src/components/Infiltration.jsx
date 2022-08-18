import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {
    setAirInletTemperature,
    setAirInletRH,
    setDorsOpenHours,
    setDorsNumber,
    setDorsWidth,
    setDorsHeight,
    setDorsProtection,
    setVentilationIsOn,
    setVentilatedAirTemperature,
    setVentilatedAirRH,
    setAirExchange,
} from '../redux/features/calc/infiltrationSlice'
import InputNumber from './InputNumber';

function Infiltration() {

    const dispatch = useDispatch()
    const airInletTemperature = useSelector((state) => state.infiltration.airInletTemperature)
    const airInletRH = useSelector((state) => state.infiltration.airInletRH)
    const dorsOpenHours = useSelector((state) => state.infiltration.dorsOpenHours)
    const dorsNumber = useSelector((state) => state.infiltration.dorsNumber)
    const dorsWidth = useSelector((state) => state.infiltration.dorsWidth)
    const dorsHeight = useSelector((state) => state.infiltration.dorsHeight)
    const dorsProtection = useSelector((state) => state.infiltration.dorsProtection)
    const ventilationIsOn = useSelector((state) => state.infiltration.ventilationIsOn)
    const ventilatedAirTemperature = useSelector((state) => state.infiltration.ventilatedAirTemperature)
    const ventilatedAirRH = useSelector((state) => state.infiltration.ventilatedAirRH)
    const airExchange = useSelector((state) => state.infiltration.airExchange)

    return (
        <div className='section'>
            <div>
                <p>Air exchange (infiltration)</p>
            </div>
            <InputNumber
                labelName="Inlet air:"
                unitsName="°C"
                valueNumber={airInletTemperature}
                dispatchHandler={setAirInletTemperature}
            />
            <InputNumber
                labelName="Relative humidity:"
                unitsName="%"
                valueNumber={airInletRH}
                dispatchHandler={setAirInletRH}
            />
            <InputNumber
                labelName="Doors are open:"
                unitsName="h"
                valueNumber={dorsOpenHours}
                dispatchHandler={setDorsOpenHours}
            />
            <InputNumber
                labelName="Doors number:"
                unitsName=" "
                valueNumber={dorsNumber}
                dispatchHandler={setDorsNumber}
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
            <p>setDorsProtection</p>
            <p>setVentilationIsOn</p>
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
    );
}

export default Infiltration;