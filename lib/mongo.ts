import { MongoClient } from 'mongodb';

const URL = 'mongodb://localhost:27017';
const DATABASE = 'jaguar';

const client = new MongoClient(URL, { useUnifiedTopology: true });

export async function getDb() {
  if (!client.isConnected()) await client.connect();
  return client.db(DATABASE);
}
