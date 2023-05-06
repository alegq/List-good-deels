import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ClientDocument = HydratedDocument<Client>;

@Schema()
export class Client {
    @Prop()
    login: string;

    @Prop()
    password: string;

    @Prop()
    name: string;

    @Prop()
    teg: string;

    @Prop()
    list: string[];

    @Prop()
    friends: string[];






}

export const ClientSchema = SchemaFactory.createForClass(Client);