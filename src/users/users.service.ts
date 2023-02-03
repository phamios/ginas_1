import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from '../schemas/users.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {

  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}


  async create(createUserDto: CreateUserDto): Promise<UserDocument> {
    const menu = new this.userModel(createUserDto);
    return menu.save();
  }

  async findAll(): Promise<UserDocument[]> {
    return this.userModel.find();
  }

  findOne(id: number) {
    return this.userModel.findById(id);
  }

  async update(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<UserDocument> {
    return this.userModel.findByIdAndUpdate(id, updateUserDto);
  }

  async remove(id: number) {
    return this.userModel.findByIdAndRemove(id);
  }
}
