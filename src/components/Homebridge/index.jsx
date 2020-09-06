import React from 'react';
import { getHomebridgeAccessories } from '../../api/rest';

export const Homebridge = () => {
    React.useLayoutEffect(() => {
        getHomebridgeAccessories();
    }, []);
    return <div>
        homebridge
    </div>
}