import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
    setQTotall
} from '../redux/features/calc/roomCommonSlice'
import DwnldBtn from './DwnldBtn'

function SideResult() {

    const dispatch = useDispatch()

    const q1Front = useSelector((state) => state.walls.frontWall.heatLoad)
    const q1Back = useSelector((state) => state.walls.backWall.heatLoad)
    const q1Left = useSelector((state) => state.walls.leftWall.heatLoad)
    const q1Right = useSelector((state) => state.walls.rightWall.heatLoad)
    const q1Top = useSelector((state) => state.walls.topWall.heatLoad)
    const q1Bottom = useSelector((state) => state.walls.bottomWall.heatLoad)
    const q1Totall = useSelector((state) => state.walls.q1Totall)

    const q21 = useSelector((state) => state.goods.q21)
    const q21packaging = useSelector((state) => state.goods.q21packaging)
    const q22new = useSelector((state) => state.goods.q22New)
    const q22old = useSelector((state) => state.goods.q22Old)
    const q2Totall = useSelector((state) => state.goods.q2Totall)

    const q3vent = useSelector((state) => state.infiltration.Q3vent)
    const q44dors = useSelector((state) => state.infiltration.Q44dors)

    const lightQ = useSelector((state) => state.additional.lightQ)
    const fanQ = useSelector((state) => state.additional.fanQ)
    const peopleQ = useSelector((state) => state.additional.peopleQ)
    const otherQ = useSelector((state) => state.additional.otherQ)
    const defrostQ = useSelector((state) => state.additional.defrostQ)
    const q4Totall = useSelector((state) => state.additional.q4Totall)

    const qTotall = useSelector((state) => state.common.qTotall)

    const operatingHours = useSelector((state) => state.safety.operatingHours)
    const safetyFactor = useSelector((state) => state.safety.safetyFactor)
    const pipeLosses = useSelector((state) => state.safety.pipeLosses)


    const q1TotalSafe = Math.round((qTotall * (1 + (safetyFactor / 100))) * 100) / 100
    const evaporator = Math.round((q1TotalSafe * (24 / operatingHours)) * 100) / 100
    const compressor = Math.round((q1TotalSafe * (24 / operatingHours) * (1 + (pipeLosses / 100))) * 100) / 100





    useEffect(() => {
        dispatch(setQTotall(Math.round((q1Totall + q2Totall + q3vent + q44dors + q4Totall) * 100) / 100))
    }, [q1Totall, q2Totall, q3vent, q44dors, q4Totall])

    // console.log(q1Total, q21, q22new, q22old, q3vent, q44dors, lightQ, fanQ, peopleQ, otherQ, defrostQ);
    return (
        <React.Fragment>
            <div className='sectionInner'>
                <div >
                    <p className='uppercase'>Transmission load</p>
                </div>
                <div className='flex py-3 px-4 gap-4 text-sm justify-between'>
                    <div>
                        <div className='flex my-2 gap-3 justify-between'>
                            <p className='text-center'>Front wall:</p>
                            <p className='text-center'>{q1Front} kW</p>
                        </div>
                        <div className='flex  my-2 gap-3 justify-between'>
                            <p className='text-center'>Left wall:</p>
                            <p className='text-center'>{q1Left} kW</p>
                        </div>
                        <div className='flex  my-2 gap-3 justify-between'>
                            <p className='text-center'>Ceiling:</p>
                            <p className='text-center'>{q1Top} kW</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex  my-2 gap-3 justify-between'>
                            <p className='text-center'>Back wall:</p>
                            <p className='text-center'>{q1Back} kW</p>
                        </div>
                        <div className='flex  my-2 gap-3 justify-between'>
                            <p className='text-center'>Right wall:</p>
                            <p className='text-center'>{q1Right} kW</p>
                        </div>
                        <div className='flex  my-2 gap-3 justify-between'>
                            <p className='text-center'>Floor:</p>
                            <p className='text-center'>{q1Bottom} kW</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <p>Total:</p>
                    <p>{q1Totall} kW</p>
                </div>
            </div>



            <div className='sectionInner'>
                <div >
                    <p className='uppercase'>Product load </p>
                </div>
                <div className=' px-5 text-sm'>
                    <div className='flex justify-between my-3'>
                        <p>Daily entered product: </p>
                        <p>{q21} kW</p>
                    </div>
                    <div className='flex justify-between my-3'>
                        <p>Daily entered packaging: </p>
                        <p>{q21packaging} kW</p>
                    </div>
                    <div className='flex justify-between  my-3'>
                        <p>Entry product breathing:</p>
                        <p>{q22new} kW</p>
                    </div>
                    <div className='flex justify-between my-3'>
                        <p>Stored product breathing:</p>
                        <p>{q22old} kW</p>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <p>Total:</p>
                    <p>{q2Totall} kW</p>
                </div>
            </div>

            <div className='sectionInner'>
                <div >
                    <p className='uppercase'>Infiltration </p>
                </div>
                <div className=' px-5 text-sm'>
                    <div className='flex justify-between my-3'>
                        <p>Ventilation:</p>
                        <p>{q3vent} kW</p>
                    </div>
                    <div className='flex justify-between my-3'>
                        <p>Door infiltration:</p>
                        <p>{q44dors} kW</p>
                    </div>
                </div>
            </div>

            <div className='sectionInner'>
                <div >
                    <p className='uppercase'>Exploitation load</p>
                </div>
                <div className=' px-5 text-sm'>

                    <div className='flex justify-between my-3'>
                        <p>Light:</p>
                        <p>{lightQ} kW</p>
                    </div>
                    <div className='flex justify-between my-3'>
                        <p>Fans:</p>
                        <p>{fanQ} kW</p>
                    </div>
                    <div className='flex justify-between my-3'>
                        <p>People:</p>
                        <p>{peopleQ} kW</p>
                    </div>
                    <div className='flex justify-between my-3'>
                        <p>Other:</p>
                        <p>{otherQ} kW</p>
                    </div>
                    <div className='flex justify-between my-3'>
                        <p>Defrost</p>
                        <p>{defrostQ} kW</p>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <p>Total:</p>
                    <p>{q4Totall} kW</p>

                </div>
            </div>

            <div className='flex justify-between my-4'>
                <p className='uppercase font-semibold'>Net total cooling load:</p>
                <p>{qTotall} kW</p>
            </div>
            <div className='flex justify-between my-4'>
                <p className='uppercase font-semibold'>Safe total cooling load:</p>
                <p>{q1TotalSafe} kW</p>
            </div>
            <div className='flex justify-between my-4'>
                <p className='uppercase font-semibold'>Evaporator cooling load:</p>
                <p>{evaporator} kW</p>
            </div>
            <div className='flex justify-between my-4'>
                <p className='uppercase font-semibold'>Compressor cooling load:</p>
                <p>{compressor} kW</p>
            </div>
            <div>
                <DwnldBtn />
            </div>
        </React.Fragment>
    );
}

export default SideResult;