import React, { useState, useEffect } from 'react';
import Select from './Select'
import { BsBrightnessHigh, BsChevronBarLeft } from "react-icons/bs";
import { RiWindyFill } from "react-icons/ri";
import { WiStrongWind } from "react-icons/wi";
import { ReactComponent as MyIcon } from '../../icons/brickwall.svg';
import { useSelector, useDispatch } from 'react-redux';
import Tooltip from '../Tooltip/Tooltip';
import { outerTemperature, SunTemperature } from '../../utils/prompts'
import SolarTable from './SolarTable/SolarTable'

const materialsConstruct = [
    {
        id: 2000,
        name: "None",
        image: "none_150.png",
        heatTransfer: 100
    },
    {
        id: 2001,
        name: "Silicate brick",
        image: "silicate_brick_150.png",
        heatTransfer: 0.87
    },
    {
        id: 2002,
        name: "Silicate 11 holes brick",
        image: "11_hols_brick_150.jpg",
        heatTransfer: 0.81
    },
    {
        id: 2003,
        name: "Ceramic hollow brick",
        image: "ceramic_hollow_brick_150.jpg",
        heatTransfer: 0.58
    },

]
const materialsInsulation = [
    {
        id: 1000,
        name: "None",
        image: "none_150.png",
        heatTransfer: 100
    },
    {
        id: 1001,
        name: "Polystyrene, expanded (R-142b)",
        image: "polystyrene_expanded_150.jpg",
        heatTransfer: 0.037
    },
    {
        id: 1002,
        name: "Polystyrene, extruded (R-142b)",
        image: "polystyrene_extruded_150.jpg",
        heatTransfer: 0.035
    },
    {
        id: 1003,
        name: "Polyurethane",
        image: "polyurethane_panel_150.jpg",
        heatTransfer: 0.022,
    },
    {
        id: 1004,
        name: "Mineral Wool 100-120 kg/m3",
        image: "mineral_wool_150.jpg",
        heatTransfer: 0.043,
    },


]

function HeatWall({
    wallName,
    setConstructionType,
    setConstructionThickness,
    setInsulationType,
    setInsulationThickness,
    setOuterTemperature,
    setSolarTemperature,
    setWindSpeed,
    setCustomConstruction,
    setCustomInsulation,
    setIsCustomConstruction,
    setIsCustomInsulation,
    getQ1,
    wHeight,
    wLength,
    wall
}) {

    const dispatch = useDispatch();
    const windInSpeed = useSelector((state) => state.common.roomAirVelocity)
    const roomTemperature = useSelector((state) => state.common.roomTemperature)


    useEffect(() => {
        dispatch(getQ1(
            {
                wall,
                wHeight,
                wLength,
                windInSpeed,
                roomTemperature
            }
        ))
    }, [wall, wHeight, wLength, windInSpeed, roomTemperature,])

    return (

        <div className='flex gap-4 items-center justify-between mb-4 shadowWall px-4 pt-1 rounded-md '>
            <p className="w-12 mr-4">{wallName}</p>
            <div className='w-[400px] flex justify-between mb-2 mr-4 p-2 pt-4 border-l-2 border-gray-200'>
                <Select
                    materialsCatalog={materialsConstruct}
                    setMaterial={setConstructionType}
                    setThickness={setConstructionThickness}
                    material={wall.construction}
                    thickness={wall.constructionThickness}
                    setCustom={setCustomConstruction}
                    setIsCustom={setIsCustomConstruction}
                    isCustom={wall.isCustomConstruction}
                    custom={wall.customConstruction}
                />
            </div>
            <div className='w-[450px] flex justify-between mb-2 mr-4 p-2 pt-4 border-l-2 border-gray-200'>
                <Select
                    materialsCatalog={materialsInsulation}
                    setMaterial={setInsulationType}
                    setThickness={setInsulationThickness}
                    material={wall.insulation}
                    thickness={wall.insulationThickness}
                    setCustom={setCustomInsulation}
                    setIsCustom={setIsCustomInsulation}
                    isCustom={wall.isCustomInsulation}
                    custom={wall.customInsulation}
                />
            </div>
            <div className="flex gap-4 ">


                <label className='mt-2'>
                    <div className="text-center">
                        <Tooltip
                            content={
                                <React.Fragment>
                                    <p>{outerTemperature.one}</p>
                                    <p>{outerTemperature.two}</p>
                                </React.Fragment>
                            }
                            direction="left"
                            delay="1000"
                        >
                            <MyIcon className="w-6 h-6 mb-[-7px] m-auto fill-sky-900" />
                        </Tooltip>
                        <br />
                        <input
                            className="w-14 mt-2"
                            type="number"
                            value={wall.outerTemperature}
                            onChange={(e) => dispatch(setOuterTemperature(e.currentTarget.value))}
                        />
                    </div>
                </label>


                <label className='mt-2' >
                    <div className="text-center pb-8">
                        <Tooltip
                            content={
                                <SolarTable />
                            }
                            direction="left"
                            delay="1000"
                        >
                            <BsBrightnessHigh className="w-6 h-6 mb-[-7px]  text-center hover:fill-sky-500 transition ease-in-out delay-150" />
                        </Tooltip>
                        <br />
                        <input
                            className="w-14 mt-2"
                            type="number"
                            value={wall.solarTemperature}
                            onChange={(e) => dispatch(setSolarTemperature(e.currentTarget.value))}
                        />
                    </div>
                </label>

            </div>
            <div className='ml-5 text-lg'>
                <p className='w-36'>{wall.heatLoad}, kW</p>
            </div>
        </div>

    );
}

export default HeatWall;