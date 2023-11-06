import React, { useState, useEffect } from 'react';
import WallsLayout from '../components/walls/WallsLayout';
import RoomCommon from '../components/RoomCommon';
import Goods from '../components/Goods/Goods';
import Infiltration from '../components/Infiltration';
import Additional from '../components/Additional';
import SideResult from '../components/SideResult'
import SafetyFactor from '../components/SafetyFactor';
import DwnldBtn from '../components/DwnldBtn'

function MainPage(props) {



    return (
        <div className='flex'>
            <div>
                <div className='min-w-[400px] gradientSide shadowCustom text-emerald-900 p-4 sticky top-0 h-screen'>
                    <SideResult />
                </div>
            </div>
            <div className='mx-4'>
                <RoomCommon />
                <WallsLayout />
                <Goods />
                <Infiltration />
                <Additional />
                <SafetyFactor />

                <DwnldBtn />

            </div>
        </div>
    );
}

export default MainPage; 