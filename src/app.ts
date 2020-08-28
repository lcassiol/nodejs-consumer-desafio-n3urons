import express from "express";

import cors from "cors";
import RabbitMQServer from "./queue/RabbitMQServer";

const app = express();

app.use(express.json());
app.use(cors());

const consumer = async () => {
  const server = new RabbitMQServer("amqp://localhost:5672");
  await server.start();
  await server.consume("payment", (message) =>
    console.log(" Hora do shoow pouuaa " + message.content.toString())
  );
};

consumer();

export default app;
