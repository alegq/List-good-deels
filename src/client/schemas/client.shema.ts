import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ClientDocument = HydratedDocument<Client>;

@Schema()
export class Client {
    @Prop()
    name: string;

    @Prop()
    age: number;

}

export const ClientSchema = SchemaFactory.createForClass(Client);