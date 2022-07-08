import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppService', () => {
  let appService: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    appService = module.get<AppService>(AppService);
  });

  it('should be defined', () => {
    expect(appService).toBeDefined();
  });

  describe('getAll', () => {
    it('should be return array', () => {
      const result = appService.getAll();
      expect(result).toBeInstanceOf(Array);
    });
  });

  describe('getOne', () => {
    it('should be get one movie', () => {
      appService.create({
        name: 'test',
        age: 100,
      });
      const target = appService.getOne(1);
      expect(target).toBeDefined();
    });
  });

  describe('errpr', () => {
    it('should be catch error', () => {
      try {
        appService.getOne(888);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });
});
