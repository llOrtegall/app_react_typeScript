import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import { createAccessToken } from '../libs/jwt.js';

export const register = async (req, res) => {
  const { email, password, username } = req.body;

  try {
    //TODO: Crea el usuario pero aun no lo guarda en la bd

    // * encrpytando la contraseña del usuario
    const passwordHash = await bcrypt.hash(password, 10)

    const newUser = new User({
      username,
      email,
      password: passwordHash
    });

    //TODO: Guardan el usuario en la bd
    const userSaved = await newUser.save();
    const token = await createAccessToken({ id: userSaved._id });

    res.cookie('token', token)
    res.json({
      id: userSaved.id,
      username: userSaved.username,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt
    })

  } catch (error) {
    console.log(error.message)
  }
}

export const login = (req, res) => {
  res.send('login')
}