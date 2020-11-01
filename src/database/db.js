const Database = require('sqlite-async');

function execute(db) {

    return db.exec(`
        CREATE TABLE IF NOT EXISTS proffys (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            avatar TEXT,
            whatsapp TEXT,
            bio TEXT
        );

        CREATE TABLE IF NOT EXISTS classes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            subject INTEGER, 
            cost TEXT,
            proffy_id INTEGER
        );

        CREATE TABLE IF NOT EXISTS class_schedule (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            class_id INTEGER,
            weekday INTEGER,
            time_from INTEGER,
            time_to INTEGER
        );
    `);
}

module.exports = Database.open(__dirname + '/database.sqlite').then(execute);


// const sqlite3 = require("sqlite3").verbose();

// const db = new sqlite3.Database("./src/database/database.db");

// module.exports = db;

// db.serialize(() => {

//     db.run(`
//          CREATE TABLE IF NOT EXISTS tutors (
//              id INTEGER PRIMARY KEY AUTOINCREMENT,
//              name TEXT,
//              image TEXT,
//              whatsapp TEXT,
//              bio TEXT,
//              subject TEXT,
//              cost TEXT,
//              weekday TEXT
//          );
//      `);

//      const query = `
//      INSERT INTO tutors (
//         name,
//         image,
//         whatsapp,
//         bio,
//         subject,
//         cost,
//         weekday
//     ) VALUES (?,?,?,?,?,?,?);
//     `
//     const values = [
//         "Tiago Luchtenberg",
//         "https://images.unsplash.com/photo-1548535537-3cfaf1fc327c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
//         "(123) 456-789",
//         "As vezes não sei nem onde eu tô, mas consigo me localizar facilmente em qualquer lugar. Tenho memória fotográfica e nunca fico perdido. Eu ensino a galera como não se perder na vida, com lições geográficas simples pra você nunca mais precisar de mapa na sua bela vida.",
//         "Geography",
//         "350.00",
//         "Wednesday"
//     ]
    
//     function afterInsertData(err) {
//                 if(err) {
//                     return console.log(err);
//                 }
//                 console.log("Successfully registered!");
//                 console.log(this);
//             }

//     db.run(query, values, afterInsertData);
// });
