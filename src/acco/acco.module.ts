import { Module } from '@nestjs/common';
import { AccoService } from './services/acco.service';
import { AccoController } from './controllers/acco.controller';
// import { UserSvcModule } from '../user-svc/user-svc.module';

@Module({
  imports: [],
  controllers: [AccoController],
  providers: [AccoService],
  exports: [AccoService],
})
export class AccoModule {}
