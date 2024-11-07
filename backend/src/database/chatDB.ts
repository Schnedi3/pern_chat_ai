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

export const getOldChatsDB = async () => {
  const getOldChatsQuery = `
    SELECT
      c.id AS "id",
      json_agg(
        jsonb_build_object(
          'role', m."role",
          'content', m.message
        ) ORDER BY m.created_at
      ) AS conversation
    FROM
      chat c
    JOIN
      messages m ON c.id = m.chat_id
    GROUP BY
      c.id
    ORDER BY
      c.created_at`;

  const result = await pool.query(getOldChatsQuery);
  return result.rows;
};
