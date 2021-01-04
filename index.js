const express = require('express');
const router = require('./routes/Index');
const session = require('./middleware/Session');
const cors = require('./middleware/Cors');

const app = express();
app.use(express.json());
// if you run behind a proxy (e.g. nginx)
// app.set('trust proxy', 1);

// setup CORS logic
app.options('*', cors); // You can also enable pre-flight across-the-board
app.use(cors);

app.use(session);

// router
app.use(router);

app.listen(8080, () => console.log('server is running on port 8080'));
