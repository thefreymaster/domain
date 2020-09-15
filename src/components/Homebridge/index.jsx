import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getHomebridgeAccessories } from '../../api/rest';
import { useLumenContext } from '../../Context';
import Flex from '../../common/Flex';
import Nest from './Nest';
import Temperatures from './Temperatures';
import GamingPC from './GamingPC';
import Font from '../../common/Font';
import { NIGHT_BACKGROUND_COLOR, WHITE } from '../../constants';
import { faWindowClose, faTruckLoading, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Loader from 'react-loader-spinner'

export const Homebridge = () => {
    const { dispatch, homebridge, isDay } = useLumenContext();
    React.useLayoutEffect(() => {
        const fetchAccessories = async () => {
            const accessories = await getHomebridgeAccessories();
            console.log(accessories)
            dispatch({ type: "SET_HOMEBRIDGE_ACCESSORIES", payload: { accessories } })
        }
        fetchAccessories();
    }, []);
    if (homebridge.error) {
        return (
            <Flex animate height="100%" direction="column" justifyContent="center" alignItems="center">
                <FontAwesomeIcon color={isDay ? NIGHT_BACKGROUND_COLOR : WHITE} size="2x" icon={faWindowClose} />
                <Font>Homebridge Offline</Font>
            </Flex>
        )
    }
    if (!homebridge.system) {
        return (
            <Flex height="100%" direction="column" justifyContent="center" alignItems="center">
                <Loader
                    type="Puff"
                    color="#fff"
                    height={30}
                    width={30}
                    timeout={3000} //3 secs

                />
            </Flex>
        )
    }
    return (
        <Flex direction="column" justifyContent="center" alignItems="center" height="100%" width="calc(100%)">
            <Nest />
            <Flex style={{ flexGrow: 1 }} />
            <Temperatures />
            <Flex style={{ flexGrow: 1 }} />
            <GamingPC />
        </Flex>
    )
}