const db = require("../db/queries");
const links = [
  { href: "/", text: "Home" },
];

async function getHomePage (req, res) {
  const instruments = await getInstruments();
  res.render("index", { 
    title: "Instruments Inventory",
    links: links,
    instruments: instruments
});
}

module.exports = {
  getHomePage
};
