const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userData = require('../data/userData');

exports.getUser = async (id) => {   
    const user = await userData.getUserById(id);

    // usar DTO depois
    if (!user) {
        return res.status(404).json({msg: "Usuário não encontrado"})
    }
}

// validando
exports.postUser = async (name, email, password, confirmpassword, req, res, next) => {
    // inserindo usuario no banco de dados
    try {
        if (!name) {
            return res.status(422).json({ msg: 'O nome é obrigatório' });
        }
    
        if (!email) {
            return res.status(422).json({ msg: 'O email é obrigatório' });
        }
    
        if (!password) {
            return res.status(422).json({ msg: 'O password é obrigatório' });
        }
    
        if (password !== confirmpassword) {
            return res.status(422).json({ msg: 'As senhas não conferem' });
        }
    
        // check if user exists
        const userExists = await User.findOne({ email: email });
    
        if (userExists) {
            return res.status(422).json({ msg: 'E-mail já registrado' });
        }
    
        // create password
        const salt = await bcrypt.genSalt(12);
        const passwordHash = await bcrypt.hash(password, salt);
    
        // response DTO
        res.status(201).json({msg: 'Usuário criado com sucesso'});

    } catch(error) {
        console.log(error);
        
        res.status(500).json({msg: error});
    }
}