import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { VscGear } from 'react-icons/vsc';

const URL_MT_IMG = `${process.env.REACT_APP_DOMAIN}/static/materials-150/`


function Select({ materialsCatalog,
    setMaterial,
    setThickness,
    material,
    thickness,
    setCustom,
    setIsCustom,
    isCustom,
    custom }) {

    const dispatch = useDispatch()
    const [selectOpen, setSelectOpen] = useState('false')


    return (


        <React.Fragment>
            {isCustom
                ?
                <div className='relative'>
                    <div
                        key={material.id}
                        id={material.id}
                        className="items-center gap-4 cursor-pointer flex justify-between "
                        onClick={() => setSelectOpen(!selectOpen)}
                    >
                        <img
                            className='w-12 rounded-md'
                            src={URL_MT_IMG + material.image}
                            alt={material.name}
                        />
                        <div>
                            <p>{material.name}</p>
                            <p className='text-sm'>( {material.heatTransfer} W/mK)</p>
                        </div>
                    </div>



                    {!selectOpen &&
                        <div className="sectionInner absolute top-16 left-[-6px] bg-slate-50 z-10 glowing-border">{
                            materialsCatalog.map(insulation => {
                                return (
                                    <div
                                        key={insulation.id}
                                        id={insulation.id}
                                        className="flex items-center gap-4 cursor-pointer w-[360px] rounded hover:bg-sky-100 ease-in duration-300 p-3"
                                        onClick={
                                            (event) => {
                                                const currentMaterial = materialsCatalog.filter(construction => construction.id === event.currentTarget.id * 1)
                                                dispatch(setMaterial(currentMaterial[0]))
                                                setSelectOpen(!selectOpen)
                                            }
                                        }
                                    >
                                        <div>
                                            <img
                                                className='w-12 rounded-md'
                                                src={URL_MT_IMG + insulation.image}
                                                alt={insulation.name}
                                            />
                                        </div>
                                        <div>
                                            <p>{insulation.name}</p>
                                            <p className='text-sm'>( {insulation.heatTransfer} W/mK)</p>
                                        </div>
                                    </div>
                                )
                            })
                        }</div>
                    }
                </div>
                :
                <div className='flex gap-1 items-center'>
                    <label className='flex  h-8' htmlFor="" >
                        <input
                            className=' ml-4 w-24'
                            type="number" step="0.1"
                            value={custom}
                            onChange={(event) => { dispatch(setCustom(event.currentTarget.value)) }}
                        />
                        <p className='mx-1 self-center'>W/(m⋅K)</p>
                    </label>
                </div>
            }

            <div className='flex gap-1 items-center'>
                <VscGear
                    className='gear m-4 h-6 w-6'
                    onClick={
                        (event) => {
                            dispatch(setIsCustom(!isCustom))
                            event.currentTarget.classList.toggle('gear-active')
                        }
                    }
                ></VscGear>


                <label className='mb-3'>
                    <p className='text-center text-sm pb-1'>mm</p>
                    <input
                        type="number"
                        className='mb-2 w-14'
                        value={thickness}
                        onChange={(event) => { dispatch(setThickness(event.currentTarget.value)) }}
                    />
                </label>
            </div>
        </React.Fragment>













    );
}

export default Select;