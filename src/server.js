const express = require("express");
const server = express();

const db = require('./database/db');

const nunjucks = require("nunjucks");

server.use(express.static('public'));

nunjucks.configure('src/views', {
    express: server,
    noCache: false
});

// Habilitating req.body in the application 
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
             weekday TEXT
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
            weekday
        ) VALUES (?,?,?,?,?,?,?);
        `
    
        const values = [
            req.body.name,
            req.body.image,
            req.body.whatsapp,
            req.body.bio,
            req.body.subject,
            req.body.cost,
            req.body.weekday
        ]
        console.log(values);
        // console.log(req.body.bio.replace(/(?:\r\n|\r|\n)/g, '<br>'));
        // return res.render('index.html');
        function afterInsertData(err) {
            if(err) {
                return console.log(err);
            }
            console.log(this);
            return res.render("modal.html");
        }
    
        db.run(query, values, afterInsertData); 
    
    })


})

server.get('/search-tutor', (req, res) => {

    db.all(`SELECT * FROM tutors`, function(err,rows) {
        if(err) {
            return console.log(err);
        }
        console.log(rows);
        return res.render("search-results.html", {tutors: rows});    
    });

});

// server.get('/registered', (req, res) => {
//     return res.render('modal.html');
// }); 

server.listen(3000);