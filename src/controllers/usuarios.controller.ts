import type { Request, Response } from "express";
import * as usuariosService from '../services/usuarios.service.js'

export async function listagem(req: Request, res: Response){
    try {
        const usuarios = await usuariosService.listar()
        res.json(usuarios)
        }
    catch(error){
        res.status(400).json(error)
    }
    }
