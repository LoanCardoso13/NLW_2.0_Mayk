const subjects = [ 
    'Biology',
    'Math',
    'Physics',
    'Chemistry',
    'English',
    'History',
    'Geography'
];

const weekdays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
];

function getSubject(subjectNumber) {
    const position = +subjectNumber -1;
    return subjects[position];
}

function convertHourToMinutes(time) {
    const [hours, minutes] = time.split(':');
    return Number(hours * 60) + Number(minutes);
}

function getWeekday(weekdayNumber) {
    const position = weekdayNumber;
    return weekdays[position];
}

function convertMinutesToHour(time) {
    const hour = Math.floor(time/60);
    const minutes = time % 60;
    return ("0" + String(hour)).slice(-2) + ":" + ( "0" + String(minutes)).slice(-2);
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHourToMinutes,
    convertMinutesToHour,
    getWeekday
}