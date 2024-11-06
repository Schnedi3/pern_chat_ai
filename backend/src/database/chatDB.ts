import { pool } from "./db";

export const createChatDB = async () => {
  const createQuery = `
    INSERT INTO chat (created_at, updated_at)
    VALUES (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
    RETURNING *`;

  const result = await pool.query(createQuery);
  return result.rows[0];
};

export const addMessageDB = async (
  id: number,
  role: string,
  content: string
) => {
  const addMessageQuery = `
    INSERT INTO messages (chat_id, role, message)
    VALUES ($1, $2, $3)
    RETURNING *`;

  const result = await pool.query(addMessageQuery, [id, role, content]);
  return result.rows[0];
};
