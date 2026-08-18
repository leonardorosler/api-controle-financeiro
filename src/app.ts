import express from "express"
import { prisma } from "./lib/prisma.js"

const app = express()

app.get("/", (req, res) => {
    res.send("API de controle financeiro")
})

app.get("/usuarios", async(req,res)=>{
   const usuarios = await prisma.usuario.findMany()
   res.json(usuarios) 
})

export { app }