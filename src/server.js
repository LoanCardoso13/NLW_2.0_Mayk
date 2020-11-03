const express = require("express");
const server = express();

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses,
    pageModal,
    filterProffys
} = require('./pages');

const nunjucks = require("nunjucks");
nunjucks.configure('src/views', {
    express: server,
    noCache: true
});

server
    // Configuring public directory for rendering files
    .use(express.static('public'))
    // Configuration to enable req.body from POST
    .use(express.urlencoded({ extended: true }))
    // Routes of application
    .get('/', pageLanding)
    .get('/registration', pageGiveClasses)
    .get('/search-tutor', pageStudy)
    .get('/narrow-search', filterProffys)
    .post('/save-class', saveClasses)
    .get('/registered', pageModal)
    // Running server
    .listen(3000);  