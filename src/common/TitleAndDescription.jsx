import React from 'react';
import Flex from './Flex';

const TitleAndDescription = (props) => {
    const inline = {
        item: {
            padding: '12px 0px 12px 0px',
            color: 'white',
            fontFamily: '"Fredoka One", cursive',
        },
        name: {
            fontSize: props.fontSize,
            marginLeft: props.noMargin ? 0 : 10,
            color: props.titleColor || 'white',
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
            color: '#ffffff6b',
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