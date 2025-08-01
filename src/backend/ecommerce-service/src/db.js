const {Pool} = require("pg");

const pool = new Pool({
    user: "ecomuser",
    host: "localhost",
    database: "ecomdb",
    password: "ecompass",
    port: 5432,
});

module.exports = pool;
