import React from 'react';

function RoomCommon(props) {
    return (
        <div className='section flex gap-8'>
            <div>
                <p>Room dimentions:</p>
                <label className='flex my-3' >
                    <p className='w-24'>Length:</p>
                    <input className="w-14" type="text" name="" />
                    <p className='mx-3'>m</p>
                </label>
                <label className='flex my-3'>
                    <p className='w-24'>Width:</p>
                    <input className="w-14" type="text" name="" />
                    <p className='mx-3'>m</p>
                </label>
                <label className='flex my-3'>
                    <p className='w-24'>Height:</p>
                    <input className="w-14" type="text" name="" />
                    <p className='mx-3'>m</p>
                </label>
                <div>
                    <label className='flex my-3'>
                        <input className='mx-3' type="radio" name="whatDimentions" checked />
                        <p>Inner dimentions</p>
                    </label>
                    <label className='flex my-3'>
                        <input className='mx-3' type="radio" name="whatDimentions" />
                        <p>Outer dimentions</p>
                    </label>
                </div>
            </div>

            <div>
                <p>Room conditions:</p>
                <div className="flex-col max-w-screen-sm">
                    <label className='flex my-3'>
                        <p className='w-44'>Temperature:</p>
                        <input className="w-14" type="text" name="" id="" />
                        <p className='mx-3'>C°</p>
                    </label>
                    <label className='flex my-3'>
                        <p className='w-44'>Relative humidity:</p>
                        <input className="w-14" type="text" name="" id="" />
                        <p className='mx-3'>%</p>
                    </label>
                    <label className='flex my-3'>
                        <p className='w-44'>Arerage air velocity:</p>
                        <input className="w-14" type="text" name="" id="" />
                        <p className='mx-3'>m/s</p>
                    </label>
                    <label className='flex my-3'>
                        <p className='w-44'>Operating hours:</p>
                        <input className="w-14" type="text" name="" id="" />
                        <p className='mx-3'>h</p>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default RoomCommon;