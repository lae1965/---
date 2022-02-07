import { DateTime } from 'https://moment.github.io/luxon/es6/luxon.min.js';

const getDateDiff = (firstDate, secondDate) => {
    if (firstDate < secondDate) {
        [firstDate, secondDate] = [secondDate, firstDate];
    }
    return DateTime.fromISO(firstDate).diff(DateTime.fromISO(secondDate), ['years', 'months', 'days']);
}

export default getDateDiff;