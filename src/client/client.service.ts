import { Model } from 'mongoose';
import {Injectable} from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Client } from './schemas/client.shema';
import { CreateClientDto } from './dto/create-client.dto';

@Injectable()
export class ClientService{

    constructor(@InjectModel(Client.name) private ClientModel: Model<Client>) {}


    async create(CreateClientDto:CreateClientDto): Promise<Client>{
        const client = await this.ClientModel.create({...CreateClientDto,countClient:0})
        return client
    }

    async getAll():Promise<Client[]>{
        const clients = await this.ClientModel.find();
        return clients
    }

}