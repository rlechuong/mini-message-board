import pool from "./pool.js";

const getAllMessages = async () => {
  const { rows } = await pool.query("SELECT * FROM messages ORDER BY added DESC");
  return rows;
};

const insertMessage = async (username, message) => {
  await pool.query("INSERT INTO messages (username, message) VALUES ($1, $2)", [username, message]);
};

const getMessageById = async (id) => {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [id]);
  return rows[0];
};

export { getAllMessages, insertMessage, getMessageById };
