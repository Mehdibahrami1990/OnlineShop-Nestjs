import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class BlogSchema extends Document {
  @Prop()
  title: string;
  @Prop()
  content: string;
}
export const blogSchema = SchemaFactory.createForClass(BlogSchema);
