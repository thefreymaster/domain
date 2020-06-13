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
            marginLeft: 10,
        },
        description: {
            fontSize: 11,
            marginLeft: 10,
            color: '#ffffff6b',
            fontFamily: '"Fredoka One", cursive',
        }
    }
    return (
        <Flex direction="column">
            <div style={inline.name}>{props.title}</div>
            <div style={inline.description}>{props.description}</div>
        </Flex>
    )
}

export default TitleAndDescription;