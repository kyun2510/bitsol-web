const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
const db = require(path.join(__dirname, '..', 'app', 'core', 'db.js'));

(async () => {
  try {
    const rows = await db.select('*').from('wb_calendar').limit(20);
    console.log('rows:', rows);
    process.exit(0);
  } catch (e) {
    console.error('query error:', e);
    process.exit(1);
  }
})();
