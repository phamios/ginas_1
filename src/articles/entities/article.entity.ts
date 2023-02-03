import mongoose from 'mongoose';

export class Article {
    authorid: mongoose.Schema.Types.ObjectId;
    title: string;
    description: string;
    tags: string;
    created: Date;
    updated: Date;
    status:number;
}
