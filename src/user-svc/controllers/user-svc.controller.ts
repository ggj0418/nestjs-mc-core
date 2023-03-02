import { Controller, Get, Logger, Param } from '@nestjs/common';
import { UserSvcService } from '../services/user-svc.service';
import { GetUserResponse } from '../dtos/get-user-response.interface';

@Controller('user-svc')
export class UserSvcController {
  private logger = new Logger(UserSvcController.name);

  constructor(private readonly userSvcService: UserSvcService) {}

  @Get(':id')
  async getUser(@Param() params): Promise<GetUserResponse> {
    this.logger.debug(`call: params=${JSON.stringify(params)}`);
    return this.userSvcService.getUser(params.id);
  }
}
