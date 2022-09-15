import React, { useState, useEffect } from 'react';
import WallsLayout from '../components/walls/WallsLayout';
import RoomCommon from '../components/RoomCommon';
import Goods from '../components/Goods';
import Infiltration from '../components/Infiltration';
import Additional from '../components/Additional';
import SideResult from '../components/SideResult'

function MainPage(props) {



    return (
        <div className='flex'>
            <div>
                <SideResult />
            </div>
            <div>
                <RoomCommon />
                <WallsLayout />
                <Goods />
                <Infiltration />
                <Additional />
            </div>
        </div>
    );
}

export default MainPage;