const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

// app.use(cors({
//     origin: ['https://example.com', 'https://another-example.com']
// }));  

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Methods', '*');
    response.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept',
    );
    next();
});

const defaultRouter = require('./api/routes/defaultRouter');

app.use('/', defaultRouter);

module.exports = app;