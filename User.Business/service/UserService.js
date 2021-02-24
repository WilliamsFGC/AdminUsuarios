const { UserRepository } = require('../../User.Repository/repository/UserRepository');
const GenericResponse = require('../../User.Entities/entities/GenericResponse');

const userRepository = new UserRepository();

class UserService {
    // Return Int
    RegisterUser = async (userDto) => {
        const result = await userRepository.RegisterUser(userDto);
        const response = new GenericResponse();
        response.Result = result;
        response.Message = 'Usuario guardado correctamente';
        return response;
    }

    GetUsers = async () => {
        const result = await userRepository.GetUsers();
        const response = new GenericResponse();
        response.Result = result;
        return response;
    }

    EditUser = async (user) => {
        const result = await userRepository.EditUser(user);
        const response = new GenericResponse();
        response.result = result;
        response.Message = 'Usuario editado correctamente';
        return response;
    }

    Login = async (user) => {
        const result = await userRepository.Login(user);
        const response = new GenericResponse();
        response.IsSuccessful = result.length > 0;
        if (!response.IsSuccessful) {
            response.Message = 'Usuario o contraseña incorrecto.';
        } else {
            response.Result = result;
            response.Message = `Bienvenido ${result[0].Nombre}`;
        }
        return response;
    }

    GetUserByParams = async (userSearch) => {
        const result = await userRepository.GetUserByParams(userSearch);
        const response = new GenericResponse();
        response.Result = result;
        return response;
    }
}

module.exports = { UserService };