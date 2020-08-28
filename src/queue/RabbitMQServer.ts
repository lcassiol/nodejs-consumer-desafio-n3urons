import { Connection, Channel, connect, Message, ConsumeMessage } from "amqplib";

export default class RabbitMQServer {
  private conn: Connection;
  private channel: Channel;

  constructor(private uri: string) {}

  async start(queue: string, replyQueue: string): Promise<void> {
    this.conn = await connect(this.uri);
    this.channel = await this.conn.createChannel();
    this.channel.assertQueue(queue);
    this.channel.assertQueue(replyQueue);
  }

  async publishInQueue(queue: string, message: string) {
    return this.channel.sendToQueue(queue, Buffer.from(message));
  }

  async consume(queue: string, callback: (message: ConsumeMessage) => void) {
    return this.channel.consume(queue, (message) => {
      if (!!message) {
        callback(message);
        this.channel.ack(message);
      }
    });
  }
}
