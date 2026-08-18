import express from "express"
import { prisma } from "./lib/prisma.js"
import { usuariosRoutes } from "./routes/usuarios.routes.js"

const app = express()
app.use(express.json())

app.get("/", (req, res) => {
    res.send("API de controle financeiro")
})

app.use("/usuarios", usuariosRoutes)

export { app }