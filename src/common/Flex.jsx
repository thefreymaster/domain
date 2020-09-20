import React from 'react';
import classNames from 'classnames';
import Title from './Title';
import { Context } from '../Context';
import { DAY_BOX_SHADOW, NIGHT_BOX_SHADOW, DAY_BORDER, NIGHT_BORDER } from '../constants';

const Flex = (props) => {
    const { isDay } = React.useContext(Context);
    const determineBorder = () => {
        if(!isDay){
            return DAY_BORDER;
        }
        return NIGHT_BORDER;
    }

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
        borderTop: props.borderTop && determineBorder(),
        borderRight: props.borderRight && determineBorder(),
        borderBottom: props.borderBottom && determineBorder(),
        borderLeft: props.borderLeft && determineBorder(),
        
        ...props.style,
    }
    return (
        <React.Fragment>
            <Title style={{ minHeight: props.title && 30 }}>{props.title}</Title>
            <div
                onMouseDown={props.onMouseDown}
                className={classNames(props.className, { 'zoom-in-animation': props.animate })}
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