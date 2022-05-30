const Router = require("express").Router;
const route = Router();
const ctrlLogin = require("../controllers/login.controller")

route.post('/', ctrlLogin.login)

module.exports = route;