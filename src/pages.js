// const db = require('./database/db');
const Database = require('./database/db');

const { subjects, weekdays, getSubject, convertHourToMinutes } = require('./utils/format');

function pageLanding(req, res) {
    return res.render('index.html');
}

async function pageStudy(req, res) {

    // db.all(`SELECT * FROM tutors`, function(err,rows) {
    //     if(err) {
    //         return console.log(err);
    //     };

    //     for (i = 0; i < rows.length; i++) {
    //         rows[i].weekday = rows[i].weekday.split(",");
    //         rows[i].fromStart = rows[i].fromStart.split(",");
    //         rows[i].toEnd = rows[i].toEnd.split(",");
    //     };

    //     return res.render("search-results.html", {proffys, filters, subects, weekdays});

    // });
    
    
    // const filters = req.query;
    // console.log(filters.subject)
    // console.log(filters.weekday)
    // console.log(filters.time)

    // if (!filters.subject || !filters.weekday || !filters.time) {
    //     console.log('got entered');

    //     query = `SELECT * FROM proffys`

    //     db.all()

    //     return res.render("search-results.html", { filters, subjects, weekdays });
    // }

    

    // const timeToMinutes = convertHourToMinutes(filters.time);

    // const query = `
    //     SELECT classes.*, proffys.*
    //     FROM proffys
    //     JOIN classes ON (classes.proffy_id = proffys.id)
    //     WHERE EXISTS (
    //         SELECT class_schedule.*
    //         FROM class_schedule
    //         WHERE class_schedule.class_id = classes.id
    //         AND class_schedule.weekday = ${filters.weekday}
    //         AND class_schedule.time_from <= ${timeToMinutes}
    //         AND class_schedule.time_to > ${timeToMinutes}
    //     )
    //     AND classes.subject = '${filters.subject}';
    // `
    // Catching errors in the application
    // try {
    //     const db = await Database;
    //     const proffys = await db.all(query);

    //     proffys.forEach( proffy => {
    //         proffy.subject = getSubject(proffy.subject);
    //     });

    //     console.log(proffys)

    //     return res.render('search-results.html', { proffys, subjects, filters, weekdays});
    // } catch (error) {
    //     console.log(error);
    // }

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
        console.log(proffys);
        const classes = await db.all(query2);
        const class_schedules = await db.all(query3);

        for (i = 0; i < classes.length; i++) {
            classes[i].subject = getSubject(classes[i].subject);
        }

        return res.render('search-results.html', {proffys, classes, class_schedules, subjects, weekdays});
    } catch(error) {
        console.log(error);
    }
}


function pageGiveClasses(req, res) {
    return res.render('registration.html', {subjects, weekdays});
}

async function saveClasses(req,res) {
    const createProffy = require('./database/createProffy');

    // console.log(req.body)

    // const data = req.body;

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

        let queryString = "?subject=" + req.body.subject;
        queryString += "?weekday=" + req.body.weekday[0];
        queryString += "?time=" + req.body.time_from[0];
        return res.redirect('/search-tutor' + queryString);
    } catch (error) {
        console.log(error);
    }

    
}

function addProffyToDatabase(req, res) {

    // db.serialize(() => {
    //     db.run(`
    //      CREATE TABLE IF NOT EXISTS tutors (
    //          id INTEGER PRIMARY KEY AUTOINCREMENT,
    //          name TEXT,
    //          image TEXT,
    //          whatsapp TEXT,
    //          bio TEXT,
    //          subject TEXT,
    //          cost TEXT,
    //          weekday TEXT,
    //          fromStart TEXT,
    //          toEnd TEXT
    //      );
    //  `);

    //     const query = `
    //     INSERT INTO tutors (
    //         name,
    //         image,
    //         whatsapp,
    //         bio,
    //         subject,
    //         cost,
    //         weekday,
    //         fromStart,
    //         toEnd
    //     ) VALUES (?,?,?,?,?,?,?,?,?);
    //     `
    
    //     const values = [
    //         req.body.name,
    //         req.body.image,
    //         req.body.whatsapp,
    //         req.body.bio,
    //         req.body.subject,
    //         req.body.cost,
    //         req.body.weekday,
    //         req.body.from,
    //         req.body.to
    //     ]

    //     function afterInsertData(err) {
    //         if(err) {
    //             return console.log(err);
    //         }
    //         return res.render("modal.html");
    //     }
    
    //     db.run(query, values, afterInsertData); 
    
    // });

    data = req.query;
    proffys.push(data);
    res.render('modal.html');
}

async function filterProffys(req, res) {

    const filters = req.query;
    // const day = req.query.weekday;
    // const subject = req.query.subject;
    // const time = req.query.time;
    console.log(filters);
    
    // const query1 = `
    //     SELECT * FROM proffys
    // `
    // const query2 = `
    //     SELECT * FROM classes
    // `
    // const query3 = `
    //     SELECT * FROM class_schedule
    // `

    const timeToMinutes = convertHourToMinutes(filters.time);
    console.log(timeToMinutes);

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

    try {
        const db = await Database;

        const proffys = await db.all(query);
        const classes = proffys;
        for (i = 0; i < classes.length; i++) {
            classes[i].subject = getSubject(classes[i].subject);
        }
        console.log(proffys);

        // const proffys = await db.all(query1);
        // const classes = await db.all(query2);
        // const class_schedules = await db.all(query3);

        // for (i = 0; i < classes.length; i++) {
        //     classes[i].subject = getSubject(classes[i].subject);
        // }

        return res.render('search-results.html', { proffys, classes, subjects, weekdays, filters});
    } catch(error) {
        console.log(error);
    }

    // return res.render('search-results.html', {proffys, subjects, weekdays, filters})

    // const query = `
    // SELECT * FROM tutors
    // WHERE weekday LIKE '%${day}%'
    // AND subject='${subject}'
    // ` 

    // db.all(query, (err, rows) => {
    //     if (err) {
    //         return console.log(err);
    //     }

    //     for (i = 0; i < rows.length; i++) {
    //         rows[i].weekday = rows[i].weekday.split(",");
    //         rows[i].fromStart = rows[i].fromStart.split(",");
    //         rows[i].toEnd = rows[i].toEnd.split(",");
    //     };
    
    //     weekdays = [
    //         'Monday',
    //         'Tuesday',
    //         'Wednesday',
    //         'Thursday',
    //         'Friday'
    //     ];

    //     return res.render('search-results.html', {tutors: rows, weekdays, time});

    // });

}

module.exports = {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses,
    filterProffys
}