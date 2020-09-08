import React from 'react';
import Title from './Title';
import { Context } from '../Context';
import { DAY_BOX_SHADOW, NIGHT_BOX_SHADOW } from '../constants';

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
        flexWrap: props.wrap && 'wrap',
        textAlign: props.textAlign,
        ...props.style,
    }
    return (
        <React.Fragment>
            <Title style={{ minHeight: props.title && 30 }}>{props.title}</Title>
            <div 
                onMouseDown={props.onMouseDown} 
                className={props.className} 
                style={inline} 
                onClick={props.onClick} 
                onMouseOver={props.onMouseOver} 
                onMouseLeave={props.onMouseLeave}>
                {props.children}
            </div>
        </React.Fragment>
    )
}

const determineBoxShadow = (isDay) => {
    if (isDay) {
        return DAY_BOX_SHADOW;
    }
    return NIGHT_BOX_SHADOW;
}



export default Flex;