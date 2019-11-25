import { ConnectionOptions } from 'typeorm';
import * as path from 'path';
import * as c from 'config';
const DB = c.get('DB');
const config: ConnectionOptions = {
  type: 'postgres',
  host: DB.HOST,
  port: DB.PORT,
  username: DB.USERNAME,
  password: DB.PASSWORD,
  database: DB.DATABASE,
  entities: [path.resolve(__dirname, './entities/**/*.entity{.ts,.js}')],
  synchronize: false,
  migrationsRun: true,
  logging: true,
  migrations: [path.resolve(__dirname, './migrations/**/*{.ts,.js}')],
  cli: {
    migrationsDir: path.resolve(__dirname, './migrations')
  }
};

export = config;
