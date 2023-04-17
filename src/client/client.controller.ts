import {Controller, Get} from "@nestjs/common";
//import {ClientService} from "./app.service";

@Controller('/client')
export class ClientController {

    //constructor(private appServise: ClientService){}
    create(){

    }

    @Get()
    getAll(){
        return 'New'
    }
}