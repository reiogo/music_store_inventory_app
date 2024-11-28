const { Router } = require("express");
const indexRouter = Router();
const indexController = require("../controllers/indexController.js");

indexRouter.get("/", indexController.createHomePage)
indexRouter.get("/form", indexController.createForm)
indexRouter.post("/form", indexController.submitForm)
indexRouter.get("/details", indexController.createDetails)
indexRouter.get("/category", indexController.createCategories)
indexRouter.post("/delete", indexController.deleteInstrument)

module.exports = indexRouter;
