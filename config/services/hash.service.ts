import * as bcrypt from 'bcrypt';

export class HashService {
  static async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10); // Usa 10 como salt rounds
  }

  static async comparePassword(
    password: string,
    hash: string,
  ): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }
}
