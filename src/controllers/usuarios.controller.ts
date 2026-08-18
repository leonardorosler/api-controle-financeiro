import type { Request, Response } from "express";
import { prisma } from "../lib/prisma.js";

export async function listagem(req: Request, res: Response){
    try {
        const usuarios = await prisma.usuario.findMany()
        res.json(usuarios)
    } catch (error){
        res.status(400).json(error)
    };
}