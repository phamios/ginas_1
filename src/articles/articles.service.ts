import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article, ArticleDocument } from '../schemas/article.schema';


@Injectable()
export class ArticlesService {

  constructor(
    @InjectModel(Article.name) private readonly articleModel: Model<ArticleDocument>,
  ) {}


  async create(createArticleDto: CreateArticleDto): Promise<ArticleDocument> {
    const menu = new this.articleModel(createArticleDto);
    return menu.save();
  }

  async findAll(): Promise<ArticleDocument[]> {
    return this.articleModel.find();
  }

  findOne(id: string) {
    return this.articleModel.findById(id);
  }

  async update(
    id: string,
    updateArticleDto: UpdateArticleDto,
  ): Promise<ArticleDocument> {
    return this.articleModel.findByIdAndUpdate(id, updateArticleDto);
  }

  async remove(id: number) {
    return this.articleModel.findByIdAndRemove(id);
  }
}
