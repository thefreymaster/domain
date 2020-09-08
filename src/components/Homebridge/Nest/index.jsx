import React from 'react';
import { useLumenContext } from '../../../Context';
import { convertToF, filterTypes } from '../../../utils';
import Flex from '../../../common/Flex';
import Font from '../../../common/Font';
import { DAY_BACKGROUND_COLOR_CONTAINER, RED, BLUE, NIGHT_BACKGROUND_COLOR } from '../../../constants';

const getBackgroundColorDay = (value, isDay) => {
    if(value === 0){
        if(isDay){
            return DAY_BACKGROUND_COLOR_CONTAINER;
        }
        return NIGHT_BACKGROUND_COLOR;
    }
    if(value === 1){
        return RED;
    }
    if(value === 2){
        return BLUE;
    }
}

const Nest = () => {
    const { homebridge, isDay } = useLumenContext();
    const { nest } = homebridge;
    const { eco, fan, thermostat } = nest;
    const [data] = thermostat;
    const { values, serviceCharacteristics } = data;

    const [currentHeatingCoolingState] = filterTypes(serviceCharacteristics, "type", "CurrentHeatingCoolingState");
    console.log(data);
    return (
        <Flex justifyContent="center" alignItems="center" margin="10px 0px 0px 0px">
            <Flex boxShadow justifyContent="center" alignItems="center" height="100px" width="100px" borderRadius="100px" backgroundColor={getBackgroundColorDay(currentHeatingCoolingState.value, isDay)}>
                <Font style={{marginLeft: 10}} fontSize={36}>{convertToF(values.CurrentTemperature).toFixed(0)}°</Font>
            </Flex>
        </Flex>
    )
}

export default Nest;