// import {
//   MiddlewareConsumer,
//   Module,
//   NestModule,
//   RequestMethod,
// } from '@nestjs/common';
// import { LoggerMiddleware } from './middleware';
// import { UserController } from './user.controller';
// import { UserService } from './user.service';

// @Module({
//   imports: [],
//   controllers: [UserController],
//   providers: [UserService],
//   exports: [UserService],
// })
// export class UserModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer
//       .apply(LoggerMiddleware)
//       .exclude(
//         { path: 'users', method: RequestMethod.GET },
//         { path: 'cats', method: RequestMethod.POST },
//         'cats/(.*)',
//       )
//       .forRoutes(UserController);
//     // .forRoutes({ path: 'cats', method: RequestMethod.POST });
//   }
// }
