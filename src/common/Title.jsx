import React from 'react';

const Title = (props) => {
    const inline = {
        color: 'white',
        fontSize: 18,
        fontFamily:` 'Fredoka One', cursive`,
        ...props.style
    }
    return <div style={inline}>{props.children}</div>
}

export default Title;