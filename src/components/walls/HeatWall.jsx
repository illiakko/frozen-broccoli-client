import React, { useState, useEffect } from 'react';
import { VscGear } from 'react-icons/vsc';

function HeatWall({ wallName }) {

    const [customConstruction, setCustomConstructiont] = useState('false')
    const [customInsulation, setCustomInsulation] = useState('false')

    const gearConstructionHendler = function (event) {
        setCustomConstructiont(!customConstruction)
        event.currentTarget.classList.toggle('gear-active')
    }
    const gearInsulationHendler = function (event) {
        setCustomInsulation(!customInsulation)
        event.currentTarget.classList.toggle('gear-active')
    }



    return (

        <div className='flex gap-4 items-center mb-4'>
            <p className="w-24">{wallName}</p>

            <div className='flex w-52 sectionInner h-12'>
                {customConstruction
                    ? <select className="mr-10 w-30 h-8" name="" id="">
                        <option value="">Concreat</option>
                        <option value="">Wood</option>
                        <option value="">Brik</option>
                        <option value="">Sand</option>
                    </select>
                    :
                    <div className='w-30'>
                        <label className='flex  h-8' htmlFor="" >
                            <input className='w-16' type="text" />
                            <p className='mx-1 self-center'>W/(m⋅K)</p>
                        </label>
                    </div>
                }
                <VscGear
                    className='gear mx-4'
                    onClick={gearConstructionHendler}
                ></VscGear>
            </div>

            <div className='flex w-52 sectionInner h-12'>
                {customInsulation
                    ? <select className="mr-10 w-30 h-8" name="" id="">
                        <option value="">Concreat</option>
                        <option value="">Wood</option>
                        <option value="">Brik</option>
                        <option value="">Sand</option>
                    </select>
                    :
                    <div className='w-30'>
                        <label className='flex  h-8' htmlFor="" >
                            <input className='w-16' type="text" />
                            <p className='mx-1 self-center'>W/(m⋅K)</p>
                        </label>
                    </div>
                }
                <VscGear
                    className='gear mx-4'
                    onClick={gearInsulationHendler}
                ></VscGear>
            </div>

            <div className='flex sectionInner h-12'>
                <label className='flex '>
                    <input type="text" className='w-16 ' />
                    <p className='mx-2 text-sm self-center'>C°</p>
                </label>

                <label className='flex '>
                    <input type="text" className='w-16 ' />
                    <p className='mx-2 text-sm self-center'>m/s</p>
                </label>

                <label className='flex  '>
                    <input type="text" className='w-16 ' />
                    <p className='mx-2 text-sm self-center'>C°</p>
                </label>

                <div class="form-group">
                    <input class="form-field" type="text" placeholder="domain.tld" />
                    <span>C°</span>
                </div>
            </div>
            <div>
                <p>Result, kW</p>
            </div>
        </div>

    );
}

export default HeatWall;