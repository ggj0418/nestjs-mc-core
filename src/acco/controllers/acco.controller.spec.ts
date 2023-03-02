import { Test, TestingModule } from '@nestjs/testing';
import { AccoController } from './acco.controller';
import { AccoService } from '../services/acco.service';

describe('AccoController', () => {
  let controller: AccoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccoController],
      providers: [AccoService],
    }).compile();

    controller = module.get<AccoController>(AccoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
