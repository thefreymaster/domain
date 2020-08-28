import React from 'react';
import { Context } from '../Context';
import { DAY_COLOR_SECONDARY } from '../constants';

const Title = (props) => {
    const { isDay } = React.useContext(Context);
    const inline = {
        color: props.color ? props.color : isDay ? DAY_COLOR_SECONDARY : 'white',
        fontSize: 18,
        fontFamily:` 'Fredoka One', cursive`,
        ...props.style
    }
    return <div style={inline}>{props.children}</div>
}

export default Title;