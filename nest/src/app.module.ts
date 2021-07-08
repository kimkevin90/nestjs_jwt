import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './core/middleware';
import { CustomerModule } from './customer/customer.module';
import { DatabaseModule } from './database/database.moudle';
import { DatabaseMysqlModule } from './database/database.mysqlmodule';
import { TaskModule } from './task-module/task-module';
import { UserModule } from './user/user.module';

// @Module({
//   // imports: [TaskModule, DatabaseModule, CustomerModule],
//   imports: [TaskModule, DatabaseMysqlModule, UserModule],
//   controllers: [AppController],
//   providers: [AppService],
// })
@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
// export class AppModule {}
