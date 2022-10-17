import { RiWindyFill } from "react-icons/ri";
import { WiStrongWind } from "react-icons/wi";
import React from 'react';


export const sunMsg = "Additionat temperature caused by sunlight"
export const windSpeedMsg = {
    one: "If the inner wall surface exposed",
    two: "to 3.3 m/s or less check",
    three: "for air speed 3.3-6.4 m/s "
}
export const operatingHoursMsg = {
    one: "Compressor working hours. It should have",
    two: "at least 2 hours a day \"to rest\", so all heat from the",
    three: "room should be removed during remained 22 working hours. "
}
export const coolingTimeMsg = {
    one: "By default we have 24 hours to cool down the dayly entry product, ",
    two: "but if you need to speed up the process you can reduse cooling time",
    three: "(refrigeration system load will be increased)"
}
export const outerTemperature = {
    one: "Temperature from the ",
    two: "outer side of the wall",
}
export const SunTemperature = {
    one: "Additional temperature differense out of heating",
    two: "of the outer side of the wall by the sun light ",
}
export const safetyFactorMsg = {
    one: "The calculated load is typically increased by a safety factor (10%",
    two: "or more is often used) to allow for possible discrepancies between",
    three: "design criteria and actual operation. This factor should be selected",
    four: "in consultation with the facility user.",
}
export const pipeLossesMsg = {
    one: "Because of pressure losses in suction pipe, compressor suction ",
    two: "pressure is actually lower then boiling selected temperature. If you",
    three: "now exact suction pressure you can set it during compressor ",
    four: "selection or use this coeficient to add some margin (average 5%).",
}

