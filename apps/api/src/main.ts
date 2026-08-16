import "reflect-metadata";
import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import helmet from "helmet";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bodyParser: true });
  const webOrigin = process.env.WEB_ORIGIN ?? "http://localhost:3000";

  app.setGlobalPrefix("v1");
  app.enableCors({
    origin: webOrigin.split(",").map((origin) => origin.trim()),
    methods: ["GET", "POST", "PATCH"],
    allowedHeaders: ["Content-Type", "X-Internal-Api-Key", "X-Client-Id"],
    credentials: false,
  });
  app.use(helmet());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      stopAtFirstError: false,
    }),
  );

  await app.listen(process.env.PORT ?? 3001);
}

void bootstrap();
