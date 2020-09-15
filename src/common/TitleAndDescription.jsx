import React from 'react';
import Flex from './Flex';
import { Context } from '../Context';
import { DAY_COLOR, DAY_COLOR_SECONDARY } from '../constants';

const TitleAndDescription = (props) => {
    const { isDay } = React.useContext(Context);
    const inline = {
        title: {
            fontSize: props.fontSize,
            marginLeft: props.noMargin ? 0 : 10,
            color: props.titleColor ? props.titleColor : isDay ? DAY_COLOR : 'white',
            fontFamily: '"Fredoka One", cursive',
            textAlign: props.textAlign,
        },
        icon: {
            display: 'flex',
            alignItems: 'center',
            marginLeft: 6,
        },
        description: {
            fontSize: 11,
            marginLeft: props.noMargin ? 0 : 10,
            color: props.secondaryColor ? props.secondaryColor : isDay ? DAY_COLOR_SECONDARY : 'white',
            fontFamily: '"Fredoka One", cursive',
            textAlign: props.textAlign,
        }
    }
    return (
        <Flex direction="column">
            <Flex direction="row" justifyContent={props.textAlign}>
                <div style={inline.title}>{props.title}</div>
                <div style={inline.icon}>{props.icon}</div>
            </Flex>
            <div style={inline.description}>{props.description}</div>
        </Flex>
    )
}

export default TitleAndDescription;