const { PersonDto } = require('../dto/PersonDto');

class UserDto extends PersonDto {
    constructor(){
        super();
        this.Usuario = '';
        this.FechaCreacion = null;
    }
}

module.exports =  { UserDto };