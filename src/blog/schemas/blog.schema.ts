import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { BlogCategorySchema } from './blog-category.schema';

@Schema({ timestamps: true })
export class BlogSchema extends Document {
  @Prop()
  title: string;
  @Prop()
  content: string;
  @Prop()
  image: string;
  @Prop({
    type: Types.ObjectId,
    ref: BlogCategorySchema.name,
    required: true,
  })
  category: BlogCategorySchema;
}
export const blogSchema = SchemaFactory.createForClass(BlogSchema);
