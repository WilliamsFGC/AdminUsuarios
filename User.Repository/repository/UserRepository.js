const { TextUtilities } = require('../../User.Utilities/Text.Utilities/Text.Utilities');

const utilities = new TextUtilities();

const mongoose = require('mongoose');

// Esquema del usuario
const UserSchema = new mongoose.Schema({
    Nombre: String,
    UserName: String,
    Contrasena: String
});
// definir el esquema al modelo del usuario
const UserModel = mongoose.model('User', UserSchema);

class UserRepository {

    constructor() {
        mongoose.connect('mongodb://localhost/UserAdmin', { useNewUrlParser: true, useUnifiedTopology: true });
        this.Connection = mongoose.connection;
        this.Connection.on('error', console.error.bind(console, 'connection error:'));
        this.Connection.once('open', console.error.bind(console, 'database connected'));
    }

    RegisterUser = async (userDto) => {
        const newUser = new UserModel({
            Nombre: userDto.Nombre,
            UserName: userDto.UserName,
            Contrasena: userDto.Contrasena
        });
        const result = await newUser.save();
        return result;
    }

    GetUsers = async () => {
        const array = await UserModel.find({}, { _id: 1, Nombre: 1, UserName: 1 });
        return array;
    }

    EditUser = async (user) => {
        const result = await UserModel.updateOne({ _id: user._id }, { Nombre: user.Nombre, UserName: user.UserName });
        const response = true;
        return response;
    }

    Login = async (userLogin) => {
        const userFind = await UserModel.find({ UserName: userLogin.Usuario, Contrasena: userLogin.Contrasena });
        return userFind;
    }

    GetUserByParams = async (userSearch) => {
        const filter = {};
        if (userSearch.Nombre !== "" && userSearch.Nombre !== undefined) {
            userSearch.Nombre = utilities.ReplaceAcentMark(userSearch.Nombre);
            const regexName = new RegExp(`${userSearch.Nombre}`, 'i');
            filter.Nombre = regexName;
        }
        const users = await UserModel.find(filter, { _id: 1, Nombre: 1, UserName: 1 });
        return users;
    }
}

module.exports = { UserRepository };