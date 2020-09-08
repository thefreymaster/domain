import React from 'react';
import classNames from 'classnames';
import { useLumenContext } from '../../../Context';
import { convertToF, filterTypes } from '../../../utils';
import Flex from '../../../common/Flex';
import Font from '../../../common/Font';
import { DAY_BACKGROUND_COLOR_CONTAINER, RED, BLUE, NIGHT_BACKGROUND_COLOR, NIGHT_BACKGROUND_COLOR_CONTAINER, DAY_COLOR_SECONDARY } from '../../../constants';
// import './nest.style.css';

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

const Temperatures = () => {
    const { homebridge, isDay } = useLumenContext();
    const { temperatures } = homebridge;
    return (
        <Flex flexWrap direction="row" margin="30px 0px 0px 0px">
            {temperatures.map(temperature => {
                return (
                    <Flex width="50%">
                        {temperature.values.CurrentTemperature}
                    </Flex>
                )
            })}
        </Flex>
    )
}

export default Temperatures;