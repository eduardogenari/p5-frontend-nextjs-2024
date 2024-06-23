import { actionAddTodo } from "@/actions/todos";
import TodoItem from "@/components/TodoItem";
import { dbGetTodos } from "@/lib/todos";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Home() {

  const todos = await dbGetTodos();

  return (
    <main className="p-8">
      <h1>Todo List</h1>
      <form action={actionAddTodo}>
        <input type="text" name="what" placeholder="Add a new todo" className="border-black p-1 mr-2 rounded" />
        <button>Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </main>
  );
}
