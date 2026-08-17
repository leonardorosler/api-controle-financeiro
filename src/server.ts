import express from "express";
import { prisma } from "./lib/prisma.js";

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("API de Controle Financeiro");
});

app.get("/usuarios", async (req, res) => {
    const usuarios = await prisma.usuario.findMany();

    res.json(usuarios)
})

app.listen(PORT, () => {
  console.log(`Servidor rodando no link: http://localhost:${PORT}`)
});