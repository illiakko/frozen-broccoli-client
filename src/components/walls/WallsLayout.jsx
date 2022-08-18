import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { WallCalc } from '../../redux/features/calc/wallsSlice'
import HeatWall from './HeatWall'

export default function WallsLayout() {

    const [A, setA] = useState('')
    const [B, setB] = useState('')

    const { result } = useSelector((state) => state.walls)

    const dispatch = useDispatch()

    useEffect(() => {
        handleChange()
    }, [A, B])

    const handleChange = () => {
        try {
            dispatch(WallCalc({ A, B }))
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='section' >
            <div>
                <p className='mb-4'>Heat transfer</p>
            </div>

            <div>
                <div >
                    <div className='flex mb-2 gap-4'>
                        <p className='w-24 text-sm'>Wall</p>
                        <p className='w-52 text-center text-sm'>Construction</p>
                        <p className='w-52 text-center text-sm'>Insulation</p>
                        <p className='w-24 text-center text-sm'>Temperature</p>
                        <p className='w-24 text-center text-sm'>Out air velocity</p>
                        <p className='w-28 text-center text-sm'>Sunlight add temperature</p>
                    </div>
                    <HeatWall wallName={"Front"} />
                    <HeatWall wallName={"Back"} />
                    <HeatWall wallName={"Left"} />
                    <HeatWall wallName={"Right"} />
                    <HeatWall wallName={"Ceiling"} />
                    <HeatWall wallName={"Floor"} />
                </div>




                <label>
                    <p className="">A</p>
                    <input type="text"
                        value={A}
                        onChange={(e) => setA(e.target.value)}
                        placeholder='A'
                    />
                </label>
                <label>
                    <p className=" ">B</p>
                    <input type="text"
                        value={B}
                        onChange={(e) => setB(e.target.value)}
                        placeholder='B'
                    />
                </label>
                <div>
                    <p className="text-white">Result: {result}</p>
                </div>
            </div>
        </div>
    );
}
