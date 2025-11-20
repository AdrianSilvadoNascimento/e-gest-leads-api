import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { LeadsModule } from './domain/leads/leads.module';

import { PrismaService } from './database/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    LeadsModule
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule { }
