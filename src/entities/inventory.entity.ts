import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
@Schema()
export class Inventory {
    @Prop()
    name: string;
    @Prop()
    age: number;
    @Prop()
    breed: string;
}
export const InventorySchema = SchemaFactory.createForClass(Inventory);