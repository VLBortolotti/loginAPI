const loginService = require('../service/loginService');

exports.login = async (req, res, next) => {

    const {email, password} = req.body;

    const response = await loginService.login(email, password);

    // usar DTO aqui
};