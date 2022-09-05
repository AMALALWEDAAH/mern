const User = require("../models/mongoose.model");

module.exports.findAllUsers = (req, res) => {
  User.find({})
    .then(allDaUsers => res.json( allDaUsers ))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleUser = (req, res) => {
	User.findOne({ _id: req.params.iddd })
		.then(oneSingleUser => res.json( oneSingleUser ))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewUser = (req, res) => {
  User.create(req.body)
    .then(newlyCreatedUser => res.json({ user: newlyCreatedUser }))
    .catch(err => res.status(400).json(err));
};

module.exports.updateExistingUser = (req, res) => {
  User.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true })
    .then(updatedUser => res.json({ user: updatedUser }))
    .catch(err => res.status(400).json(err));
};

module.exports.deleteAnExistingUser = (req, res) => {
  User.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};
