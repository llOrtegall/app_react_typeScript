import User from '../models/user.model.js';

export const register = async (req, res) => {
  const { email, password, username } = req.body;

  try {
    //TODO: Crea el usuario pero aun no lo guarda en la bd
    const newUser = new User({
      username,
      email,
      password
    })

    //TODO: Guardan el usuario en la bd
    await newUser.save()
    res.send('Registrando...');

  } catch (error) {
    console.log(error.message)
  }


}

export const login = (req, res) => {
  res.send('login')
}