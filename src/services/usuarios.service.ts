import { prisma } from "../lib/prisma.js";

export async function listar(){
    return prisma.usuario.findMany()
}
