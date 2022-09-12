import React, { useState, useEffect } from 'react';
import WallsLayout from '../components/walls/WallsLayout';
import RoomCommon from '../components/RoomCommon';
import Goods from '../components/Goods';
import Infiltration from '../components/Infiltration';
import Additional from '../components/Additional';

function MainPage(props) {



    return (
        <div>
            <RoomCommon />
            <Goods />
            <Infiltration />
            <WallsLayout />
            <Additional />
        </div>
    );
}

export default MainPage;