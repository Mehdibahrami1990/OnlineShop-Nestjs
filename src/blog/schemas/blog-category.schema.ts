import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class BlogCategorySchema extends Document {
  @Prop()
  title: string;
  @Prop()
  content: string;
}
export const blogCategorySchema =
  SchemaFactory.createForClass(BlogCategorySchema);
