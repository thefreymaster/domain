import React from 'react';
import { Context } from '../Context';
import { DAY_COLOR_SECONDARY } from '../constants';

const Font = (props) => {
    const { isDay } = React.useContext(Context);
    const inline = {
        color: props.color ? props.color : isDay ? DAY_COLOR_SECONDARY : 'white',
        fontSize: props.fontSize,
        fontFamily:` 'Fredoka One', cursive`,
        ...props.style
    }
    return <div style={inline}>{props.children}</div>
}

export default Font;