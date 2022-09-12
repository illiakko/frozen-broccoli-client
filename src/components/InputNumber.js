import React from 'react';
import { useDispatch } from 'react-redux'


const InputNumber = function ({ labelName, valueNumber, unitsName, dispatchHandler, inputWidth, labelWidth }) {
    const dispatch = useDispatch()
    return (
        <React.Fragment>
            <label className='flex my-3'>
                <p className="w-44">{labelName}</p>
                <input
                    className="w-16"
                    type="number"
                    value={valueNumber}
                    onChange={(event) => {
                        dispatch(dispatchHandler(event.target.value))
                    }}
                />
                <p className='mx-3'>{unitsName}</p>
            </label>
        </React.Fragment>

    );
}
// className='w-44'

export default InputNumber;