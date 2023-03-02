import { Injectable, Logger } from '@nestjs/common';
import { FindAllByOwnerUidResponse } from '../dtos/find-all-by-owner-uid.response';

@Injectable()
export class AccoService {
  private logger = new Logger(AccoService.name);

  findAll() {
    return `This action returns all acco`;
  }

  async findAllByOwnerUid(uid: string): Promise<FindAllByOwnerUidResponse> {
    this.logger.log(
      `In Acco Service, getUserResponse=${JSON.stringify(uid, null, 2)}`,
    );

    return new Promise((resolve) => {
      resolve({
        accoIds: ['1', '2'],
      } as FindAllByOwnerUidResponse);
    });
  }
}
