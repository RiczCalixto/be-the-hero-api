const express = require("express");
const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

routes.post("/sessions", SessionController.create);

routes.get("/ongs", OngController.list);
routes.post("/ongs", OngController.create);

routes.post("/incidents", IncidentController.create);
routes.get("/incidents", IncidentController.list);
routes.delete("/incidents/:id", IncidentController.delete);

routes.get("/profile", ProfileController.listSpecificOngIncidents);

module.exports = routes;
