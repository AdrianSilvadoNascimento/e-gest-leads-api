import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';

import { LeadsService } from '../services/leads.service';

import { LeadEntity, PaginatedLeadEntity } from '../models/entity/lead.entity';
import { LeadModel } from '../models/dto/lead.model';

@Controller('leads')
export class LeadsController {
  constructor(private readonly service: LeadsService) { }

  @Post()
  async create(@Body() lead: LeadModel): Promise<LeadEntity> {
    return this.service.create(lead);
  }

  @Get()
  async list(@Query('page') page: string, @Query('limit') limit: string): Promise<PaginatedLeadEntity> {
    const parsedPage = parseInt(page);
    const parsedLimit = parseInt(limit);
    return this.service.list(parsedPage, parsedLimit);
  }

  @Delete('/:id')
  async delete(@Param('id') emailId: string): Promise<LeadEntity> {
    return this.service.delete(emailId);
  }
}
