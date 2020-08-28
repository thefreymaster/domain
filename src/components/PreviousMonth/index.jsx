import React from 'react';
import { filter } from 'lodash';
import * as Lumen from "../../Context";
import TitleAndDescription from '../../common/TitleAndDescription';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarrot, faCaretUp, faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';

const PreviousMonth = () => {
    const context = React.useContext(Lumen.Context);
    if (context.house.analytics.length === 0) {
        return null
    }
    const month = new Date().getMonth();
    const previousMonth = month === 0 ? 11 : month - 1;
    const housePreviousMonthAnalytics = context.house.analytics[previousMonth];
    const houseMonthAnalytics = context.house.analytics[month];
    const change = ((housePreviousMonthAnalytics.totalTimeOn / houseMonthAnalytics.totalTimeOn).toFixed(2) * 100) - 100;
    return (
        <TitleAndDescription
            fontSize={28}
            title={`${change === -100 ? 'N/A' : `${change}%`}`}
            titleColor={change > 0 ? '#f95858' : '#70e993'}
            icon={<FontAwesomeIcon size="2x" style={{ color: change > 0 ? '#f95858' : '#70e993' }} icon={change === -100 ? faCaretRight : change > 1 ? faCaretUp : faCaretDown} />}
            description={change === -100 ? "Check back next month" : "Change since last month"}
        />
    )
}

export default PreviousMonth;