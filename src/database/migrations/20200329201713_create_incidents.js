// Up é o método responsável pela criação da tabela

exports.up = function(knex) {
  return knex.schema.createTable("incidents", function(table) {
    table.increments();

    table.string("title").notNullable();
    table.string("description").notNullable();
    table.decimal("value").notNullable();
    
    table.string('ong_id').notNullable(); // relacionamento entre tabelas
    table.foreign('ong_id').references('id').inTable('ongs'); // FK de relacionamento
  });
};

// Down é o rollback (responsável pelo delete da tabela)
exports.down = function(knex) {
  return knex.schema.dropTable("incidents");
};

// npx knex migrate:make create_ongs - criaa migration
// npx knex migrate:latest - executa a última migration
// npx knex - lista todos os comandos
// npx knex migrate:rollback - desfaz a ultima migration executada