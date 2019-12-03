// AVA is a test runner for Node.js with a concise API, detailed error output, embrace of new language features and process isolation that let you write tests more effectively.
// https://github.com/avajs
import test from 'ava';
import DateFromNow from './date-from-now';

test.before(t => {
  t.context.now = "2019/12/02 22:25:00";
  t.context.date = "2019/12/01 22:25:00";
  t.context.getDifference = (now, date) => ((new Date(now)).getTime() - new Date(date).getTime());
});

test.beforeEach(t => {
  t.context.dateFromNow = new DateFromNow();
});

test("dateFromNow.countDays", t => {
  const {dateFromNow, getDifference, now, date} = t.context;
  
  const difference = getDifference(now, date);
  t.is(dateFromNow.countDays(difference), 1);
});

test("dateFromNow.messageFormat", t => {
  const {dateFromNow, getDifference, now, date} = t.context;

  const difference = getDifference(now, date);
  t.is(dateFromNow.messageFormat(difference, dateFromNow.countDays(difference)), "Ontem");
});

test("dateFromNow.format", t => {
  const {dateFromNow, now} = t.context;

	t.is(dateFromNow.format(now, "2019/12/02 22:24:30"), "Agora mesmo");
	t.is(dateFromNow.format(now, "2019/12/02 22:23:30"), "1 minuto atrás");
	t.is(dateFromNow.format(now, "2019/12/02 21:23:30"), "1 hora atrás");
	t.is(dateFromNow.format(now, "2019/12/01 22:23:30"), "Ontem");
	t.is(dateFromNow.format(now, "2019/11/30 22:23:30"), "2 dias atrás");
	t.is(dateFromNow.format(now, "2018/12/01 22:23:30"), undefined);
}); 