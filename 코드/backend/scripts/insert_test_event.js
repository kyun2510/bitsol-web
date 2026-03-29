const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
const db = require(path.join(__dirname, '..', 'app', 'core', 'db.js'));

(async () => {
  try {
    const data = {
      cal_branch: 'gamil',
      cal_date: '2026-02-17',
      cal_title: '정상 등원',
      cal_content: '자동 삽입 테스트',
      cal_status: 'Y',
      cal_created_at: db.fn.now(),
      cal_updated_at: db.fn.now()
    };

    const insertResult = await db('wb_calendar').insert(data);
    const insertedId = Array.isArray(insertResult) ? insertResult[0] : insertResult;
    console.log('insertResult:', insertResult);

    const created = await db('wb_calendar').select('*').where('cal_id', insertedId).first();
    console.log('created record:', created);
    process.exit(0);
  } catch (e) {
    console.error('insert_test_event error:', e);
    process.exit(1);
  }
})();
