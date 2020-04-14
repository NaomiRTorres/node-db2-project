
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments('id');

     //vin
     tbl.string('vin', 200).notNullable().unique().index();

     //make
     tbl.string('make').notNullable();

     //model
     tbl.string('model').notNullable();

     //mileage
     tbl.integer('mileage').notNullable();

     //transmission
     tbl.string('transmission type').notNullable();

     //title
     tbl.string('title status');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
