import express from "express"
import { usuariosRoutes } from "./routes/usuarios.routes.js"

const app = express()
app.use(express.json())

app.get("/", (req, res) => {
    res.send("API de controle financeiro")
})

app.use("/usuarios", usuariosRoutes)

export { app }