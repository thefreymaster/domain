import React from 'react';
import Flex from '../../common/Flex';
import Title from '../../common/Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'

const Branding = () => {
    return (
        <Flex height="120px" width="100%" justifyContent="center" alignItems="center" direction="column" style={{borderBottom: 'dashed 2px #ffffff3b'}}>
            <FontAwesomeIcon size="2x" style={{color: 'white'}} icon={faLightbulb} />
            <div style={{ marginTop: 10 }} />
            <Title>Lumen</Title>
        </Flex>
    )
}

export default Branding;