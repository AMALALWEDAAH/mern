const {Person}=require('../models/person.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    })
};

module.exports.createPerson = (request, response) => {
    const{name,img,num,catchs}=request.body;
    Person.create({
        name,img,num,catchs
    })
    .then(person=>response.json(person))
    .catch(err=>response.status(400).json(err))
};

module.exports.getAllPeople=(request,response)=>{
    Person.find({})
    .then(persons=>response.json(persons))
    .catch(err=>response.json(err))
};

module.exports.getPerson = (request, response) => {
    Person.findOne({_id:request.params.id})
        .then(person => response.json(person))
        .catch(err => response.json({ message: "Something went wrong", error: err }));
};

module.exports.deletePerson = (request, response) => {
    Person.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
};

