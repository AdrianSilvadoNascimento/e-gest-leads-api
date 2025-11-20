import { Module } from '@nestjs/common';
import { LeadsService } from './services/leads.service';
import { PrismaService } from '../../database/prisma.service';

import { LeadsRepo } from './repositories/repo/leads.repository';
import { LeadsRepository } from './repositories/abstract/leads.repository';

import { LeadsController } from './controllers/leads.controller';

@Module({
  controllers: [LeadsController],
  providers: [PrismaService, LeadsService, { provide: LeadsRepository, useClass: LeadsRepo }],
  exports: [LeadsService, { provide: LeadsRepository, useClass: LeadsRepo }],
})
export class LeadsModule { }
