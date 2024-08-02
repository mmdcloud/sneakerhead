import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"

@Schema()
export class Order {
    @Prop()
    name: string;
    @Prop()
    age: number;
    @Prop()
    breed: string;
}
export const OrderSchema = SchemaFactory.createForClass(Order);