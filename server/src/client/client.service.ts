import {Model, ObjectId} from 'mongoose';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Client } from './schemas/client.shema';
import { CreateClientDto } from './dto/create-client.dto';
import {AddCaseDto} from "./dto/add-case.dto";
import { LogPasswdDto } from './dto/logPasswd-dto';

@Injectable()
export class ClientService{

    constructor(@InjectModel(Client.name) private ClientModel: Model<Client>) {}


    async create(CreateClientDto:CreateClientDto): Promise<Client>{
        let errorMesseng = [{}]
        //проверка уникальности логина user
        const existLogUser = await await this.ClientModel.find({login: CreateClientDto.login})
        if (existLogUser[0]){
            errorMesseng[0]['login'] ='This LOGIN already exist!' //добавляем ошибку в общий массив ошибок
        }

        //проверка уникальности тега user
        const existTegUser = await await this.ClientModel.find({teg: CreateClientDto.teg})
        if (existTegUser[0]){
            errorMesseng[0]['teg'] ='This TEG already exist!' //добавляем ошибку в общий массив ошибок
        }

        if ( Object.keys(errorMesseng[0]).length != 0) throw new BadRequestException(errorMesseng) // если хоть одна ошибка есть, пораждаем error

        const client = await this.ClientModel.create({...CreateClientDto})
        return client
    }


    async getAll():Promise<Client[]>{
        const clients = await this.ClientModel.find();
        return clients
    }

    async getOne(id:ObjectId):Promise<Client>{
        const client = await this.ClientModel.findById(id);
        return client
    }

    async delete(id:ObjectId):Promise<Client>{
        const client = await this.ClientModel.findByIdAndDelete(id);
        return client
    }
    //ищем user по логину и паролю
    async getOneLog(logPasswDto:LogPasswdDto):Promise<any[]>{
        const client = await this.ClientModel.find({login : logPasswDto.login, password: logPasswDto.password});
        return client
    }


    async update(id: ObjectId,dto: AddCaseDto):Promise<Client> {
        const client = await this.ClientModel.findById(id)
        client.list = dto.case;
        client.friends = dto.friend;
        await client.save();
        return client
    }
}