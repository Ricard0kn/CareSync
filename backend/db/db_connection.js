// Database connection
const { Pool } = require('pg');

const pool = new Pool({
    connectionString: 'postgres://ricardoneri:@localhost:5432/ehr_db'
});

module.exports = pool;

