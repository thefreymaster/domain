import React from 'react';
import Flex from './Flex';
import { Context } from '../Context';
import { DAY_COLOR, DAY_COLOR_SECONDARY } from '../constants';

const TitleAndDescription = (props) => {
    const { isDay } = React.useContext(Context);
    const inline = {
        name: {
            fontSize: props.fontSize,
            marginLeft: props.noMargin ? 0 : 10,
            color: isDay ? DAY_COLOR : 'white',
            fontFamily: '"Fredoka One", cursive',
        },
        icon: {
            display: 'flex',
            alignItems: 'center',
            marginLeft: 6,
        },
        description: {
            fontSize: 11,
            marginLeft: props.noMargin ? 0 : 10,
            color: isDay ? DAY_COLOR_SECONDARY : 'white',
            fontFamily: '"Fredoka One", cursive',
        }
    }
    return (
        <Flex direction="column">
            <Flex direction="row">
                <div style={inline.name}>{props.title}</div>
                <div style={inline.icon}>{props.icon}</div>
            </Flex>
            <div style={inline.description}>{props.description}</div>
        </Flex>
    )
}

export default TitleAndDescription;