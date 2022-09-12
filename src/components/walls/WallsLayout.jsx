import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    setFrontWallConstr,
    setFrontWallInsul,
    setFrontWallInsulationThickness,
    setFrontWallConstructionThickness,
    setFrontWallOuterTemperature,
    setFrontWallSolarTemperature,
    setFrontWallWindSpeed,
    setFrontWallCustomConstruction,
    setFrontWallCustomInsulation,
    setFrontWallIsCustomConstruction,
    setFrontWallIsCustomInsulation,

    setBackWallConstr,
    setBackWallInsul,
    setBackWallInsulationThickness,
    setBackWallConstructionThickness,
    setBackWallOuterTemperature,
    setBackWallSolarTemperature,
    setBackWallWindSpeed,
    setBackWallCustomConstruction,
    setBackWallCustomInsulation,
    setBackWallIsCustomConstruction,
    setBackWallIsCustomInsulation,

    setLeftWallConstr,
    setLeftWallInsul,
    setLeftWallInsulationThickness,
    setLeftWallConstructionThickness,
    setLeftWallOuterTemperature,
    setLeftWallSolarTemperature,
    setLeftWallWindSpeed,
    setLeftWallCustomConstruction,
    setLeftWallCustomInsulation,
    setLeftWallIsCustomConstruction,
    setLeftWallIsCustomInsulation,

    setRightWallConstr,
    setRightWallInsul,
    setRightWallInsulationThickness,
    setRightWallConstructionThickness,
    setRightWallOuterTemperature,
    setRightWallSolarTemperature,
    setRightWallWindSpeed,
    setRightWallCustomConstruction,
    setRightWallCustomInsulation,
    setRightWallIsCustomConstruction,
    setRightWallIsCustomInsulation,

    setTopWallConstr,
    setTopWallInsul,
    setTopWallInsulationThickness,
    setTopWallConstructionThickness,
    setTopWallOuterTemperature,
    setTopWallSolarTemperature,
    setTopWallWindSpeed,
    setTopWallCustomConstruction,
    setTopWallCustomInsulation,
    setTopWallIsCustomConstruction,
    setTopWallIsCustomInsulation,

    setBottomWallConstr,
    setBottomWallInsul,
    setBottomWallInsulationThickness,
    setBottomWallConstructionThickness,
    setBottomWallOuterTemperature,
    setBottomWallSolarTemperature,
    setBottomWallWindSpeed,
    setBottomWallCustomConstruction,
    setBottomWallCustomInsulation,
    setBottomWallIsCustomConstruction,
    setBottomWallIsCustomInsulation,

    getFrontWallQ1,
    getBackWallQ1,
    getLeftWallQ1,
    getRightWallQ1,
    getTopWallQ1,
    getBottomWallQ1,


} from '../../redux/features/calc/wallsSlice.js'

import Wall from './Wall'

export default function WallsLayout() {

    const frontWall = useSelector((state) => state.walls.frontWall)
    const backWall = useSelector((state) => state.walls.backWall)
    const leftWall = useSelector((state) => state.walls.leftWall)
    const rightWall = useSelector((state) => state.walls.rightWall)
    const topWall = useSelector((state) => state.walls.topWall)
    const bottomWall = useSelector((state) => state.walls.bottomWall)

    const roomLength = useSelector((state) => state.common.roomLength)
    const roomWidth = useSelector((state) => state.common.roomWidth)
    const roomHeight = useSelector((state) => state.common.roomHeight)


    return (
        <div className='section' >
            <div>
                <p className='mb-4'>Heat transfer</p>
            </div>
            <div>
                <div >
                    <Wall
                        wallName={"Front"}
                        setConstructionType={setFrontWallConstr}
                        setConstructionThickness={setFrontWallConstructionThickness}
                        setInsulationType={setFrontWallInsul}
                        setInsulationThickness={setFrontWallInsulationThickness}
                        setOuterTemperature={setFrontWallOuterTemperature}
                        setSolarTemperature={setFrontWallSolarTemperature}
                        setWindSpeed={setFrontWallWindSpeed}
                        setCustomConstruction={setFrontWallCustomConstruction}
                        setCustomInsulation={setFrontWallCustomInsulation}
                        setIsCustomConstruction={setFrontWallIsCustomConstruction}
                        setIsCustomInsulation={setFrontWallIsCustomInsulation}
                        getQ1={getFrontWallQ1}

                        wHeight={roomHeight}
                        wLength={roomWidth}
                        wall={frontWall}
                    />
                    <Wall
                        wallName={"Back"}
                        setConstructionType={setBackWallConstr}
                        setConstructionThickness={setBackWallConstructionThickness}
                        setInsulationType={setBackWallInsul}
                        setInsulationThickness={setBackWallInsulationThickness}
                        setOuterTemperature={setBackWallOuterTemperature}
                        setSolarTemperature={setBackWallSolarTemperature}
                        setWindSpeed={setBackWallWindSpeed}
                        setCustomConstruction={setBackWallCustomConstruction}
                        setCustomInsulation={setBackWallCustomInsulation}
                        setIsCustomConstruction={setBackWallIsCustomConstruction}
                        setIsCustomInsulation={setBackWallIsCustomInsulation}
                        getQ1={getBackWallQ1}

                        wall={backWall}
                        wHeight={roomHeight}
                        wLength={roomWidth}
                    />
                    <Wall
                        wallName={"Left"}
                        setConstructionType={setLeftWallConstr}
                        setConstructionThickness={setLeftWallConstructionThickness}
                        setInsulationType={setLeftWallInsul}
                        setInsulationThickness={setLeftWallInsulationThickness}
                        setOuterTemperature={setLeftWallOuterTemperature}
                        setSolarTemperature={setLeftWallSolarTemperature}
                        setWindSpeed={setLeftWallWindSpeed}
                        setCustomConstruction={setLeftWallCustomConstruction}
                        setCustomInsulation={setLeftWallCustomInsulation}
                        setIsCustomConstruction={setLeftWallIsCustomConstruction}
                        setIsCustomInsulation={setLeftWallIsCustomInsulation}
                        getQ1={getLeftWallQ1}

                        wHeight={roomHeight}
                        wLength={roomLength}
                        wall={leftWall}
                    />
                    <Wall
                        wallName={"Right"}
                        setConstructionType={setRightWallConstr}
                        setConstructionThickness={setRightWallConstructionThickness}
                        setInsulationType={setRightWallInsul}
                        setInsulationThickness={setRightWallInsulationThickness}
                        setOuterTemperature={setRightWallOuterTemperature}
                        setSolarTemperature={setRightWallSolarTemperature}
                        setWindSpeed={setRightWallWindSpeed}
                        setCustomConstruction={setRightWallCustomConstruction}
                        setCustomInsulation={setRightWallCustomInsulation}
                        setIsCustomConstruction={setRightWallIsCustomConstruction}
                        setIsCustomInsulation={setRightWallIsCustomInsulation}
                        getQ1={getRightWallQ1}

                        wHeight={roomHeight}
                        wLength={roomLength}
                        wall={rightWall}
                    />
                    <Wall
                        wallName={"Ceiling"}
                        setConstructionType={setTopWallConstr}
                        setConstructionThickness={setTopWallConstructionThickness}
                        setInsulationType={setTopWallInsul}
                        setInsulationThickness={setTopWallInsulationThickness}
                        setOuterTemperature={setTopWallOuterTemperature}
                        setSolarTemperature={setTopWallSolarTemperature}
                        setWindSpeed={setTopWallWindSpeed}
                        setCustomConstruction={setTopWallCustomConstruction}
                        setCustomInsulation={setTopWallCustomInsulation}
                        setIsCustomConstruction={setTopWallIsCustomConstruction}
                        setIsCustomInsulation={setTopWallIsCustomInsulation}
                        getQ1={getTopWallQ1}

                        wHeight={roomLength}
                        wLength={roomWidth}
                        wall={topWall}
                    />
                    <Wall
                        wallName={"Floor"}
                        setConstructionType={setBottomWallConstr}
                        setConstructionThickness={setBottomWallConstructionThickness}
                        setInsulationType={setBottomWallInsul}
                        setInsulationThickness={setBottomWallInsulationThickness}
                        setOuterTemperature={setBottomWallOuterTemperature}
                        setSolarTemperature={setBottomWallSolarTemperature}
                        setWindSpeed={setBottomWallWindSpeed}
                        setCustomConstruction={setBottomWallCustomConstruction}
                        setCustomInsulation={setBottomWallCustomInsulation}
                        setIsCustomConstruction={setBottomWallIsCustomConstruction}
                        setIsCustomInsulation={setBottomWallIsCustomInsulation}
                        getQ1={getBottomWallQ1}

                        wHeight={roomLength}
                        wLength={roomWidth}
                        wall={bottomWall}
                    />

                </div>
            </div>
        </div>
    );
}
