import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { accoGrpcClientOptions } from './acco/protos/acco-grpc.option';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  await app.connectMicroservice(accoGrpcClientOptions);
  await app.startAllMicroservices();
}
bootstrap();
