import {Body, Controller, Get, Post} from "@nestjs/common";
import {ClientService} from "./client.service";
import {CreateClientDto} from "./dto/create-client.dto";

@Controller('/client')
export class ClientController {

    constructor(private clientServise: ClientService){}

    @Post()
    create(@Body() dto: CreateClientDto){
        return this.clientServise.create(dto)
    }

    @Get()
    getAll(){
        return this.clientServise.getAll()
    }
}