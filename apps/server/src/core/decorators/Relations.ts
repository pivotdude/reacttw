import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { getRelations } from 'src/utils/getRelations';

export const Relations = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): any => {
    const gqlExecutionContext = ctx.switchToHttp();
    // @ts-ignore
    const info = gqlExecutionContext.getArgs()[3];
    return getRelations(info);
  },
);
