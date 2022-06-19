const dotenv = require('dotenv')
dotenv.config();

module.exports = {
    CORS_ORIGIN: process.env.ALLOW_ORIGIN
}