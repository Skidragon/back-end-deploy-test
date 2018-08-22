require('dotenv').config();

const express = require('express');
const server = express();

server.get('/', () => {
    res.status(200).json('hello');
});
server.get('/test', () => {
    res.status(200).json('test');
});
const port = process.env.PORT || 3001;
server.listen(port, () => console.log(`port ${port} operational`));