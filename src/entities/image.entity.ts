import { Prop, Schema } from "@nestjs/mongoose"
@Schema()
export class Image {    
    @Prop()
    url: string;    
}