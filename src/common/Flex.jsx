import React from 'react';
import Title from './Title';

const Flex = (props) => {
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
        borderRadius: 20,
        flexWrap: props.flexWrap,
        boxShadow: props.boxShadow && `0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)`,
        padding: props.padding,
    }
    return (
        <div style={inline}>
            <Title style={{position: 'fixed', top: 0}}>{props.title}</Title>
            {props.children}
        </div>
    )
}

export default Flex;