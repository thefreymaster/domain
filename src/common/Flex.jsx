import React from 'react';
import Title from './Title';
import { Context } from '../Context';

const Flex = (props) => {
    const { isDay } = React.useContext(Context);

    const inline = {
        display: 'flex',
        flexDirection: props.direction,
        justifyContent: props.justifyContent,
        alignItems: props.alignItems,
        height: props.height,
        width: props.width,
        backgroundColor: props.backgroundColor,
        padding: props.padding,
        margin: props.margin,
        borderRadius: props.borderRadius,
        flexWrap: props.flexWrap,
        boxShadow: props.boxShadow && determineBoxShadow(isDay),
        padding: props.padding,
        ...props.style,
    }
    return (
        <React.Fragment>
            <Title style={{ minHeight: props.title && 30 }}>{props.title}</Title>
            <div style={inline}>
                {props.children}
            </div>
        </React.Fragment>
    )
}

const determineBoxShadow = (isDay) => {
    if (isDay) {
        return `0 2px 1px -1px #ffffff80, 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)`;
    }
    return `0 2px 1px -1px #00000080, 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)`;
}



export default Flex;