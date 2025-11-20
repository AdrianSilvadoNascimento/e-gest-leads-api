import { Injectable } from '@nestjs/common';

import { LeadModel } from '../models/dto/lead.model';
import { LeadsRepository } from '../repositories/abstract/leads.repository';
import { LeadEntity, PaginatedLeadEntity } from '../models/entity/lead.entity';

@Injectable()
export class LeadsService {
  constructor(private readonly leadsRepository: LeadsRepository) { }

  async create(lead: LeadModel): Promise<LeadEntity> {
    return await this.leadsRepository.create(lead)
  }

  async list(page: number, limit: number): Promise<PaginatedLeadEntity> {
    return await this.leadsRepository.list(page, limit)
  }
}
