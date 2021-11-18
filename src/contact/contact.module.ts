import { Module } from '@nestjs/common';
import { ContactService } from './service/contact.service';
import { ContactController } from './controller/contact.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactEntity } from './model/contact.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ContactEntity])],
  providers: [ContactService],
  controllers: [ContactController]
})
export class ContactModule {}
