import { Observable } from 'rxjs';
import { GetUserRequest } from '../dtos/get-user-request.interface';
import { GetUserResponse } from '../dtos/get-user-response.interface';
import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { userGrpcClientOptions } from '../protos/user-grpc.option';
import { Client, ClientGrpc } from '@nestjs/microservices';

interface IUserService {
  getUser(data: GetUserRequest): Observable<GetUserResponse>;
}

@Injectable()
export class UserSvcService implements OnModuleInit {
  private logger = new Logger(UserSvcService.name);

  @Client(userGrpcClientOptions) private readonly client: ClientGrpc;
  private userService: IUserService;

  onModuleInit() {
    this.logger.debug(`UserSvcService.onModuleInit`);
    this.userService = this.client.getService<IUserService>('UserService');
  }

  async getUser(id: string): Promise<GetUserResponse> {
    const user: Observable<GetUserResponse> = this.userService.getUser({
      id: id,
    } as GetUserRequest);

    return new Promise((resolve, reject) => {
      user.subscribe({
        next: (getUserResponse: GetUserResponse) => {
          this.logger.debug(
            `getUser=${JSON.stringify(getUserResponse, null, 2)}`,
          );
          resolve(getUserResponse);
        },
        error: (err) => {
          this.logger.error(`err=${JSON.stringify(err, null, 2)}`);
          reject(err);
        },
      });
    });
  }
}
