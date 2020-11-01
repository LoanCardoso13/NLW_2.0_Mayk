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
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

function getSubject(subjectNumber) {
    const position = +subjectNumber -1;
    return subjects[position];
}

function convertHourToMinutes(time) {
    const [hours, minutes] = time.split(':');
    return Number(hours * 60) + Number(minutes);
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHourToMinutes
}