import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserSvcModule } from './user-svc/user-svc.module';
import { AccoModule } from './acco/acco.module';

@Module({
  imports: [UserSvcModule, AccoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
