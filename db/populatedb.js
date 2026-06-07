import { Client } from "pg";

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR(255),
  message TEXT,
  added TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (username, message)
VALUES
  ('Amando', 'Hi there!'),
  ('Charles', 'Hello World!');
`;

const main = async () => {
  console.log("Seeding...");
  const connectionString = process.argv[2];
  const client = new Client({ connectionString });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("Done.");
};

main();
