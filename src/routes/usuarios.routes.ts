import { Router } from "express";
import { prisma } from "../lib/prisma.js";

const usuariosRoutes = Router();

usuariosRoutes.get("/", async (req, res)=>{
    const usuarios = await prisma.usuario.findMany()
    res.json(usuarios)
})

export { usuariosRoutes };