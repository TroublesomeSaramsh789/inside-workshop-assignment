import { Pool, Client } from 'pg';

const DBPool = new Pool()

// const DBClient = new Client()

export const databasePool = async (
  query: string,
  values: string[] | number[]
) => {
  await DBPool.connect();
  return await DBPool.query(query, values);
};





