"use server";

import { dbAddTodo, dbDeleteTodo, dbStatusDone, dbStatusInProgress, dbStatusStandBy, dbStatusToDo } from "@/lib/todos";
import { revalidatePath } from "next/cache";

export async function actionAddTodo(formData: FormData) {
    const whatField = formData.get("what");
    if (whatField === null) {
      throw new Error(`Missing "what" field`);
    }
    const what = whatField.toString();
    await dbAddTodo(what);
    revalidatePath("/");
  }

  export async function actionStatusToDo(id: number) {
    await dbStatusToDo(id);
    revalidatePath("/");
  }

  export async function actionStatusStandBy(id: number) {
    await dbStatusStandBy(id);
    revalidatePath("/");
  }

  export async function actionStatusInProgress(id: number) {
    await dbStatusInProgress(id);
    revalidatePath("/");
  }
  
  export async function actionStatusDone(id: number) {
    await dbStatusDone(id);
    revalidatePath("/");
  }
  
  export async function actionDeleteTodo(id: number) {
    await dbDeleteTodo(id);
    revalidatePath("/");
  }