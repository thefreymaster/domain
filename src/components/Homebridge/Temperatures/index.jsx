import React from 'react';
import { useLumenContext } from '../../../Context';
import { convertToF } from '../../../utils';
import Flex from '../../../common/Flex';
import Font from '../../../common/Font';
import { DAY_BACKGROUND_COLOR_PILL, NIGHT_BACKGROUND_COLOR_PILL } from '../../../constants';

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
                        <Flex
                            style={{ border: "3px solid #e3e3e3" }}
                            borderRadius="60px" backgroundColor={isDay ? DAY_BACKGROUND_COLOR_PILL : NIGHT_BACKGROUND_COLOR_PILL} direction="column" direction="column" justifyContent="center" alignItems="center" width="60px" height="60px">
                            <Font style={{ marginLeft: 2 }}>{convertToF(temperature.values.CurrentTemperature).toFixed(0)}°</Font>
                        </Flex>
                    </Flex>
                )
            })}
        </Flex>
    )
}

export default Temperatures;