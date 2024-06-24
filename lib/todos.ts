import { Row } from "@libsql/client";
import { db } from "./db";
import "server-only";

const row2Todo = (row: Row) => ({
    id: row.id as number,
    text: row.text as string,
    status_id: row.status_id as number,
  });

export type Todo = ReturnType<typeof row2Todo>;

export const dbGetTodos = async () => {
  const { rows } = await db.execute("select * from tickets");
  return rows.map(row2Todo);
};

export const dbAddTodo = async (text: string) => {
  await db.execute({
    sql: "insert into tickets (text) values (?)",
    args: [text],
  });
};

export const dbStatusToDo = async (id: number) => {
  await db.execute({
    sql: "update tickets set status_id = 1 where id = ?",
    args: [id],
  });
};

export const dbStatusStandBy = async (id: number) => {
  await db.execute({
    sql: "update tickets set status_id = 2 where id = ?",
    args: [id],
  });
};

export const dbStatusInProgress = async (id: number) => {
  await db.execute({
    sql: "update tickets set status_id = 3 where id = ?",
    args: [id],
  });
};

export const dbStatusDone = async (id: number) => {
  await db.execute({
    sql: "update tickets set status_id = 4 where id = ?",
    args: [id],
  });
};

export const dbDeleteTodo = async (id: number) => {
  await db.execute({
    sql: "delete from tickets where id = ?",
    args: [id],
  });
};