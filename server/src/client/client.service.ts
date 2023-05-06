import {Model, ObjectId} from 'mongoose';
import {Injectable} from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Client } from './schemas/client.shema';
import { CreateClientDto } from './dto/create-client.dto';
import {AddCaseDto} from "./dto/add-case.dto";

@Injectable()
export class ClientService{

    constructor(@InjectModel(Client.name) private ClientModel: Model<Client>) {}


    async create(CreateClientDto:CreateClientDto): Promise<Client>{
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


    async update(id: ObjectId,dto: AddCaseDto):Promise<Client> {
        const client = await this.ClientModel.findById(id)
        client.list = dto.case;
        client.friends = dto.friend;
        await client.save();
        return client
    }
}