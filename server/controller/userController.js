const userService = require('../service/userService');

exports.getUser = async (req, res, next) => {

    const id = req.params.id;

    const response = userService.getUser(id);

    // autenticar com DTO

    res.status(200).json({response});

};

exports.postUser = async(req, res, next) => {

    const {name, email, password, confirmpassword} = req.body;

    const response = userService.postUser(name, email, password, confirmpassword);

    // response DTO aqui
    return response;
};