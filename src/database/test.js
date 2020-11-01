const Database = require('./db');
const createProffy = require('./createProffy');


Database.then(async (db) => {
    //  Insert data
    proffyValue = {
        name: "Loan Cardoso",
        avatar: "https://avatars0.githubusercontent.com/u/69010793?s=400&u=e860e0f920322bb2e58ce820c4d27863b987ef99&v=4",
        whatsapp: "123 456 789",
        bio: `Entusiasta das melhores tecnologias de quimica avançada.


        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.`,
    }

    classValue = {
        subject:  1,
        cost: "13.00",
        // proffy_id will come
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
    
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
    
        }
    ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues});
    // Consult data
    // const selectedProffys = await db.all('SELECT * FROM proffys');
    // console.log(selectedProffys);

    // const selectedClassesAndProffys = await db.all(`
    //     SELECT classes.*, proffys.*
    //     FROM proffys
    //     JOIN classes ON (classes.proffy_id = proffys.id)
    //     WHERE classes.proffy_id = 1;
    // `)
    // console.log(selectedClassesAndProffys);

    // const selectClassesSchedules = await db.all(`
    //     SELECT class_schedule.*
    //     FROM class_schedule
    //     WHERE class_schedule.class_id = "1"
    //     AND class_schedule.weekday = "0"
    //     AND class_schedule.time_from <= "520"
    //     AND class_schedule.time_to >= "520"
    // `)
    // console.log(selectClassesSchedules);
})