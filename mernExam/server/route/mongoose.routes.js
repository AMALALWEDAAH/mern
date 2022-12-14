const UserController = require("../controllers/mongoose.controller");

module.exports = app => {
  app.get("/api/users/", UserController.findAllUsers);
  app.get("/api/users/:iddd", UserController.findOneSingleUser);
  app.put("/api/users/update/:id", UserController.updateExistingUser);
  app.post("/api/users/new", UserController.createNewUser);
  app.delete("/api/users/delete/:id", UserController.deleteAnExistingUser);
};
