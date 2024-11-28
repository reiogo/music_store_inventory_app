const pool = require("./pool.js");

async function getInstruments() {
  const { rows } = await pool.query("SELECT * FROM instrument_inventory;");
  return rows;
}

async function insertFormValues(username, instrument, maker, price, category) {
  await pool.query("INSERT INTO instrument_inventory (username, instrument_name, maker_name, price, i_category) VALUES($1, $2, $3, $4, $5)", [ username, instrument, maker, price, category ]);
}

async function getInstrumentById(id) {
  const { rows } = await pool.query("SELECT * FROM instrument_inventory WHERE id = $1", [id]);
  return rows;
}

async function getInstrumentByCategory(category) {
  const { rows } = await pool.query(`
  SELECT * FROM instrument_inventory AS inv
    LEFT JOIN instrument_category AS cat
    ON i_category = category
    WHERE category = $1;
  `, [category]);
  return rows;
}

async function inventoryDeleteInstrument(id) {
  await pool.query("DELETE FROM instrument_inventory WHERE id = $1;", [id]);
}

async function getCategories() {
  const { rows } = await pool.query("SELECT * FROM instrument_category;");
  return rows

}

module.exports = {
  getInstruments,
  insertFormValues,
  getInstrumentById,
  getInstrumentByCategory,
  inventoryDeleteInstrument,
  getCategories
};
