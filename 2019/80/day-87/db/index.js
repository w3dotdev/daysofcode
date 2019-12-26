import knex from 'knex';
import { promisify } from 'bluebird';
import methods from './methods/index';

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: './db.sqlite'
  },
  useNullAsDefault: true
});

const init = async () => {
  await methods.createTables(db);
  await methods.insertUsers(db);
  await methods.insertNotebook(db);

  return db.select('createdAt', 'note').from('notebook').then((rows) => console.log(rows));
}

init();

export default db;
