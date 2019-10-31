import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/appModule';
import session = require('express-session');
import * as passport from 'passport';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    credentials: true
  });
  app.setGlobalPrefix('api/v1');
  app.use(
    session({
      secret: 'CHANGEDME',
      name: 'session',
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 24 * 60 * 60 * 1000,
        secure: true,
        path: '/',
        httpOnly: true,
        sameSite: false
      }
    }),
  );
  app.use(cookieParser());
  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(1998);
}
bootstrap();
