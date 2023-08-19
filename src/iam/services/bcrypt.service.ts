import { Injectable } from '@nestjs/common';
import { compare, genSalt, hash } from 'bcrypt';
import { HashingService } from 'src/iam/services/hashing.service';

@Injectable()
export class BcryptService extends HashingService {
  async hash(data: string | Buffer): Promise<string> {
    const salt = await genSalt();
    return await hash(data, salt);
  }
  async compare(data: string | Buffer, encrypted: string): Promise<boolean> {
    return await compare(data, encrypted);
  }
}
