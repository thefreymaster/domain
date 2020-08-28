import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFireExtinguisher, faFire, faLifeRing, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { COLOR, COLOR_BRIGHT, NIGHT_BACKGROUND_COLOR, WHITE } from "../../constants";
import { Context } from '../../Context';
import './theme.style.css';

const ThemeToggle = () => {
    const { dispatch, isDay } = React.useContext(Context);

    return (
        <FontAwesomeIcon
            size="lg"
            color={isDay ? WHITE : NIGHT_BACKGROUND_COLOR}
            icon={faLightbulb}
            onClick={() => {
                isDay ? dispatch({ type: "SET_IS_NIGHT" }) : dispatch({ type: "SET_IS_DAY" });
            }}
            style={{
                padding: '14px',
                backgroundColor: isDay ? NIGHT_BACKGROUND_COLOR : WHITE,
                borderRadius: 100,
                position: 'absolute',
                bottom: '50px',
                right: '50px',
                height: '50px',
                width: '50px',
                boxShadow: determineBoxShadow(isDay)
            }}
            className="navigation-button show-zoom-animation"
        />
    )
}

const determineBoxShadow = (isDay) => {
    if (isDay) {
        return `0 2px 1px -1px #ffffff80, 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)`;
    }
    return `0 2px 1px -1px #00000080, 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)`;
}

export default ThemeToggle;