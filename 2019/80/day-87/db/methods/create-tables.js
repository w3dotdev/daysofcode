const createTables = async db => {
  try {
    await db.schema.createTable('users', function (table) {
      table.increments().primary();
      table.string('name');
    });

    await db.schema.createTable('notebook', function (table) {
      table.increments().primary();
      table.timestamp('createdAt')
      table.string('note');
      table.integer('userId').references('id').inTable('users')
    });

  } catch(e){
    console.log('Banco de dados já existe!', e);
  }
}

export default createTables;
