import { NestApplication, NestFactory } from "@nestjs/core";
import { Transport, MicroserviceOptions } from "@nestjs/microservices";
import { getRabbitMQConfig } from "./config/rabbitmq.config";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import job from "./cron/keep-alive";

async function bootstrap() {
  const app = await NestFactory.create<NestApplication>(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix("api/v1");

  app.connectMicroservice<MicroserviceOptions>(getRabbitMQConfig());

  await app.startAllMicroservices();

  if (process.env.NODE_ENV !== 'dev') job.start();

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
