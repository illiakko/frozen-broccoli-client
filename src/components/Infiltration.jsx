import React from 'react';

function Infiltration(props) {
    return (
        <div className='section'>
            <div>
                <p>Air exchange (infiltration)</p>
            </div>
            <div>
                <label className='flex my-3' >
                    <p className='w-48'>Inlet air:</p>
                    <input type="text" name="" className="w-10" />
                    <p className='mx-3'>C°</p>
                </label>
                <label className='flex my-3' >
                    <p className='w-48'>Relative humidity:</p>
                    <input type="text" name="" className="w-10" />
                    <p className='mx-3'>%</p>
                </label>
                <label className='flex my-3' >
                    <p className='w-48'>Doors are open:</p>
                    <input type="text" name="" className="w-10" />
                    <p className=' mx-3'>h</p>
                </label>

                <label className='flex my-3' >
                    <p className='w-48'>Ventilation air exchange rate:</p>
                    <input type="text" name="" className="w-10" />
                    <p className='w-40 mx-3'>times room volume per 24 hours</p>
                </label>
            </div>
        </div>
    );
}

export default Infiltration;