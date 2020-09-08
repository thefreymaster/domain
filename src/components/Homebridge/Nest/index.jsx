import React from 'react';
import classNames from 'classnames';
import { useLumenContext } from '../../../Context';
import { convertToF, filterTypes } from '../../../utils';
import Flex from '../../../common/Flex';
import Font from '../../../common/Font';
import { DAY_BACKGROUND_COLOR_CONTAINER, RED, BLUE, NIGHT_BACKGROUND_COLOR, NIGHT_BACKGROUND_COLOR_CONTAINER, DAY_COLOR_SECONDARY } from '../../../constants';
import './nest.style.css';

const getBackgroundColorDay = (value, isDay) => {
    if (value === 0) {
        if (isDay) {
            return DAY_BACKGROUND_COLOR_CONTAINER;
        }
        return NIGHT_BACKGROUND_COLOR;
    }
    if (value === 1) {
        return RED;
    }
    if (value === 2) {
        return BLUE;
    }
}

const getHeatCoolStatus = (value) => {
    if (value === 0) {
        return "Off"
    }
    if (value === 1) {
        return "Heating";
    }
    if (value === 2) {
        return "Cooling";
    }
}

const Nest = () => {
    const { homebridge, isDay } = useLumenContext();
    const { nest } = homebridge;
    const { eco, fan, thermostat } = nest;
    const [data] = thermostat;
    const [ecoData] = eco;
    const { values, serviceCharacteristics } = data;
    console.log(data);
    return (
        <Flex direction="column" justifyContent="center" alignItems="center" margin="30px 0px 0px 0px">
            <Flex className={classNames({
                'breath-animation-nest-heat': values.CurrentHeatingCoolingState === 1,
                'breath-animation-nest-cool': values.CurrentHeatingCoolingState === 2,
            })}
                // boxShadow
                justifyContent="center"
                alignItems="center"
                height="100px"
                width="100px"
                borderRadius="100px"
                // backgroundColor={isDay ? NIGHT_BACKGROUND_COLOR_CONTAINER : DAY_BACKGROUND_COLOR_CONTAINER}
                style={{border: "4px solid grey"}}
            >
                <Font color={isDay ? null : DAY_BACKGROUND_COLOR_CONTAINER} style={{ marginLeft: 10 }} fontSize={36}>{convertToF(values.CurrentTemperature).toFixed(0)}°</Font>
            </Flex>
            <Flex direction="row" margin="10px">
                <Flex direction="column" justifyContent="center" alignItems="center" width="45px" margin="5px">
                    <Font fontSize="10px">Target</Font>
                    <Flex borderRadius="50px" backgroundColor={isDay ? DAY_BACKGROUND_COLOR_CONTAINER : NIGHT_BACKGROUND_COLOR_CONTAINER} direction="column" direction="column" justifyContent="center" alignItems="center" width="45px">
                        <Font>{convertToF(values.TargetTemperature).toFixed(0)}°</Font>
                    </Flex>
                </Flex>
                <Flex direction="column" justifyContent="center" alignItems="center" width="75px" margin="5px">
                    <Font fontSize="10px">Status</Font>
                    <Flex borderRadius="50px" backgroundColor={isDay ? DAY_BACKGROUND_COLOR_CONTAINER : NIGHT_BACKGROUND_COLOR_CONTAINER} direction="column" direction="column" justifyContent="center" alignItems="center" width="75px">
                        <Font>{getHeatCoolStatus(values.CurrentHeatingCoolingState)}</Font>
                    </Flex>
                </Flex>
                <Flex direction="column" justifyContent="center" alignItems="center" width="45px" margin="5px">
                    <Font fontSize="10px">Eco</Font>
                    <Flex borderRadius="50px" backgroundColor={isDay ? DAY_BACKGROUND_COLOR_CONTAINER : NIGHT_BACKGROUND_COLOR_CONTAINER} direction="column" direction="column" justifyContent="center" alignItems="center" width="45px">
                        <Font>{ecoData.values.On ? "Yes" : "No"}</Font>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Nest;