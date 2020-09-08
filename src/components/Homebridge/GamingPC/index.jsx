import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useLumenContext } from '../../../Context';
import Flex from '../../../common/Flex';
import Font from '../../../common/Font';
import { DAY_BACKGROUND_COLOR_CONTAINER, NIGHT_BACKGROUND_COLOR_CONTAINER, WHITE, NIGHT_BACKGROUND_COLOR } from '../../../constants';
import { faDesktop, faWindowClose } from '../../../../node_modules/@fortawesome/free-solid-svg-icons';

const GamingPC = () => {
    const { homebridge, isDay } = useLumenContext();
    const { computers } = homebridge;
    const [data] = computers;
    return (
        <Flex style={{ flexWrap: "wrap" }} direction="column" justifyContent="center" alignItems="center" margin="30px 0px 0px 0px" width="100%">
            <Font fontSize="10px">{data.serviceName}</Font>
            <Flex borderRadius="60px" backgroundColor={isDay ? DAY_BACKGROUND_COLOR_CONTAINER : NIGHT_BACKGROUND_COLOR_CONTAINER} direction="column" direction="column" justifyContent="center" alignItems="center" width="60px" height="60px">
                <FontAwesomeIcon color={isDay ? NIGHT_BACKGROUND_COLOR : WHITE} size="2x" icon={data.values.On ? faDesktop : faWindowClose} />
            </Flex>
            <Font fontSize="10px">{data.values.On ? "Online" : "Offline"}</Font>
        </Flex>
    )
}

export default GamingPC;