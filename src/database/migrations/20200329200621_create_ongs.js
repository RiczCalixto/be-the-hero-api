// Up é o método responsável pela criação da tabela

exports.up = function(knex) {
  return knex.schema.createTable("ongs", function(table) {
    table.string("id").primary();
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.string("whatsapp").notNullable();
    table.string("city").notNullable();
    table.string("uf", 2).notNullable();
  });
};

// Down é o rollback (responsável pelo delete da tabela)
exports.down = function(knex) {
  return knex.schema.dropTable("ongs");
};

// npx knex migrate:make create_ongs - criaa migration
// npx knex migrate:latest - executa a última migration