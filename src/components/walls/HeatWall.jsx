import React, { useState, useEffect } from 'react';
import Select from './Select'
import { BsBrightnessHigh, BsChevronBarLeft } from "react-icons/bs";
import { RiWindyFill } from "react-icons/ri";
import { WiStrongWind } from "react-icons/wi";
import { ReactComponent as MyIcon } from '../../icons/brickwall.svg';
import { useDispatch } from 'react-redux';

const materialsConstruct = [
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
    wall
}) {

    const dispatch = useDispatch();

    return (

        <div className='flex gap-4 items-center mb-4'>
            <p className="w-12">{wallName}</p>
            <div className='sectionInner w-[470px] flex justify-between h-16 '>
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
            <div className='sectionInner w-[490px] flex justify-between h-16 '>
                <Select
                    materialsCatalog={materialsInsulation}
                    setMaterial={setInsulationType}
                    setThickness={setInsulationThickness}
                    material={wall.insulation}
                    thickness={wall.insulationThickness}
                    setIsCustom={setIsCustomInsulation}
                    isCustom={wall.isCustomInsulation}
                    custom={wall.customInsulation}
                />
            </div>
            <div className="flex gap-4 sectionInner">
                <div className="text-center">
                    <label>
                        <MyIcon className="w-6 h-6 m-auto p-0.5" />
                        <input
                            className="w-14"
                            type="number"
                            value={wall.outerTemperature}
                            onChange={(e) => dispatch(setOuterTemperature(e.currentTarget.value))}
                        />
                    </label>
                </div>
                <div className="text-center">
                    <label >
                        <BsBrightnessHigh className="w-6 h-6 m-auto p-0.5" />
                        <input
                            className="w-14"
                            type="number"
                            value={wall.solarTemperature}
                            onChange={(e) => dispatch(setSolarTemperature(e.currentTarget.value))}
                        />
                    </label>
                </div>

                <div className="text-center flex ">
                    <label >
                        <WiStrongWind className="m-auto mt-1 mb-2" />
                        <input
                            className="w-12"
                            type="radio"
                            name={wallName + "-wind"}
                            defaultChecked
                            onChange={(e) => dispatch(setWindSpeed("slow"))}
                        />
                    </label>
                    <label>
                        <RiWindyFill className="m-auto mt-1 mb-2" />
                        <input
                            className="w-12"
                            type="radio"
                            name={wallName + "-wind"}
                            onChange={(e) => dispatch(setWindSpeed("fast"))}
                        />
                    </label>
                </div>
            </div>
            <div className='sectionInner'>
                <p>{wall.heatLoad}, kW</p>
            </div>
        </div>

    );
}

export default HeatWall;