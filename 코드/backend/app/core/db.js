const knex = require('knex')({
    client:'mysql2',
    connection: {
        host: process.env.DB_HOST,        // DB_HOST와 일치
        user: process.env.DB_USER,        // .env의 DB_USER와 일치 (중요!)
        password: process.env.DB_PASSWORD, // DB_PASSWORD와 일치
        port: process.env.DB_PORT,        // DB_PORT와 일치
        database: process.env.DB_NAME,    // .env의 DB_NAME과 일치 (중요!)
        timezone: '+09:00'
    },
    debug : false
})

module.exports = knex;