import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,

} from "typeorm";
// import { Length, Min } from "class-validator";
import { ObjectType, Field, Int, InputType } from "type-graphql";

import { ObjectId } from "../types";
import Country from "./Country";

@Entity()
@ObjectType()
export default class Continent extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  continentName: string;

  // @OneToMany(() => Country, (Country) => Country.Continent)
  // Countries: Country[];
  
}

@InputType()
export class NewContinentInput {
  @Field()
  continentName: string;
 
}

