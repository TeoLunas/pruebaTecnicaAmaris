import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreatePolicyDto } from './dto/create-policy.dto';
import { UpdatePolicyDto } from './dto/update-policy.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Policy } from './entities/policy.entity';
import { Repository } from 'typeorm';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Injectable()
export class PoliciesService {

  private readonly logger = new Logger('PoliciesService');

  constructor(
    @InjectRepository(Policy)
    private readonly policyRepository: Repository<Policy>
  ) { }

  async create(createPolicyDto: CreatePolicyDto) {
    try {
      const newPolicy = this.policyRepository.create(createPolicyDto);
      await this.policyRepository.save(newPolicy);
      this.logger.log("Nueva poliza creada correctamente");
      return newPolicy;
    } catch (error) {
      this.logger.error(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    try {
      const policies = await this.policyRepository.find({});
      this.logger.log(`Se han encontrado ${policies.length} polizas`);
      return policies;
    } catch (error) {
      this.logger.error(error);
    }
  }

  async findOne(id: string) {
    try {
      const policy = await this.policyRepository.findOneBy({ id });

      if (!policy)
        throw new NotFoundException('Poliza no encotrada');

      return policy;
    } catch (error) {
      this.logger.error(error);
    }

  }

  async update(id: string, updatePolicyDto: UpdatePolicyDto) {
    const policy = await this.policyRepository.preload({
      id: id,
      ...updatePolicyDto
    });

    if (!policy)
        throw new NotFoundException('Poliza no encotrada');

    try {
      await this.policyRepository.save(policy);
      return policy;
    } catch (error) {
      this.logger.error(error);
    }
  }
}
