const {Test}=require('../models/test.model');
module.exports.index = (request, response) => {
    response.json({
       message: "Hello World"
    });
}

module.exports.create=(request,response)=>{
    const {title,price,description}=request.body;
    Test.create({
        title,price,description
    })
    .then(test=>response.json(test))
    .catch(err=>response.json(err))
}

module.exports.getAllElements = (request, response) => {
    Test.find({})
    .then(test=>response.json(test))
    .catch(err=>response.json(err))
}