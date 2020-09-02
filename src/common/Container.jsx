import React from 'react';
import classNames from 'classnames';
import './common.style.css';

const Container = (props) => {
    const inline = {
        display: 'flex',
        justifyContent: props.justifyContent,
        alignItems: props.alignItems,
        height: window.innerHeight,
        width: window.innerWidth,
        backgroundColor: props.backgroundColor,
    }
    return <div className={classNames('background-transition')} style={inline}>{props.children}</div>
}

export default Container;