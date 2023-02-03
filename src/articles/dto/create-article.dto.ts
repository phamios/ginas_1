import {
    IsNotEmpty,
    IsString,
    IsNumber,
    MaxLength,
    MinLength,
  } from 'class-validator';

export class CreateArticleDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(20)
    title: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    @MaxLength(300)
    description: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    tags: string;

    @IsNumber()
    @IsNotEmpty()
    status: number;


} 