import { actionAddTodo } from "@/actions/todos";
import TodoCard from "@/components/TodoCard";
import TodoForm from "@/components/TodoForm";
import TodoItem from "@/components/TodoItem";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { dbGetTodos } from "@/lib/todos";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Home() {
  const todos = await dbGetTodos();

  const doneItems = todos.filter(todo => todo.done);
  const notDoneItems = todos.filter(todo => !todo.done);

  return (
    <main className="p-8">
      <h1>Todo List</h1>
      <TodoForm />
      <div className="max-w-5xl flex justify-between">
        <div>
          <h2>To Do</h2>
          {notDoneItems.map((todo) => (
            <TodoCard key={todo.id} todo={todo} />
          ))}
        </div>
        <div>
          <h2>Done</h2>
          {doneItems.map((todo) => (
            <TodoCard key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
    </main>
  );
}