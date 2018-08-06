const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const keys = require('../config/keys');
const errorHandler = require('../utils/errorHandler');

module.exports.login = async (req,res)=>{
    //Login
    const tempUser = await User.findOne({email: req.body.email});
    if(tempUser){
        // User is found
        const passwordResult = bycrypt.compareSync(req.body.password,tempUser.password);
        if(passwordResult){
            //Make token
            const token = jwt.sign({
                email:tempUser.email,
                userId: tempUser._id
            },keys.jwt, {expiresIn: 60*60});

            res.status(200).json({
                token: `Bearer ${token}`
            });

        } else {
            res.status(401).json({
                message: 'Вы ввели неверный пароль. Попробуйте еще раз.'
            })
        }


    } else{
        // User not found
        res.status(404).json({
            message: 'Пользовательс таким email не найден. Проверьте правильность email.'
        })

    }
}

module.exports.reg = async (req,res)=>{
    // Find in DB email
    const tempUser = await User.findOne({email: req.body.email});
    if (tempUser){
        res.status(409).json({
            message: 'Такой email уже занят. Попробуйте другой!'
        })
    }
    else {
        const salt = bycrypt.genSaltSync(10);
        const password = req.body.password;

        const user = new User({
            email: req.body.email,
            password: bycrypt.hashSync(password,salt)
        });

        try{
            await user.save();
            res.status(201).json(user);
        } catch(e){
            // Обработать ошибку
            errorHandler(res,e);
        }
        

    }
}