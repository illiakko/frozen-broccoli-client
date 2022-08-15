import React from 'react';

function Defrost(props) {
    return (
        <div className="section">
            <div>
                <p className='mb-4'>Defrost</p>
            </div>
            <div className='flex gap-4'>
                <label className='flex gap-4'>
                    <input type="radio" name="defrostType" id="" />
                    <p>Electric</p>
                </label>
                <label className='flex gap-4'>
                    <input type="radio" name="defrostType" id="" />
                    <p>Natural</p>
                </label>
            </div>
            <div>
                <label className='flex my-3'>
                    <p className='w-36'>Porer</p>
                    <input type="text" />
                    <p p className='mx-3'>W</p>
                </label>
                <label className='flex my-3'>
                    <p className='w-36'>Defrosts per day</p>
                    <input type="text" />
                </label>
                <label className='flex my-3'>
                    <p className='w-36'>Defrosts time</p>
                    <input type="text" />
                </label>
            </div>
        </div>
    );
}

export default Defrost;