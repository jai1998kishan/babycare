const Router = require("express").Router()

const MainRouter = require("./MainRoutes")
const AdminRouter = require("./AdminRoutes")
const {errorPage} = require("../controllers/main")

Router.use("/",MainRouter)
Router.use("/admin",AdminRouter)
Router.get("/*",errorPage)

module.exports = Router