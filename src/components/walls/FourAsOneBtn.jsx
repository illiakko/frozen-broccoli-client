import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    setBackWallConstr,
    setBackWallInsul,
    setBackWallInsulationThickness,
    setBackWallConstructionThickness,
    setBackWallCustomConstruction,
    setBackWallCustomInsulation,
    setBackWallIsCustomConstruction,
    setBackWallIsCustomInsulation,

    setLeftWallConstr,
    setLeftWallInsul,
    setLeftWallInsulationThickness,
    setLeftWallConstructionThickness,
    setLeftWallCustomConstruction,
    setLeftWallCustomInsulation,
    setLeftWallIsCustomConstruction,
    setLeftWallIsCustomInsulation,

    setRightWallConstr,
    setRightWallInsul,
    setRightWallInsulationThickness,
    setRightWallConstructionThickness,
    setRightWallCustomConstruction,
    setRightWallCustomInsulation,
    setRightWallIsCustomConstruction,
    setRightWallIsCustomInsulation,

} from '../../redux/features/calc/wallsSlice.js'

function FourAsOneBtn(props) {
    const dispatch = useDispatch()

    const frontWall = useSelector((state) => state.walls.frontWall)



    return (
        <p
            className='cursor-pointer m-4 p-4 bg-[#dde6eb] text-green-900 rounded-md hover:bg-[#bec6ca] ease-in-out duration-300'
            onClick={() => {
                dispatch(setBackWallConstr(frontWall.construction))
                dispatch(setBackWallInsul(frontWall.insulation))
                dispatch(setBackWallInsulationThickness(frontWall.insulationThickness))
                dispatch(setBackWallConstructionThickness(frontWall.constructionThickness))
                dispatch(setBackWallCustomConstruction(frontWall.customConstruction))
                dispatch(setBackWallCustomInsulation(frontWall.customInsulation))
                dispatch(setBackWallIsCustomConstruction(frontWall.isCustomConstruction))
                dispatch(setBackWallIsCustomInsulation(frontWall.isCustomInsulation))

                dispatch(setLeftWallConstr(frontWall.construction))
                dispatch(setLeftWallInsul(frontWall.insulation))
                dispatch(setLeftWallInsulationThickness(frontWall.insulationThickness))
                dispatch(setLeftWallConstructionThickness(frontWall.constructionThickness))
                dispatch(setLeftWallCustomConstruction(frontWall.customConstruction))
                dispatch(setLeftWallCustomInsulation(frontWall.customInsulation))
                dispatch(setLeftWallIsCustomConstruction(frontWall.isCustomConstruction))
                dispatch(setLeftWallIsCustomInsulation(frontWall.isCustomInsulation))

                dispatch(setRightWallConstr(frontWall.construction))
                dispatch(setRightWallInsul(frontWall.insulation))
                dispatch(setRightWallInsulationThickness(frontWall.insulationThickness))
                dispatch(setRightWallConstructionThickness(frontWall.constructionThickness))
                dispatch(setRightWallCustomConstruction(frontWall.customConstruction))
                dispatch(setRightWallCustomInsulation(frontWall.customInsulation))
                dispatch(setRightWallIsCustomConstruction(frontWall.isCustomConstruction))
                dispatch(setRightWallIsCustomInsulation(frontWall.isCustomInsulation))
            }}
        > 4 walls as first</p>
    );
}

export default FourAsOneBtn;