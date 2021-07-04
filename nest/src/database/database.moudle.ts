import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://classesd:dM004j5FXvT33GDl@cluster0.yfbmb.mongodb.net/nest?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
      },
    ),
  ],
  controllers: [],
  providers: [],
})
export class DatabaseModule {}
