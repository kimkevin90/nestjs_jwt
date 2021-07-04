import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entitiy/user.entity';
import { Customer } from './entitiy/customer.entitiy';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'project-tutorial.cxxqtzp2zobh.ap-northeast-2.rds.amazonaws.com',
      port: 3306,
      username: 'root',
      password: 'Dlawltjq!2',
      database: 'graphql',
      entities: [User, Customer],
      synchronize: true,
    }),
  ],
})
export class DatabaseMysqlModule {}
