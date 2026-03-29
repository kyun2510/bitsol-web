const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
const db = require(path.join(__dirname, '..', 'app', 'core', 'db.js'));

(async () => {
  try {
    const exists = await db.schema.hasTable('wb_calendar');
    if (!exists) {
      console.log('wb_calendar table does not exist; run create_wb_calendar.js first');
      process.exit(1);
    }

    const hasEnd = await db.schema.hasColumn('wb_calendar', 'cal_end_date');
    if (!hasEnd) {
      await db.schema.alterTable('wb_calendar', function(table) {
        // Add nullable first, then update existing rows, then set notNullable
        table.date('cal_end_date').nullable();
      });
      // set existing cal_end_date to cal_date for current rows
      await db('wb_calendar').whereNull('cal_end_date').update({ cal_end_date: db.raw('cal_date') });
      // alter column to notNullable (some MySQL versions need raw SQL)
      try {
        await db.schema.alterTable('wb_calendar', function(table) {
          table.date('cal_end_date').notNullable().alter();
        });
      } catch (e) {
        // If alter() isn't supported, just leave as nullable which should still work
        console.log('Could not set cal_end_date NOT NULL automatically, leaving nullable');
      }
      console.log('cal_end_date column added to wb_calendar');
    } else {
      console.log('cal_end_date already exists');
    }
    process.exit(0);
  } catch (e) {
    console.error('add_cal_end_date error:', e);
    process.exit(1);
  }
})();
