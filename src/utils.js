const _ = require('lodash');

export const POWER_PER_HOUR = 9.3;

export const getHours = (millisec) => (millisec / (1000 * 60 * 60));

export const convertToF = (celcius) => celcius * 9/5 + 32;

export const filterTypes = (accessoriesToFilter, filterAttribute, type) => _.filter(accessoriesToFilter, (item) => {
    return item[filterAttribute].includes(type)
})