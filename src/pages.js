const Database = require('./database/db');

const { subjects, weekdays, getSubject, getWeekday, convertHourToMinutes, convertMinutesToHour } = require('./utils/format');

function pageLanding(req, res) {
    return res.render('index.html');
}

async function pageStudy(req, res) {

    const query1 = `
        SELECT * FROM proffys
    `
    const query2 = `
        SELECT * FROM classes
    `
    const query3 = `
        SELECT * FROM class_schedule
    `

    try {
        const db = await Database;
        const proffys = await db.all(query1);
        const classes = await db.all(query2);
        const class_schedules = await db.all(query3);

        for (i = 0; i < classes.length; i++) {
            classes[i].subject = getSubject(classes[i].subject);
        }
        for (i = 0; i < class_schedules.length; i++) {
            class_schedules[i].weekday = getWeekday(class_schedules[i].weekday);
            class_schedules[i].time_from = convertMinutesToHour(class_schedules[i].time_from);
            class_schedules[i].time_to = convertMinutesToHour(class_schedules[i].time_to);
        }
        
        return res.render('search-results.html', {proffys, classes, class_schedules, subjects, weekdays});
    } catch(error) {
        console.log(error);
    }

}


function pageGiveClasses(req, res) {
    return res.render('registration.html', {subjects, weekdays});
}

async function saveClasses(req, res) {

    const createProffy = require('./database/createProffy');

    const proffyValue = {
        name: req.body.name,
        avatar: req.body.avatar,
        whatsapp: req.body.whatsapp,
        bio: req.body.bio
    };

    const classValue = {
        subject: req.body.subject,
        cost: req.body.cost
    };

    const classScheduleValues = req.body.weekday.map( (weekday, index) => {
        return {
            weekday,
            time_from: convertHourToMinutes(req.body.time_from[index]),
            time_to: convertHourToMinutes(req.body.time_to[index])
        }
    });

    try {
        const db = await Database;
        await createProffy(db, {proffyValue, classValue, classScheduleValues});
        return res.redirect('/registered');
    } catch (error) {
        console.log(error);
    }
    
}

function pageModal(req, res) {
    res.render('modal.html');
}

async function filterProffys(req, res) {

    const filters = req.query;

    if (!filters.subject || !filters.weekday || !filters.time) {
        const fieldBlank = "Please choose a time for filtering."
        return res.render('search-results.html', {subjects, weekdays, filters, fieldBlank});
    }

    const timeToMinutes = convertHourToMinutes(filters.time);

    const query = `
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE EXISTS (
            SELECT class_schedule.*
            FROM class_schedule
            WHERE class_schedule.class_id = classes.id
            AND class_schedule.weekday = ${filters.weekday}
            AND class_schedule.time_from <= ${timeToMinutes}
            AND class_schedule.time_to > ${timeToMinutes}
        )
        AND classes.subject = ${filters.subject};
    `
    const query2 = `
        SELECT classes.*, class_schedule.*
        FROM classes
        JOIN class_schedule ON (class_schedule.class_id = classes.id)
        WHERE EXISTS (
            SELECT class_schedule.*
            FROM class_schedule
            WHERE class_schedule.class_id = classes.id
            AND class_schedule.weekday = ${filters.weekday}
            AND class_schedule.time_from <= ${timeToMinutes}
            AND class_schedule.time_to > ${timeToMinutes}
        )
        AND classes.subject = ${filters.subject};
    `

    try {
        const db = await Database;
        const proffys = await db.all(query);
        const classes = proffys;
        const class_schedules = await db.all(query2);

        for (i = 0; i < classes.length; i++) {
            classes[i].subject = getSubject(classes[i].subject);
        }
        for (i = 0; i < class_schedules.length; i++) {
            class_schedules[i].weekday = getWeekday(class_schedules[i].weekday);
            class_schedules[i].time_from = convertMinutesToHour(class_schedules[i].time_from);
            class_schedules[i].time_to = convertMinutesToHour(class_schedules[i].time_to);
        }

        return res.render('search-results.html', { proffys, classes, class_schedules, subjects, weekdays, filters});
    } catch(error) {
        console.log(error);
    }

}

module.exports = {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses,
    pageModal,
    filterProffys
}