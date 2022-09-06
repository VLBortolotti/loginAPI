require('dotenv').config();
const loginData = require('../data/loginData');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.login = async (email, password) => {
    try {
        // validando
        if (!email) {
            // DTO aqui
            return res.status(422).json({ msg: 'O email é obrigatório' });
        }

        if (!password) {
            return res.status(422).json({ msg: 'O password é obrigatório' });
        }

        const user = loginData.findUser(email);

        if (!user) {
            return res.status(404).json({ msg: 'Usuário não encontrado' });
        }

        // check if password matches
        const checkPassword = await bcrypt.compare(password, user.password);

        if (!checkPassword) {
            return res.status(422).json({ msg: 'Senha inválida' });
        }

        const secret = process.env.SECRET;
        const token = jwt.sign({
            id: user._id
        }, secret);

        res.status(200).json({msg:"Autenticado com sucesso", token});

    } catch (error) {

        console.log(error);
        res.status(500).json({msg: "Erro no servidor"});
    
    }
}
