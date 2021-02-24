class GenericResponse {
    constructor() {
        this.Message = '';
        this.StatusCode = 200;
        this.Result = null;
        this.IsSuccessful = true;
    }
}

module.exports = GenericResponse;