import { Module } from '@nestjs/common';
import { PoliciesService } from './policies.service';
import { PoliciesController } from './policies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Policy } from './entities/policy.entity';

@Module({
  controllers: [PoliciesController],
  providers: [PoliciesService],
  imports: [
    TypeOrmModule.forFeature([Policy])
  ]
})
export class PoliciesModule {}
