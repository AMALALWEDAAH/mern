const { User } = require('../models/user.model');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

    module.exports.register = async function(req, res) {
        try{
        // const { firstName, lastName, email, password,confirmPassword } = req.body;
        const user = await User.create(req.body)
        res.json(user)
        } catch(err){
            console.log(err);
            res.status(400).json(err)
        }
    }

    module.exports.login = async function(req, res) {
        try{
        const user = await User.findOne({ email: req.body.email });
        if (user === null) {
            return res.sendStatus(400);
        }
        const correctPassword = await bcrypt.compare(req.body.password, user.password);
        if (!correctPassword) {
                return res.sendStatus(400);
            }
        const payload = {
            userId: user.id
        }
        const key = process.env.SECRET_KEY
        const token = jwt.sign(payload, key)
        res.json({userToken: token})
        } catch(err){
            res.sendStatus(400);
        }
    }
    module.exports.getAllUsers = async function(req, res){
        const users = await User.find()
        res.json(users)
    }

    // Login out method -----------------------
    // logout: (req, res) => {
    //     res.clearCookie('usertoken');
    //     res.sendStatus(200);
    // }


