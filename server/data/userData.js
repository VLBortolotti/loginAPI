const userModel = require('../models/User');
const database = require('../infra/database');

database.connect();

exports.getUserById = async (id) => {
    const response = await userModel.findById(id, '-password');

    return response;
};

exports.postUser = async (name, email, passwordHash) => {
    // create user
    const user = new userModel({
        name, 
        email,
        password: passwordHash
    });

    const response = await user.save();
    return response;
}