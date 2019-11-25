import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AuthModule } from '../src/modules/authModule';

// It is your function which does something.
function addTwoNumbers(a: number, b: number) {
  return a + b;
}

describe('Function addTwoNumbers', () => {

  // it is your test which check about correction of your function
  it('should add two numbers', () => {
    const a: number = 2;
    const b: number = 3;
    const expected = a + b;
    const actual = addTwoNumbers(a, b);
    expect(expected).toEqual(actual); // Output Pass
  });

  // it is your test which check about correction of your function
  it('should fails because function add two numbers', () => {
    const a: number = 2;
    const b: number = 3;
    const expected = a - b;
    const actual = addTwoNumbers(a, b);
    expect(expected).not.toEqual(actual); // Output Pass
  });

  // let app;
  //
  // beforeEach(async () => {
  //   const moduleFixture: TestingModule = await Test.createTestingModule({
  //     imports: [AuthModule],
  //   }).compile();
  //
  //   app = moduleFixture.createNestApplication();
  //   await app.init();
  // });
  //
  // it('/ (GET)', () => {
  //   return request(app.getHttpServer())
  //     .get('/')
  //     .expect(200)
  //     .expect('Hello World!');
  // });
});
