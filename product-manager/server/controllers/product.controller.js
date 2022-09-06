const {Product}=require('../models/product.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    })
};

module.exports.createPoduct = (request, response) => {
    const{title,desc,price}=request.body;
    Product.create({
        title,desc,price
    })
    .then(product=>response.json({product:product}))
    .catch(err=>response.status(400).json(err))
};

module.exports.getAllProducts=(request,response)=>{
    Product.find({})
    .then(products=>response.json(products))
    .catch(err=>response.json(err))
};

module.exports.getProduct = (request, response) => {
    Product.findOne({_id:request.params.id})
        .then(product=> response.json(product))
        .catch(err => response.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteProduct = (request, response) => {
    Product.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
};

module.exports.updateProduct = (request, response) => {
    Product.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedProduct => response.json({product:updatedProduct}))
        .catch(err => response.status(400).json(err));
}

