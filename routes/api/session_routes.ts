import express from "npm:express@4.18.2"
import controller from "../controllers/sessions.ts"
const routes = express.Router()

// CREATE
routes.post("/tabs", controller.postSession)

// READ
routes.get("/tabs:id", controller.getSession)
routes.get("/tabs", controller.getSessions)

// UPDATE

// DELETE

export default routes
