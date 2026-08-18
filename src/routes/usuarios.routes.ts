import { Router } from "express";
import { prisma } from "../lib/prisma.js";
import { app } from "../app.js";

const usuariosRoutes = Router();

app.get("/", async (req, res)=>{
    const usuarios = await prisma.usuario.findMany()

    res.json(usuarios)
})

export { usuariosRoutes };