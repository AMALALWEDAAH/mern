const PiratesController = require("../controllers/pirates.controller");
const UserController = require("../controllers/user.controller");
const { authenticate } = require("../middlewares/authjwt");

module.exports = function (app) {
  app.get("/api", PiratesController.index);
  app.post("/api/create", PiratesController.createPirate);
  app.get("/api/all", PiratesController.findAllPirates);
  app.get("/api/:id", PiratesController.getPirate);
  app.put("/api/:id/edit", PiratesController.updatePirate);
  app.delete("/api/:id/delete", PiratesController.deletePirate);
  app.post("/api/register", UserController.register);
  app.post("/api/login", UserController.login);
  // app.put("/api/logout", User.logout);
  app.get("/api/users", UserController.getAllUsers);
};
