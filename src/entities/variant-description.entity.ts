import { Prop, Schema } from "@nestjs/mongoose"
@Schema()
export class VariantDescription {
    @Prop()
    section: string;
    @Prop()
    details: string;
}