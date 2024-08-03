import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Image } from "./image.entity";
import { Rating } from "./rating.entity";
import { VariantDescription } from "./variant-description.entity";

@Schema()
export class Inventory {
    @Prop()
    name: string;
    @Prop()
    category: string;
    @Prop()
    description: string;
    @Prop()
    ratings: [Rating];
    @Prop()
    variants: [{
        mrp: number;
        quantity: number;
        images: [Image];
        sizes: [string];
        details: [VariantDescription];
    }]
}

export const InventorySchema = SchemaFactory.createForClass(Inventory);