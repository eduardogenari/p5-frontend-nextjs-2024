import { Row } from "@libsql/client";
import { db } from "./db";

const row2Todo = (row: Row) => ({
    id: row.id as number,
    what: row.what as string,
    done: row.done != 0,
  });

export type Todo = ReturnType<typeof row2Todo>;

export const dbGetTodos = async () => {
    const { rows } = await db.execute("select * from todos");
    return rows.map(row2Todo);
  };