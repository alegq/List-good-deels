import {NestFactory} from "@nestjs/core"
import {AppModule} from "./app.module";


const start = async () => {
    try {

        const PORT = process.env.PORT || 3000;
        const app = await NestFactory.create(AppModule);



        const cors = require('cors');
        const corsOptions ={
            origin:'http://localhost:3001',
            credentials:true,            //access-control-allow-credentials:true
            optionSuccessStatus:200
        }
        app.use(cors(corsOptions));

        await app.listen(PORT, () => console.log(`sever started on PORT ${PORT}`))

    } catch (e) {
        console.log(e)
    }
}

start()