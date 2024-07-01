import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,

} from "typeorm";
// import { Length, Min } from "class-validator";
import { ObjectType, Field, Int, InputType } from "type-graphql";
// import Category from "./Category";
// import Tag from "./Tag";
import { ObjectId } from "../types";

@Entity()
@ObjectType()
export default class Country extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column({ length: 50 })
  @Field()
  code: string;

  @Column()
  @Field()
  nom: string;

  @Column()
  @Field()
  emoji: string;

  
}

@InputType()
export class NewCountryInput {
  @Field()
  code: string;

  @Field()
  nom: string;

  @Field()
  emoji: string;

 
}

