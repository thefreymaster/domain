import React from 'react';
import { getHomebridgeAccessories } from '../../api/rest';
import { useLumenContext } from '../../Context';

export const Homebridge = () => {
    const { dispatch } = useLumenContext();
    React.useLayoutEffect(async() => {
        const accessories = await getHomebridgeAccessories();
        console.log(accessories)
        dispatch({ type: "SET_HOMEBRIDGE_ACCESSORIES", payload: { accessories } })
    }, []);
    return <div>
        homebridge
    </div>
}