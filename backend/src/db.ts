import { DataSource } from "typeorm";
import Continent from "./entities/Continent";
import Country from "./entities/Country";


export default new DataSource({
  type: "sqlite",
  database: "countries.sqlite",
  entities: [Country,Continent],
  synchronize: true,
});
