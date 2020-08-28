import express from "express";
import mongoose from "mongoose";

import cors from "cors";
import RabbitMQServer from "./queue/RabbitMQServer";
import Payment from "./schema/Payment";

const app = express();

app.use(express.json());
app.use(cors());

const consumer = async () => {
  const server = new RabbitMQServer("amqp://localhost:5672");
  await server.start();
  await server.consume("payment", (message) => {
    const conn = mongoose.createConnection(
      "mongodb://localhost:27017/challenge-n3urons",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    const PaymentModel = conn.model("Payment", Payment);
    const paymentObject = JSON.parse(message.content.toString());
    const paymentData = new PaymentModel(paymentObject);

    paymentData.save(); // works

    return console.log(" Hora do shoow pouuaa " + message.content.toString());
  });
};

consumer();

export default app;
