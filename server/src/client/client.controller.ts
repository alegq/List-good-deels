import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { ObjectId } from 'mongoose';
import { AddCaseDto } from './dto/add-case.dto';
import { Client } from './schemas/client.shema';
import { AddCommand } from '@nestjs/cli/commands/add.command';
import { LogPasswdDto } from './dto/logPasswd-dto';

@Controller('/client')
export class ClientController {
  constructor(private clientServise: ClientService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() dto: CreateClientDto) {
    return this.clientServise.create(dto);
  }

  @Get()
  getAll() {
    return this.clientServise.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: ObjectId) {
    return this.clientServise.getOne(id);
  }

  @Post('/login')
  @UsePipes(new ValidationPipe())
  getOneLog(@Body() dto: LogPasswdDto) {
    return this.clientServise.getOneLog(dto);
  }

  @Delete(':id')
  delete(@Param('id') id: ObjectId) {
    return this.clientServise.delete(id);
  }

  @Put(':id')
  update(@Param('id') id: ObjectId, @Body() dto: AddCaseDto) {
    return this.clientServise.update(id, dto);
  }
}
