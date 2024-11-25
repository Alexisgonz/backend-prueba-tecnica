import { registerAs } from "@nestjs/config";

export default registerAs('jwt-config', () => ({
    secret: 'secretKey',
    signOptions: { expiresIn: '1h' },
  }));