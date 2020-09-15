import React from 'react';
import AnimatedNumber from "animated-number-react";
import { Context } from '../Context';
import { DAY_COLOR_SECONDARY } from '../constants';

const Font = (props) => {
    const { isDay } = React.useContext(Context);
    const inline = {
        color: props.color ? props.color : isDay ? DAY_COLOR_SECONDARY : 'white',
        fontSize: props.fontSize,
        fontFamily: ` 'Fredoka One', cursive`,
        ...props.style
    }
    if (props.animate) {
        return (
            <div style={inline}>
                <AnimatedNumber
                    value={props.children}
                />
            </div>
        )
    }
    return (
        <div style={inline}>{props.children}</div>
    )
}

export default Font;