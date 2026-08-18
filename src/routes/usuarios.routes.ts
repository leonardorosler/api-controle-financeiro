import { Router } from "express";git
import * as usuariosController from '../controllers/usuarios.controller.js'

const usuariosRoutes = Router();

usuariosRoutes.get("/", usuariosController.listagem)

export { usuariosRoutes };