import express from "express";
import mongoose from "mongoose";

import cors from "cors";
import RabbitMQConfig from "./config/RabbitMQ";
import QueueConfig from "./config/Queue";
import MongoDbConfig from "./config/MongoDb";
import RabbitMQServer from "./queue/RabbitMQServer";
import IPayment from "./interfaces/IPayment";
import Payment from "./schema/Payment";

const app = express();

app.use(express.json());
app.use(cors());

const consumer = async () => {
  const server = new RabbitMQServer(RabbitMQConfig.url);
  await server.start(QueueConfig.ConsumerQueue, QueueConfig.ReplyQueue);
  await server.consume(QueueConfig.ConsumerQueue, (message) => {
    console.log("Ordem de pagamento recebida 💸💸💸");

    const conn = mongoose.createConnection(MongoDbConfig.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const PaymentModel = conn.model(MongoDbConfig.schema, Payment);
    const paymentObject = JSON.parse(message.content.toString()) as IPayment;
    const paymentData = new PaymentModel(paymentObject);

    paymentData.save();

    server.publishInQueue(
      QueueConfig.ReplyQueue,
      JSON.stringify(paymentObject.order_id)
    );
  });
};

consumer();

export default app;
