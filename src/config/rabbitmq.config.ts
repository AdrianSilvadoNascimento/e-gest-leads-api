import { RmqOptions, Transport } from '@nestjs/microservices';

export const getRabbitMQConfig = (): RmqOptions => ({
  transport: Transport.RMQ,
  options: {
    urls: [process.env.RABBITMQ_URI || 'amqp://localhost:5672'],
    queue: 'leads_queue',
    queueOptions: {
      durable: false,
    },
    noAck: false,
  },
});
