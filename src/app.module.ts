import { Module } from '@nestjs/common';
import { PoliciesModule } from './policies/policies.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot(),
    PoliciesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
