const db = require("../db/queries");
const links = [
  { href: "/", text: "Home" },
  { href: "/form", text: "Form"}
];

async function createHomePage (req, res) {
  const instruments = await db.getInstruments();
  res.render("index", { 
    title: "Instruments Inventory",
    links: links,
    instruments: instruments
  });
}

async function createForm (req, res) {
  const categories = await db.getCategories();
  res.render("form", {
    title: "Form",
    links: links,
    categories: categories
  });
}

async function submitForm (req, res) {
  const username = req.body.username
  const instrument = req.body.instrument
  const maker = req.body.maker
  const price = req.body.price
  const category = req.body.category
  await db.insertFormValues(username, instrument, maker, price, category);
  res.redirect("/");
}

async function createDetails (req, res) {
  const { id } = req.query;
  const instrument = await db.getInstrumentById(id);
  res.render("details", {
    title: "Details",
    links: links,
    instruments: instrument
  });
}

async function createCategories (req, res) {
  const categories = await db.getCategories();
  const { category } = req.query;
  const instruments = await db.getInstrumentByCategory(category);
  res.render("category", {
    title: "Categories",
    links: links,
    categories: categories,
    instruments: instruments
  });

}

async function deleteInstrument (req, res) {
  const { id } = req.query;
  await db.inventoryDeleteInstrument(id)
  res.redirect("/");
}

module.exports = {
  createForm,
  createHomePage,
  submitForm,
  createDetails,
  createCategories,
  deleteInstrument
};
