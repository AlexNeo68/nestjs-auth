import { Module } from '@nestjs/common';
import { HashingService } from './services/hashing.service';
import { BcryptService } from './services/bcrypt.service';

@Module({
  providers: [{ provide: HashingService, useClass: BcryptService }],
})
export class IamModule {}
