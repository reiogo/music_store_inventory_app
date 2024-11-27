const pool = require("./pool.js");

async function getInstruments() {
  const { row } = await pool.query("SELECT * FROM instrument_inventory;");
  return row
}

module.exports = {
  getInstruments
};
