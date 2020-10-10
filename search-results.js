const topicElement = document.querySelector('select[name=subject]');
const weekdayElement = document.querySelector('select[name=weekday]');
const timeElement = document.querySelector('select[name=time]');

topics = [ 
    'Biology',
    'Math',
    'Physics',
    'Chemistry',
    'English',
    'History',
    'Geography'
];

weekdays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
];

var times = []
for (i = 0; i < 24; i++) {
    times.push(String(i) + 'h');
}

for (topic of topics) {
    topicElement.innerHTML += `<option>${topic}</option>`
}

for (weekday of weekdays) {
    weekdayElement.innerHTML += `<option>${weekday}</option>`
}

for (time of times) {
    timeElement.innerHTML += `<option>${time}</option>`
}