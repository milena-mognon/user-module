/* eslint-disable @typescript-eslint/interface-name-prefix */
declare namespace NodeJS {
  export interface ProcessEnv {
    APP_SECRET: string;
    APP_WEB_URL: string;
    APP_API_URL: string;
    MAIL_DRIVER: string;
    MAIL_USER: string;
    MAIL_PASS: string;
    AWS_ACCESS_KEY_ID?: string;
    AWS_SECRET_ACCESS_KEY?: string;
    STORAGE_DRIVER: string;
    REDIS_HOST: string;
    REDIS_POST: string | number;
    REDIS_PASS: string | undefined;
  }
}
