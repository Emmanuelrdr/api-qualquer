import Fastify, { FastifyInstance } from "fastify";
import chalk from "chalk";

const fastify: FastifyInstance = Fastify();
const port: number = 8080;
const host: string = "0.0.0.0";

fastify.get("/", async (request, reply) => {
  return { message: "API de utilidades feita para discord"} 
});
fastify.get("/ping", async (request, reply) => {
  reply.send({ message: "pong"})
});

fastify.listen({ port, host }, () => {
  console.log(chalk.green("Server está funcionando!"))
});

