import React from 'react';
import { getHomebridgeAccessories } from '../../api/rest';
import { useLumenContext } from '../../Context';
import Flex from '../../common/Flex';
import Nest from './Nest';
import Temperatures from './Temperatures';
import GamingPC from './GamingPC';

export const Homebridge = () => {
    const { dispatch, homebridge } = useLumenContext();
    React.useLayoutEffect(() => {
        const fetchAccessories = async() => {
            const accessories = await getHomebridgeAccessories();
            console.log(accessories)
            dispatch({ type: "SET_HOMEBRIDGE_ACCESSORIES", payload: { accessories } })
        }
        fetchAccessories();
    }, []);
    if(!homebridge.system){
        return "loading accessories"
    }
    return (
        <Flex direction="column">
            <Nest />
            <Flex flexGrow />
            <Temperatures />
            <GamingPC />
        </Flex>
    )
}