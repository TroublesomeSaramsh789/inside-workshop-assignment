import { Pool, Client } from 'pg';

const DBPool = new Pool()

// const DBClient = new Client()

export const databasePool = async (
  query: string,
  values: string[] | number[]
) => {
  const Query = await DBPool.connect();
  return Query.query(query, values); 
};





