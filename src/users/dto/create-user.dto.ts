import {
    IsNotEmpty,
    IsString,
    IsNumber,
    MaxLength,
    MinLength,
  } from 'class-validator'; 


export class CreateUserDto { 
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    username: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    userpass: string;

    @IsNumber()
    @IsNotEmpty()
    status: number;

}
