import { Test, TestingModule } from '@nestjs/testing';
import { CommentService } from '../comment.service';
import { CommentRepository } from '../comment.repository';
import { testComments, testResultComments } from './testData';

class CommentRepositoryMock {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getByPhotoIdSQL({
    photoId,
    userId,
    pagination,
  }: {
    photoId: number;
    userId: number;
    pagination: { offset?: number; limit?: number };
  }) {
    return testComments;
  }
}

describe('StudentService', () => {
  let commentService: CommentService;

  beforeEach(async () => {
    const CommentRepositoryProvider = {
      provide: CommentRepository,
      useClass: CommentRepositoryMock,
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommentService, CommentRepositoryProvider],
    }).compile();

    commentService = module.get<CommentService>(CommentService);
  });

  it('StudentService - should be defined', () => {
    expect(commentService).toBeDefined();
  });

  describe('getGpa', () => {
    it('should get student GPA', async () => {
      const comments = await commentService.getAll({
        userId: 1,
        input: { photoId: 1, pagination: { limit: 20, offset: 0 } },
      });
      expect(comments).toEqual(testResultComments);
    });
  });
});
