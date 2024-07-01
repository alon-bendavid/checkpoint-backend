import { Resolver, Query, Arg, Mutation, Int, ID } from "type-graphql";
// import Country, { NewCountryInput } from "../entities/Country";
import  Country, { NewCountryInput } from "../entities/Country";

import { GraphQLError } from "graphql";
import { Code, In } from "typeorm";
import ContinentsResolver from "./ContinentResolver";

@Resolver(Country)
class CountrysResolver {
 
  @Mutation(() => Country)
  async createCountry(@Arg("data") data: NewCountryInput) {
    const existingCountry = await Country.findOneBy({ nom: data.nom});
    if (existingCountry !== null) throw new GraphQLError("Country_ALREADY_EXIST");

    const newCountry = new Country();
    Object.assign(newCountry, data);
    const newCountryWithId = await newCountry.save();
    return newCountryWithId;
  }


  @Query(() => Country)
  async getCountryByCode(@Arg("CountryCode", () => String) code: string) {
    const  CountryFound = await Country.findOne({
      where: { code },
      
    });
    if (!Country) throw new GraphQLError("not found");
    return CountryFound;
  }

  @Query(() => [Country])
  async Country(): Promise<Country[]> {
    return Country.find();
  }

    @Query(() => [Country])
    async countries(
      @Arg("continent", { nullable: true }) id?: number,
    ) {
      return Country.find({
        relations: { continent: true,},
        where: {
       
          continent: {
            id:  id,
          },
        },
      });
    }

}

export default CountrysResolver;
