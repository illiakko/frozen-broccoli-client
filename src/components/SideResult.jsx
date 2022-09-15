import React from 'react';
import { useDispatch, useSelector } from 'react-redux'

function SideResult(props) {

    const q1Front = useSelector((state) => state.walls.frontWall.heatLoad)
    const q1Back = useSelector((state) => state.walls.backWall.heatLoad)
    const q1Left = useSelector((state) => state.walls.leftWall.heatLoad)
    const q1Right = useSelector((state) => state.walls.rightWall.heatLoad)
    const q1Top = useSelector((state) => state.walls.topWall.heatLoad)
    const q1Bottom = useSelector((state) => state.walls.bottomWall.heatLoad)
    const q1Total = Math.round((q1Front + q1Back + q1Left + q1Right + q1Top + q1Bottom) * 100) / 100


    const q21 = useSelector((state) => state.goods.q21)
    const q22new = useSelector((state) => state.goods.q22new)
    const q22old = useSelector((state) => state.goods.q22old)

    const q3vent = useSelector((state) => state.infiltration.Q3vent)
    const q44dors = useSelector((state) => state.infiltration.Q44dors)

    const lightQ = useSelector((state) => state.additional.lightQ)
    const fanQ = useSelector((state) => state.additional.fanQ)
    const peopleQ = useSelector((state) => state.additional.peopleQ)
    const otherQ = useSelector((state) => state.additional.otherQ)
    const defrostQ = useSelector((state) => state.additional.defrostQ)

    return (
        <React.Fragment>
            <p>Transmission heat load</p>
            <p>{q1Total} kW</p>

            <p>Front wall</p>
            <p>{q1Front} kW</p>
            <p>Back wall</p>
            <p>{q1Back} kW</p>
            <p>Left wall</p>
            <p>{q1Left} kW</p>
            <p>Right wall</p>
            <p>{q1Right} kW</p>
            <p>Ceiling wall</p>
            <p>{q1Top} kW</p>
            <p>Floor wall</p>
            <p>{q1Bottom} kW</p>

            <p>daily entry of product </p>
            <p>{q21} kW</p>
            <p>entry product breathing</p>
            <p>{q22new} kW</p>
            <p>stored product breathing</p>
            <p>{q22old} kW</p>

            <p>ventilation</p>
            <p>{q3vent} kW</p>
            <p>door infiltration</p>
            <p>{q44dors} kW</p>

            <p>light</p>
            <p>{lightQ} kW</p>
            <p>fans</p>
            <p>{fanQ} kW</p>
            <p>people</p>
            <p>{peopleQ} kW</p>
            <p>other</p>
            <p>{otherQ} kW</p>
            <p>defrost</p>
            <p>{defrostQ} kW</p>

        </React.Fragment>
    );
}

export default SideResult;