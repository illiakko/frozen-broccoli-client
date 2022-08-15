import React from 'react';

function Goods(props) {
    return (
        <div className="section">
            <div>
                <p>Goods:</p>
            </div>
            <div className='flex gap-8'>
                <div>
                    <label className='flex my-3'>
                        <p className='w-48'>Total mass in room:</p>
                        <input type="text" name="" id="" />
                        <p className='mx-3'>kg</p>
                    </label>
                    <label className='flex my-3'>
                        <p className='w-48'>Quantity per day:</p>
                        <input type="text" name="" id="" />
                        <p className='mx-3'>kg</p>
                    </label>
                    <label className='flex my-3'>
                        <p className='w-48'>Inlet temperature:</p>
                        <input type="text" name="" id="" />
                        <p className='mx-3'>C°</p>
                    </label>
                    <label className='flex my-3'>
                        <p className='w-48'>Respiration heat load:</p>
                        <input type="text" name="" id="" />
                        <p className='mx-3'>kW</p>
                    </label>
                </div>

                <div>
                    <select name="" id="">
                        <option value="">Meat</option>
                        <option value="">Milk</option>
                        <option value="">Oranges</option>
                        <option value="">Tomatos</option>
                    </select>
                </div>
            </div>

        </div>
    );
}

export default Goods;