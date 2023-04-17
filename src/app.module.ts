import {Module} from "@nestjs/common";
import {ClientModule} from "./client/client.module";
import {MongooseModule} from "@nestjs/mongoose"

@Module({
    imports:[
        MongooseModule.forRoot('mongodb+srv://yalovik678:admin@cluster0.rdcg7zm.mongodb.net/?retryWrites=true&w=majority'),
        ClientModule
    ]
})
export class AppModule {

}
