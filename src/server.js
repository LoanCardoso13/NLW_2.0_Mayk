const express = require("express");
const server = express();

server.use(express.static('public'));

server.get('/', (req, res) => {
    return res.sendFile(__dirname + '/views/index.html');
});

server.get('/registration', (req, res) => {
    return res.sendFile(__dirname + '/views/registration.html');
});

server.get('/search-tutor', (req, res) => {
    return res.sendFile(__dirname + '/views/search-results.html');
});

server.get('/registered', (req, res) => {
    return res.sendFile(__dirname + '/views/modal.html');
}); 

server.listen(3000);