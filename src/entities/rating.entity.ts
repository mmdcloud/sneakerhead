import { Prop, Schema } from "@nestjs/mongoose"
@Schema()
export class Rating {
    @Prop()
    user: string;
    @Prop()
    date: string;
    @Prop()
    rating: number;
    @Prop()
    description: string;
}