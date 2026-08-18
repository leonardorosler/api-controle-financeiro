import { Router } from "express"
import * as usuariosController from '../controllers/usuarios.controller.js'

const usuariosRoutes = Router();

usuariosRoutes.get("/", usuariosController.listagem)

export { usuariosRoutes };