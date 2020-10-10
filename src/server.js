const express = require("express");
const server = express();

const nunjucks = require("nunjucks");

server.use(express.static('public'));

nunjucks.configure('src/views', {
    express: server,
    noCache: false
})

server.get('/', (req, res) => {
    return res.render('index.html');
});

server.get('/registration', (req, res) => {
    return res.render('registration.html');
});

server.get('/search-tutor', (req, res) => {
    return res.render('search-results.html');
});

server.get('/registered', (req, res) => {
    return res.render('modal.html');
}); 

server.listen(3000);