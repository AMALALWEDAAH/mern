const { Pirate } = require('../models/pirates.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
module.exports.createPirate = (request, response) => {
    // const { name } = request.body;
    Pirate.create(request.body)
        .then(pirate => response.json(pirate))
        .catch(err => response.status(400).json(err));
}
module.exports.findAllPirates = (request, response) => {
    Pirate.find({}).sort({ timestamps: 1 } )
        .then(pirate => response.json(pirate))
        .catch(err => response.json(err));
}
module.exports.getPirate = (request, response) => {
    Pirate.findOne({ _id: request.params.id })
        .then(pirate => response.json(pirate))
        .catch(err => response.json(err))
}
module.exports.updatePirate = (request, response) => {
    Pirate.findOneAndUpdate({_id: request.params.id}, request.body,{ runValidators: true })
        .then(updatedpirate => response.json(updatedpirate))
        .catch(err => response.status(400).json(err))
}
module.exports.deletePirate = (request, response) => {
    Pirate.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}

