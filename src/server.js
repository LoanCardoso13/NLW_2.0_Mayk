const express = require("express");
const server = express();

const db = require('./database/db');

const nunjucks = require("nunjucks");

server.use(express.static('public'));

nunjucks.configure('src/views', {
    express: server,
    noCache: false
});

server.use(express.urlencoded({ extended: true }));

server.get('/', (req, res) => {
    return res.render('index.html');
});

server.get('/registration', (req, res) => {
    return res.render('registration.html');
});

server.post('/registered', (req, res) => {

    db.serialize(() => {
        db.run(`
         CREATE TABLE IF NOT EXISTS tutors (
             id INTEGER PRIMARY KEY AUTOINCREMENT,
             name TEXT,
             image TEXT,
             whatsapp TEXT,
             bio TEXT,
             subject TEXT,
             cost TEXT,
             weekday TEXT,
             fromStart TEXT,
             toEnd TEXT
         );
     `);

        const query = `
        INSERT INTO tutors (
            name,
            image,
            whatsapp,
            bio,
            subject,
            cost,
            weekday,
            fromStart,
            toEnd
        ) VALUES (?,?,?,?,?,?,?,?,?);
        `
    
        const values = [
            req.body.name,
            req.body.image,
            req.body.whatsapp,
            req.body.bio,
            req.body.subject,
            req.body.cost,
            req.body.weekday,
            req.body.from,
            req.body.to
        ]

        function afterInsertData(err) {
            if(err) {
                return console.log(err);
            }
            return res.render("modal.html");
        }
    
        db.run(query, values, afterInsertData); 
    
    });


});

server.get('/search-tutor', (req, res) => {

    db.all(`SELECT * FROM tutors`, function(err,rows) {
        if(err) {
            return console.log(err);
        };

        for (i = 0; i < rows.length; i++) {
            rows[i].weekday = rows[i].weekday.split(",");
            rows[i].fromStart = rows[i].fromStart.split(",");
            rows[i].toEnd = rows[i].toEnd.split(",");
        };

        weekdays = [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday'
        ];

        return res.render("search-results.html", {tutors: rows, weekdays});

    });

});

server.get('/narrow-search', (req, res) => {

    day = req.query.weekday;
    subject = req.query.subject;

    const query = `
    SELECT * FROM tutors
    WHERE weekday LIKE '%${day}%'
    AND subject='${subject}'
    ` 

    db.all(query, (err, rows) => {
        if (err) {
            return console.log(err);
        }

        for (i = 0; i < rows.length; i++) {
            rows[i].weekday = rows[i].weekday.split(",");
            rows[i].fromStart = rows[i].fromStart.split(",");
            rows[i].toEnd = rows[i].toEnd.split(",");
        };
    
        weekdays = [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday'
        ];

        return res.render('search-results.html', {tutors: rows, weekdays});

    });

});

server.listen(3000);