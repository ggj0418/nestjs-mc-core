import { Global, Module } from '@nestjs/common';
import { UserSvcController } from './controllers/user-svc.controller';
import { UserSvcService } from './services/user-svc.service';
import { AccoModule } from '../acco/acco.module';

@Module({
  controllers: [UserSvcController],
  providers: [UserSvcService],
  exports: [UserSvcService],
})
export class UserSvcModule {}
