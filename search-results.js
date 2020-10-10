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
    topicElement.innerHTML += `<option value="${topic}">${topic}</option>`
}

for (weekday of weekdays) {
    weekdayElement.innerHTML += `<option value="${weekday}">${weekday}</option>`
}

for (time of times) {
    timeElement.innerHTML += `<option value="${time}">${time}</option>`
}

weekdayElement.style.opacity = "1.0";
timeElement.style.opacity = "1.0";

function ableWeekday() {
    weekdayElement.disabled = false;
}

function ableTime() {
    timeElement.disabled = false;
}