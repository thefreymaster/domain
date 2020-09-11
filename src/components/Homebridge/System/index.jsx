import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useLumenContext } from '../../../Context';
import Flex from '../../../common/Flex';
import Font from '../../../common/Font';
import { DAY_BACKGROUND_COLOR_CONTAINER, NIGHT_BACKGROUND_COLOR_CONTAINER, WHITE, NIGHT_BACKGROUND_COLOR } from '../../../constants';
import { faDesktop, faWindowClose } from '../../../../node_modules/@fortawesome/free-solid-svg-icons';

const System = () => {
    const { homebridge, isDay } = useLumenContext();
    const { system } = homebridge;
    const [data] = system;
    return (
        <Flex style={{ flexWrap: "wrap" }} direction="column" justifyContent="center" alignItems="center" margin="10px 0px 10px 0px" width="100%">
            <Font fontSize="10px">{data.serviceName}</Font>
            <Font fontSize="10px">{data.values.Version}</Font>
        </Flex>
    )
}

export default System;