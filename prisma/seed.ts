import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL não está definida no arquivo .env");
}

const adapter = new PrismaPg({
  connectionString: databaseUrl,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  const usuario = await prisma.usuario.upsert({
    where: {
      email: "teste@email.com",
    },
    update: {},
    create: {
      nome: "Usuário Teste",
      email: "teste@email.com",
      senhaHash: "hash_fake_para_estudo",
    },
  });

  const conta = await prisma.conta.create({
    data: {
      nome: "Conta Principal",
      saldo: 1000,
      usuarioId: usuario.id,
    },
  });

  const categoriaReceita = await prisma.categoria.create({
    data: {
      nome: "Salário",
      tipo: "RECEITA",
      usuarioId: usuario.id,
    },
  });

  const categoriaDespesa = await prisma.categoria.create({
    data: {
      nome: "Alimentação",
      tipo: "DESPESA",
      usuarioId: usuario.id,
    },
  });

  await prisma.transacao.createMany({
    data: [
      {
        descricao: "Salário do mês",
        valor: 3000,
        tipo: "RECEITA",
        data: new Date(),
        usuarioId: usuario.id,
        contaId: conta.id,
        categoriaId: categoriaReceita.id,
      },
      {
        descricao: "Compra no mercado",
        valor: 150,
        tipo: "DESPESA",
        data: new Date(),
        usuarioId: usuario.id,
        contaId: conta.id,
        categoriaId: categoriaDespesa.id,
      },
    ],
  });

  console.log("Seed executada com sucesso");
}

main()
  .catch((error) => {
    console.error("Erro ao executar seed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });