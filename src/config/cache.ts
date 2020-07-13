import { RedisOptions } from 'ioredis';

interface ICache {
  driver: 'redis';
  config: {
    redis: RedisOptions;
  };
}

export default {
  driver: 'redis',
  config: {
    redis: {
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_POST,
      password: process.env.REDIS_PASS,
    },
  },
} as ICache;
