// Route
const { Router } = require('express');
// Servicios
const { UserService } = require('../User.Business/service/UserService');

// Variables
const router = Router();
const prefix = '/api/user/';
const userService = new UserService();

router.get(`${prefix}`, (request, response, callback) => {
    const result = userService.GetUsers();
    return response.json(result);
});

router.post(`${prefix}RegisterUser`, async (request, response, callback) => {
    const result = await userService.RegisterUser(request.body);
    return response.json(result);
});

router.get(`${prefix}GetUsers`, async (request, response, callback) => {
    const result = await userService.GetUsers();
    return response.json(result);
});


router.put(`${prefix}EditUser`, async (req, res, callback) => {
    const response = await userService.EditUser(req.body);
    res.json(response);
});

router.post(`${prefix}Login`, async (req, res, callback) => {
    const response = await userService.Login(req.body);
    return res.json(response);
});

router.post(`${prefix}GetUserByParams`, async (req, res, callback) => {
    const result = await userService.GetUserByParams(req.body);
    return res.json(result);
});
// export
module.exports = router;