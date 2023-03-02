import { Test, TestingModule } from '@nestjs/testing';
import { AccoService } from './acco.service';

describe('AccoService', () => {
  let service: AccoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccoService],
    }).compile();

    service = module.get<AccoService>(AccoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
