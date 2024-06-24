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

  console.log(todos);

  const statusToDo = todos.filter(todo => todo.status_id === 1);
  const statusStandBy = todos.filter(todo => todo.status_id === 2);
  const statusInProgress = todos.filter(todo => todo.status_id === 3);
  const statusDone = todos.filter(todo => todo.status_id === 4);

  return (

    <main style={{ width: '1750px', margin: '0 auto' }} className="bg-blue-100">
      <div className="w-550px mx-auto bg-red-500">
        hi
      </div>
      <h1>Todo List</h1>
      <TodoForm />
      <div className="max-w-5xl flex justify-between">
        <div>
          <h2 className={"m-5 xl:w-96"}>To Do</h2>
          {statusToDo.map((todo) => (
            <TodoCard key={todo.id} todo={todo} />
          ))}
        </div>
        <div>
          <h2 className={"m-5 xl:w-96"}>Stand By</h2>
          {statusStandBy.map((todo) => (
            <TodoCard key={todo.id} todo={todo} />
          ))}
        </div>
        <div>
          <h2 className={"m-5 xl:w-96"}>In Progress</h2>
          {statusInProgress.map((todo) => (
            <TodoCard key={todo.id} todo={todo} />
          ))}
        </div>
        <div>
          <h2 className={"m-5 xl:w-96"}>Done</h2>
          {statusDone.map((todo) => (
            <TodoCard key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
    </main>
  );
}