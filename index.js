// basic library imports
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

const { APP_PORT } = require('./config/index');


app.use(morgan('dev'));
app.use(cors());
app.use(express.json({
    extended: true
}))

const router = require('./routes/index');

app.use('/', router);


const port = APP_PORT || process.env.PORT;

app.listen(port, () => {
    console.log('Server has been started on port : ', port);
}).on('error', (error) => {
    console.log('Faced a runtime error', error);
});