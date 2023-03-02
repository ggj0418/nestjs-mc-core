import { Controller, Get, Logger } from '@nestjs/common';
import { AccoService } from '../services/acco.service';
import { GrpcMethod } from '@nestjs/microservices';
import { FindAllByOwnerUidRequest } from '../dtos/find-all-by-owner-uid.request';
import { FindAllByOwnerUidResponse } from '../dtos/find-all-by-owner-uid.response';

@Controller('acco')
export class AccoController {
  private logger = new Logger(AccoController.name);

  constructor(private readonly accoService: AccoService) {}

  @GrpcMethod('AccoService', 'FindAllByOwnerUid')
  async findAllByOwnerUid(
    data: FindAllByOwnerUidRequest,
  ): Promise<FindAllByOwnerUidResponse> {
    this.logger.log(
      `Acco Controller findAllByOwnerUid: ${JSON.stringify(data, null, 2)}`,
    );
    return await this.accoService.findAllByOwnerUid(data.ownerUid);
  }

  @Get()
  findAll() {
    return this.accoService.findAll();
  }
}
