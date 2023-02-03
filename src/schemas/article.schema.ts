import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document }  from 'mongoose';

export type ArticleDocument = Article & Document;

@Schema({
  timestamps: { createdAt: 'created', updatedAt: 'updated' },
})
export class Article {

    @Prop({ required: true })
    authorid: mongoose.Schema.Types.ObjectId;

    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    tags: string;

    @Prop({ required: true })
    status: number;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);