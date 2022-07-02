import { Pool } from "pg";

const pool = new Pool();

// the pool with emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens
pool.on("error", (err, client) => {
  console.error("Unexpected error on idle client", err); // your callback here
  process.exit(-1);
});

// promise - checkout a client
export const newPool = pool;
