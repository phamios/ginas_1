import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
 
export type UserDocument = User & Document;

@Schema({
  timestamps: { createdAt: 'created', updatedAt: 'updated' },
})
export class User {

  @Prop({ required: true })
  authorid: {
    type    : mongoose.Schema.Types.ObjectId,
    default : mongoose.Types.ObjectId,
    index   : { unique: true }
  };

  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  userpass: string;

  @Prop({ required: false })
  status: 1;
}

export const UsersSchema = SchemaFactory.createForClass(User);