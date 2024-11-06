import { pool } from "./db";

export const createChatDB = async () => {
  const createQuery = `
    INSERT INTO chat (created_at, updated_at)
    VALUES (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
    RETURNING *`;

  const result = await pool.query(createQuery);
  return result.rows[0];
};
