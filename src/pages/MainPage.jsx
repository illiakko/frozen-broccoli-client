import React, { useState, useEffect } from 'react';
import WallsLayout from '../components/walls/WallsLayout';
import RoomCommon from '../components/RoomCommon';
import Goods from '../components/Goods';
import Infiltration from '../components/Infiltration';
import Additional from '../components/Additional';
import Defrost from '../components/Defrost';

function MainPage(props) {



    return (
        <div>
            <RoomCommon />
            <Goods />
            <Infiltration />
            <WallsLayout />
            <Additional />
            <Defrost />
        </div>
    );
}

export default MainPage;