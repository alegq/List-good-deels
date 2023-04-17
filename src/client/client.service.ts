import { Model } from 'mongoose';
import {Injectable} from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Client } from './schemas/client.shema';

@Injectable()
export class ClientService{

    constructor(@InjectModel(Client.name) private catModel: Model<Client>) {}


    async create(){

    }

    async getAll(){

    }

}