export function letterInfo(currentDate, targetDate) {
    const minutesDiff = targetDate.diff(currentDate, 'minutes');
    const hoursDiff = targetDate.diff(currentDate, 'hours');
    const daysDiff = targetDate.diff(currentDate, 'days');

    if (minutesDiff > 0 && minutesDiff <= 60) {
        return `Arrives in ${Math.abs(minutesDiff)} ${Math.abs(minutesDiff) === 1 ? 'minute' : 'minutes'}`;

    } else if (hoursDiff > 0 && hoursDiff <= 24) {
        return `Arrives in ${Math.abs(hoursDiff)} ${Math.abs(hoursDiff) === 1 ? 'hour' : 'hours'}`;

    } else if (daysDiff > 0) {
        return `Arrives in ${Math.abs(daysDiff)} ${Math.abs(daysDiff) === 1 ? 'day' : 'days'}`;

    } else if (minutesDiff <= 0 && minutesDiff > -2) {
        return 'Now';

    } else if (minutesDiff <= -2 && minutesDiff > -60) {
        return `${Math.abs(minutesDiff)} ${Math.abs(minutesDiff) === 1 ? 'minute' : 'minutes'} ago`;

    } else if (hoursDiff <= 0 && hoursDiff > -24) {
        return `${Math.abs(hoursDiff)} ${Math.abs(hoursDiff) === 1 ? 'hour' : 'hours'} ago`;

    } else if (daysDiff <= 0) {
        return `${Math.abs(daysDiff)} ${Math.abs(daysDiff) === 1 ? 'day' : 'days'} ago`;
    }
}