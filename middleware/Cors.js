// https://expressjs.com/en/resources/middleware/cors.html#configuring-cors

const cors = require('cors');

const whitelist = new Set(['https://example1.com', 'https://example2.com']);
const corsOptions = {
  optionsSuccessStatus: 200,
  origin: function (origin, callback) {
    if (whitelist.has(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // Set to true to pass the header, otherwise it is omitted
};

module.exports = cors(corsOptions);
