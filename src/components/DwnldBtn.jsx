import React from 'react';
import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";// for Docxtemplater
import PizZipUtils from "pizzip/utils/index.js";//part of pizzip
import { saveAs } from "file-saver";
import { useSelector } from 'react-redux'

function DwnldBtn() {

    const roomLength = useSelector((state) => state.common.roomLength)
    const roomWidth = useSelector((state) => state.common.roomWidth)
    const roomHeight = useSelector((state) => state.common.roomHeight)
    const roomTemperature = useSelector((state) => state.common.roomTemperature)
    const roomRH = useSelector((state) => state.common.roomRH)
    const roomSquare = useSelector((state) => state.common.roomSquare)
    const roomVolume = useSelector((state) => state.common.roomVolume)
    const qTotall = useSelector((state) => state.common.qTotall)
    const qPerArea = Math.round((qTotall / roomSquare) * 1000) / 1000
    const qPerVolume = Math.round((qTotall / roomVolume) * 1000) / 1000

    let FW_constrName = useSelector((state) => state.walls.frontWall.construction.name)
    let FW_constrTransf = useSelector((state) => state.walls.frontWall.construction.heatTransfer)
    let FW_insulName = useSelector((state) => state.walls.frontWall.insulation.name)
    let FW_insulTransf = useSelector((state) => state.walls.frontWall.insulation.heatTransfer)
    let FW_constrThickn = useSelector((state) => state.walls.frontWall.constructionThickness)
    let FW_insulThickn = useSelector((state) => state.walls.frontWall.insulationThickness)
    const FW_outerTemp = useSelector((state) => state.walls.frontWall.outerTemperature)
    const FW_solarTemp = useSelector((state) => state.walls.frontWall.solarTemperature)
    const FW_q = useSelector((state) => state.walls.frontWall.heatLoad)
    const FW_customConstr = useSelector((state) => state.walls.frontWall.customConstruction)
    const FW_customInsul = useSelector((state) => state.walls.frontWall.customInsulation)
    const FW_isCustomConstr = useSelector((state) => state.walls.frontWall.isCustomConstruction)
    const FW_isCustomInsul = useSelector((state) => state.walls.frontWall.isCustomInsulation)

    if (FW_constrName === "None") {
        FW_constrName = false
    }
    if (FW_insulName === "None") {
        FW_insulName = false
    }
    if (!FW_isCustomConstr) {
        FW_constrName = "custom construction"
    }
    if (!FW_isCustomInsul) {
        FW_insulName = "custom insulation"
    }

    let BW_constrName = useSelector((state) => state.walls.backWall.construction.name)
    let BW_constrTransf = useSelector((state) => state.walls.backWall.construction.heatTransfer)
    let BW_insulName = useSelector((state) => state.walls.backWall.insulation.name)
    let BW_insulTransf = useSelector((state) => state.walls.backWall.insulation.heatTransfer)
    let BW_constrThickn = useSelector((state) => state.walls.backWall.constructionThickness)
    let BW_insulThickn = useSelector((state) => state.walls.backWall.insulationThickness)
    const BW_outerTemp = useSelector((state) => state.walls.backWall.outerTemperature)
    const BW_solarTemp = useSelector((state) => state.walls.backWall.solarTemperature)
    const BW_q = useSelector((state) => state.walls.backWall.heatLoad)
    const BW_customConstr = useSelector((state) => state.walls.backWall.customConstruction)
    const BW_customInsul = useSelector((state) => state.walls.backWall.customInsulation)
    const BW_isCustomConstr = useSelector((state) => state.walls.backWall.isCustomConstruction)
    const BW_isCustomInsul = useSelector((state) => state.walls.backWall.isCustomInsulation)
    if (BW_constrName === "None") {
        BW_constrName = false
    }
    if (BW_insulName === "None") {
        BW_insulName = false
    }
    if (!BW_isCustomConstr) {
        BW_constrName = "custom construction"
    }
    if (!BW_isCustomInsul) {
        BW_insulName = "custom insulation"
    }

    let LW_constrName = useSelector((state) => state.walls.leftWall.construction.name)
    let LW_constrTransf = useSelector((state) => state.walls.leftWall.construction.heatTransfer)
    let LW_insulName = useSelector((state) => state.walls.leftWall.insulation.name)
    let LW_insulTransf = useSelector((state) => state.walls.leftWall.insulation.heatTransfer)
    let LW_constrThickn = useSelector((state) => state.walls.leftWall.constructionThickness)
    let LW_insulThickn = useSelector((state) => state.walls.leftWall.insulationThickness)
    const LW_outerTemp = useSelector((state) => state.walls.leftWall.outerTemperature)
    const LW_solarTemp = useSelector((state) => state.walls.leftWall.solarTemperature)
    const LW_q = useSelector((state) => state.walls.leftWall.heatLoad)
    const LW_customConstr = useSelector((state) => state.walls.leftWall.customConstruction)
    const LW_customInsul = useSelector((state) => state.walls.leftWall.customInsulation)
    const LW_isCustomConstr = useSelector((state) => state.walls.leftWall.isCustomConstruction)
    const LW_isCustomInsul = useSelector((state) => state.walls.leftWall.isCustomInsulation)
    if (LW_constrName === "None") {
        LW_constrName = false
    }
    if (LW_insulName === "None") {
        LW_insulName = false
    }
    if (!LW_isCustomConstr) {
        LW_constrName = "custom construction"
    }
    if (!LW_isCustomInsul) {
        LW_insulName = "custom insulation"
    }

    let RW_constrName = useSelector((state) => state.walls.rightWall.construction.name)
    let RW_constrTransf = useSelector((state) => state.walls.rightWall.construction.heatTransfer)
    let RW_insulName = useSelector((state) => state.walls.rightWall.insulation.name)
    let RW_insulTransf = useSelector((state) => state.walls.rightWall.insulation.heatTransfer)
    let RW_constrThickn = useSelector((state) => state.walls.rightWall.constructionThickness)
    let RW_insulThickn = useSelector((state) => state.walls.rightWall.insulationThickness)
    const RW_outerTemp = useSelector((state) => state.walls.rightWall.outerTemperature)
    const RW_solarTemp = useSelector((state) => state.walls.rightWall.solarTemperature)
    const RW_q = useSelector((state) => state.walls.rightWall.heatLoad)
    const RW_customConstr = useSelector((state) => state.walls.rightWall.customConstruction)
    const RW_customInsul = useSelector((state) => state.walls.rightWall.customInsulation)
    const RW_isCustomConstr = useSelector((state) => state.walls.rightWall.isCustomConstruction)
    const RW_isCustomInsul = useSelector((state) => state.walls.rightWall.isCustomInsulation)
    if (RW_constrName === "None") {
        RW_constrName = false
    }
    if (RW_insulName === "None") {
        RW_insulName = false
    }
    if (!RW_isCustomConstr) {
        RW_constrName = "custom construction"
    }
    if (!RW_isCustomInsul) {
        RW_insulName = "custom insulation"
    }

    let TW_constrName = useSelector((state) => state.walls.topWall.construction.name)
    let TW_constrTransf = useSelector((state) => state.walls.topWall.construction.heatTransfer)
    let TW_insulName = useSelector((state) => state.walls.topWall.insulation.name)
    let TW_insulTransf = useSelector((state) => state.walls.topWall.insulation.heatTransfer)
    let TW_constrThickn = useSelector((state) => state.walls.topWall.constructionThickness)
    let TW_insulThickn = useSelector((state) => state.walls.topWall.insulationThickness)
    const TW_outerTemp = useSelector((state) => state.walls.topWall.outerTemperature)
    const TW_solarTemp = useSelector((state) => state.walls.topWall.solarTemperature)
    const TW_q = useSelector((state) => state.walls.topWall.heatLoad)
    const TW_customConstr = useSelector((state) => state.walls.topWall.customConstruction)
    const TW_customInsul = useSelector((state) => state.walls.topWall.customInsulation)
    const TW_isCustomConstr = useSelector((state) => state.walls.topWall.isCustomConstruction)
    const TW_isCustomInsul = useSelector((state) => state.walls.topWall.isCustomInsulation)
    if (TW_constrName === "None") {
        TW_constrName = false
    }
    if (TW_insulName === "None") {
        TW_insulName = false
    }
    if (!TW_isCustomConstr) {
        TW_constrName = "custom construction"
    }
    if (!TW_isCustomInsul) {
        TW_insulName = "custom insulation"
    }

    let BTW_constrName = useSelector((state) => state.walls.bottomWall.construction.name)
    let BTW_constrTransf = useSelector((state) => state.walls.bottomWall.construction.heatTransfer)
    let BTW_insulName = useSelector((state) => state.walls.bottomWall.insulation.name)
    let BTW_insulTransf = useSelector((state) => state.walls.bottomWall.insulation.heatTransfer)
    let BTW_constrThickn = useSelector((state) => state.walls.bottomWall.constructionThickness)
    let BTW_insulThickn = useSelector((state) => state.walls.bottomWall.insulationThickness)
    const BTW_outerTemp = useSelector((state) => state.walls.bottomWall.outerTemperature)
    const BTW_solarTemp = useSelector((state) => state.walls.bottomWall.solarTemperature)
    const BTW_q = useSelector((state) => state.walls.bottomWall.heatLoad)
    const BTW_customConstr = useSelector((state) => state.walls.bottomWall.customConstruction)
    const BTW_customInsul = useSelector((state) => state.walls.bottomWall.customInsulation)
    const BTW_isCustomConstr = useSelector((state) => state.walls.bottomWall.isCustomConstruction)
    const BTW_isCustomInsul = useSelector((state) => state.walls.bottomWall.isCustomInsulation)
    if (BTW_constrName === "None") {
        BTW_constrName = false
    }
    if (BTW_insulName === "None") {
        BTW_insulName = false
    }
    if (!BTW_isCustomConstr) {
        BTW_constrName = "custom construction"
    }
    if (!BTW_isCustomInsul) {
        BTW_insulName = "custom insulation"
    }

    const q1Totall = useSelector((state) => state.walls.q1Totall)

    const q2Totall = useSelector((state) => state.goods.q2Totall)
    const coolingTime = useSelector((state) => state.goods.coolingTime)
    const totalMass = useSelector((state) => state.goods.totalMass)
    const perDayMass = useSelector((state) => state.goods.perDayMass)
    const inletProdTemp = useSelector((state) => state.goods.inletProdTemperature)
    const foodItem = useSelector((state) => state.goods.currentFoodItem)
    const packName = useSelector((state) => state.goods.packaging.name)
    const packWeight = useSelector((state) => state.goods.packaging.weight)
    const q21 = useSelector((state) => state.goods.q21)
    const q22new = useSelector((state) => state.goods.q22New)
    const q22old = useSelector((state) => state.goods.q22Old)
    const q21packaging = useSelector((state) => state.goods.q21packaging)

    const airDoorTemp = useSelector((state) => state.infiltration.airDoorTemperature)
    const airDoorRH = useSelector((state) => state.infiltration.airDoorRH)
    const dorsOpenHours = useSelector((state) => state.infiltration.dorsOpenHours)
    const dorsWidth = useSelector((state) => state.infiltration.dorsWidth)
    const dorsHeight = useSelector((state) => state.infiltration.dorsHeight)
    const dorsProtection = useSelector((state) => state.infiltration.dorsProtection)
    const ventAirTemp = useSelector((state) => state.infiltration.ventilatedAirTemperature)
    const ventilatedAirRH = useSelector((state) => state.infiltration.ventilatedAirRH)
    const airExchange = useSelector((state) => state.infiltration.airExchange)
    const Q3vent = useSelector((state) => state.infiltration.Q3vent)
    const Q44dors = useSelector((state) => state.infiltration.Q44dors)

    const q4Totall = useSelector((state) => state.additional.q4Totall)
    const lightPower = useSelector((state) => state.additional.lightPower)
    const lightTime = useSelector((state) => state.additional.lightTime)
    const lightQ = useSelector((state) => state.additional.lightQ)
    const fanNumber = useSelector((state) => state.additional.fanNumber)
    const fanPower = useSelector((state) => state.additional.fanPower)
    const fanTime = useSelector((state) => state.additional.fanTime)
    const fanQ = useSelector((state) => state.additional.fanQ)
    const peopleNumber = useSelector((state) => state.additional.peopleNumber)
    const peopleTime = useSelector((state) => state.additional.peopleTime)
    const peopleQ = useSelector((state) => state.additional.peopleQ)
    const otherPower = useSelector((state) => state.additional.otherPower)
    const otherTime = useSelector((state) => state.additional.otherTime)
    const otherQ = useSelector((state) => state.additional.otherQ)
    const defrostType = useSelector((state) => state.additional.defrostType)
    const defrostPower = useSelector((state) => state.additional.defrostPower)
    const defrostNumber = useSelector((state) => state.additional.defrostNumber)
    const defrostTime = useSelector((state) => state.additional.defrostTime)
    const defrostQ = useSelector((state) => state.additional.defrostQ)


    const operatingHours = useSelector((state) => state.safety.operatingHours)
    const safetyFactor = useSelector((state) => state.safety.safetyFactor)
    const pipeLosses = useSelector((state) => state.safety.pipeLosses)


    const qTotalSafe = Math.round((qTotall * (1 + (safetyFactor / 100))) * 100) / 100
    const evaporator = Math.round((qTotalSafe * (24 / operatingHours)) * 100) / 100
    const compressor = Math.round((qTotalSafe * (24 / operatingHours) * (1 + (pipeLosses / 100))) * 100) / 100

    // console.log(qTotall, qTotalSafe, operatingHours, safetyFactor, pipeLosses, evaporator, compressor);


    //template part from Docxtemplater
    const generateDocument = (tripsArr) => {
        function loadFile(url, callback) {
            PizZipUtils.getBinaryContent(url, callback);
        }
        loadFile(
            "./template.docx",

            function (error, content) {
                if (error) {
                    throw error;
                }
                const zip = new PizZip(content);
                const doc = new Docxtemplater(zip, {
                    paragraphLoop: true,
                    linebreaks: true,
                });
                // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
                doc.render({

                    roomLength: roomLength,
                    roomWidth: roomWidth,
                    roomHeight: roomHeight,
                    roomTemperature: roomTemperature,
                    roomRH: roomRH,
                    roomSquare: roomSquare,
                    roomVolume: roomVolume,
                    qTotall: qTotall,
                    qPerArea: qPerArea,
                    qPerVolume: qPerVolume,

                    FW_constrName: FW_constrName,
                    FW_constrTransf: FW_constrTransf,
                    FW_insulName: FW_insulName,
                    FW_insulTransf: FW_insulTransf,
                    FW_constrThickn: FW_constrThickn,
                    FW_insulThickn: FW_insulThickn,
                    FW_outerTemp: FW_outerTemp,
                    FW_solarTemp: FW_solarTemp,
                    FW_q: FW_q,


                    BW_constrName: BW_constrName,
                    BW_constrTransf: BW_constrTransf,
                    BW_insulName: BW_insulName,
                    BW_insulTransf: BW_insulTransf,
                    BW_constrThickn: BW_constrThickn,
                    BW_insulThickn: BW_insulThickn,
                    BW_outerTemp: BW_outerTemp,
                    BW_solarTemp: BW_solarTemp,
                    BW_q: BW_q,


                    LW_constrName: LW_constrName,
                    LW_constrTransf: LW_constrTransf,
                    LW_insulName: LW_insulName,
                    LW_insulTransf: LW_insulTransf,
                    LW_constrThickn: LW_constrThickn,
                    LW_insulThickn: LW_insulThickn,
                    LW_outerTemp: LW_outerTemp,
                    LW_solarTemp: LW_solarTemp,
                    LW_q: LW_q,


                    RW_constrName: RW_constrName,
                    RW_constrTransf: RW_constrTransf,
                    RW_insulName: RW_insulName,
                    RW_insulTransf: RW_insulTransf,
                    RW_constrThickn: RW_constrThickn,
                    RW_insulThickn: RW_insulThickn,
                    RW_outerTemp: RW_outerTemp,
                    RW_solarTemp: RW_solarTemp,
                    RW_q: RW_q,


                    TW_constrName: TW_constrName,
                    TW_constrTransf: TW_constrTransf,
                    TW_insulName: TW_insulName,
                    TW_insulTransf: TW_insulTransf,
                    TW_constrThickn: TW_constrThickn,
                    TW_insulThickn: TW_insulThickn,
                    TW_outerTemp: TW_outerTemp,
                    TW_solarTemp: TW_solarTemp,
                    TW_q: TW_q,


                    BTW_constrName: BTW_constrName,
                    BTW_constrTransf: BTW_constrTransf,
                    BTW_insulName: BTW_insulName,
                    BTW_insulTransf: BTW_insulTransf,
                    BTW_constrThickn: BTW_constrThickn,
                    BTW_insulThickn: BTW_insulThickn,
                    BTW_outerTemp: BTW_outerTemp,
                    BTW_solarTemp: BTW_solarTemp,
                    BTW_q: BTW_q,


                    q1Totall: q1Totall,

                    q2Totall,
                    coolingTime,
                    totalMass,
                    perDayMass,
                    inletProdTemp,
                    foodItem,
                    packName,
                    packWeight,
                    q21,
                    q22new,
                    q22old,
                    q21packaging,

                    airDoorTemp,
                    airDoorRH,
                    dorsOpenHours,
                    dorsWidth,
                    dorsHeight,
                    dorsProtection,
                    ventAirTemp,
                    ventilatedAirRH,
                    airExchange,
                    Q3vent,
                    Q44dors,

                    q4Totall,
                    lightPower,
                    lightTime,
                    lightQ,
                    fanNumber,
                    fanPower,
                    fanTime,
                    fanQ,
                    peopleNumber,
                    peopleTime,
                    peopleQ,
                    otherPower,
                    otherTime,
                    otherQ,
                    defrostType,
                    defrostPower,
                    defrostNumber,
                    defrostTime,
                    defrostQ,

                    operatingHours,
                    safetyFactor,
                    pipeLosses,
                    qTotalSafe,
                    evaporator,
                    compressor,

                });
                const out = doc.getZip().generate({
                    type: "blob",
                    mimeType:
                        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                }); //Output the document using Data-URI
                saveAs(out, `Cold room.docx`);
            }
        );
    };









    return (

        <p className='text-center cursor-pointer m-4 p-4 hover:bg-[#dde6eb] text-green-900 rounded-md bg-[#bec6ca] ease-in-out duration-300'
            onClick={generateDocument}>Download report
        </p>

    );
}

export default DwnldBtn;