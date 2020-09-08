import React from 'react';
import _ from 'lodash';
import { useLumenContext } from '../../../Context';
import { convertToF, filterTypes } from '../../../utils';
import Flex from '../../../common/Flex';
import Font from '../../../common/Font';
import { DAY_BACKGROUND_COLOR_CONTAINER, RED, BLUE, NIGHT_BACKGROUND_COLOR, NIGHT_BACKGROUND_COLOR_CONTAINER } from '../../../constants';

const Temperatures = () => {
    const { homebridge, isDay } = useLumenContext();
    const { temperatures } = homebridge;
    return (
        <Flex style={{ flexWrap: "wrap" }} direction="row" margin="20px 0px 0px 0px" width="100%">
            {temperatures.map(temperature => {
                const serviceName = temperature.serviceName.replace("Temperature", "")
                return (
                    <Flex width="50%" direction="column" height="100px" justifyContent="center" alignItems="center">
                        <Font fontSize="10px">{serviceName}</Font>
                        <Flex borderRadius="60px" backgroundColor={isDay ? DAY_BACKGROUND_COLOR_CONTAINER : NIGHT_BACKGROUND_COLOR_CONTAINER} direction="column" direction="column" justifyContent="center" alignItems="center" width="60px" height="60px">
                            <Font>{convertToF(temperature.values.CurrentTemperature).toFixed(0)}°</Font>
                        </Flex>
                    </Flex>
                )
            })}
        </Flex>
    )
}

export default Temperatures;