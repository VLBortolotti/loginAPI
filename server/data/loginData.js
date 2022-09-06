const userModel = require('../models/User');
const database = require('../infra/database');

database.connect();

exports.findUser = async (email) => {
    const response = await userModel.findOne({ email: email });

    return response;
}