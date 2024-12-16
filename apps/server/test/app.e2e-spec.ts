import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/modules/app/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});

// postgres:
// id, text, createdAt, updatedAt, photoId, userId, parentId
//  1	"beee"	"2024-08-25 16:57:27.407431"	"2024-08-25 16:57:27.407431"	1	1
// 2	"beeeeee"	"2024-08-25 16:57:30.549841"	"2024-08-25 16:57:30.549841"	1	1	1
// 3	"this is flower"	"2024-08-25 17:00:13.117058"	"2024-08-25 17:00:13.117058"	1	1	2

// how get 20 comments where
