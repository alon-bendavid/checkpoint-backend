import { Resolver, Query, Arg, Mutation, Int } from "type-graphql";
import Continent, { NewContinentInput } from "../entities/Continent";
import { GraphQLError } from "graphql";
import { Code, In } from "typeorm";

@Resolver(Continent)
class ContinentsResolver {
 
  @Mutation(() => Continent)
  async createContinent(@Arg("data") data: NewContinentInput) {
    const existingContinent = await Continent.findOneBy({ continentName: data.continentName});
    if (existingContinent !== null) throw new GraphQLError("Continent_ALREADY_EXIST");

    const newContinent = new Continent();
    Object.assign(newContinent, data);
    const newContinentWithId = await newContinent.save();
    return newContinentWithId;
  }


  // @Query(() => Continent)
  // async getContinentByCode(@Arg("ContinentCode", () => String) code: string) {
  //   const  ContinentFound = await Continent.findOne({
  //     where: { code },
      
  //   });
  //   if (!Continent) throw new GraphQLError("not found");
  //   return ContinentFound;
  // }

  // @Query(() => [Continent])
  // async Continent(): Promise<Continent[]> {
  //   return Continent.find();
  // }
}

export default ContinentsResolver;
