import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { LeadsModule } from './domain/leads/leads.module';
import { NotificationsModule } from './notifications/notifications.module';

import { PrismaService } from './database/prisma.service';

import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    LeadsModule,
    NotificationsModule
  ],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule { }
