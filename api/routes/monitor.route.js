const Router = require("express").Router;
const route = Router();
const ctrlMonitor = require("../controllers/monitor.controller")

route.get('/', ctrlMonitor.getAll )
route.post('/add', ctrlMonitor.add )
route.put('/update/:id', ctrlMonitor.update )
route.delete('/delete/:id', ctrlMonitor.remove )

module.exports = route;