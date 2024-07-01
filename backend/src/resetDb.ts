
import db from './db';
import Continent from './entities/Continent';
import Country from './entities/Country';


async function resetDB() {
  await db.initialize();

  await db.dropDatabase();

  await db.synchronize();
  
  const continent = new Continent();
  Object.assign(continent, {
    continentName:'Europe',
  });
  await continent.save();
  const country = new Country();
  Object.assign(country, {
    code: 'FR',
    nom: 'France',
    emoji: 'fr',
  continent: {
    "id": 1
  }
  });
  await country.save();


  // continent: {
  //   "id": 0
  // }
  // const continent = continent.create({ : "informatique" });
  // keyboard.category = computerCat;

  // const computerCat = Category.create({ name: "informatique" });
  // const voitureCat = Category.create({ name: "automobile" });
  // const sportCat = Category.create({ name: "sport" });
  // const tag1 = Tag.create({ name: "tag1" });
  // const tag2 = Tag.create({ name: "tag2" });
  // const tag3 = Tag.create({ name: "tag3" });

  // keyboard.category = computerCat;
  // keyboard.tags = [tag1, tag2];

  // macbook.category = computerCat;
  // macbook.tags = [tag2, tag3];

  // peugeot.category = voitureCat;
  // renault.category = voitureCat;
  // porsche.category = voitureCat;

  // skis.category = sportCat;
  // raquette.category = sportCat;

  // await keyboard.save();
  // await macbook.save();
  // await peugeot.save();
  // await renault.save();
  // await porsche.save();
  // await raquette.save();
  // await skis.save();


  console.log('Database reset successful');
}

resetDB().catch(error => console.error('Error resetting database:', error));
