import TodoCard from "@/components/TodoCard";
import TodoForm from "@/components/TodoForm";
import { dbGetTodos } from "@/lib/todos";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Home() {
  const todos = await dbGetTodos();

  const statusToDo = todos.filter((todo) => todo.status_id === 1);
  const statusStandBy = todos.filter((todo) => todo.status_id === 2);
  const statusInProgress = todos.filter((todo) => todo.status_id === 3);
  const statusDone = todos.filter((todo) => todo.status_id === 4);

  return (
    <main style={{ width: "1750px", margin: "0 auto" }}>
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
