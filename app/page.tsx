import Image from "next/image";

export default function Home() {
  return (
    <main className="p-8">
      <h1>Todo List</h1>
      <form>
      <input type="text" name="what" placeholder="Add a new todo" className="border-black p-1 mr-2 rounded" />
      <button>Add Todo</button>
      </form>
    </main>
  );
}
