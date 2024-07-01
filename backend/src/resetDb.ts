
import db from './db';
import Country from './entities/Country';

async function resetDB() {
  await db.initialize();

  await db.dropDatabase();

  await db.synchronize();

  const country = new Country();
  Object.assign(country, {
    code: 'CR',
    nom: 'Cyprus',
    emoji: 'cr',
  });
  await country.save();

  console.log('Database reset successful');
}

resetDB().catch(error => console.error('Error resetting database:', error));
