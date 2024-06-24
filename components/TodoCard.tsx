"use client";

import { Todo } from "@/lib/todos";
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { actionDeleteTodo, actionToggleTodoDone } from "@/actions/todos";
import { Badge } from "./ui/badge";

export default function TodoCard({ todo }: { todo: Todo }) {
  return (
    <Card className={"group m-5 lg:w-96 hover:bg-gray-50"}>
      <CardHeader>
        <div className={"flex justify-between"}>
          <p className={"text-gray-500"}>{todo.id}</p>
          <Badge className={"md:w-24"}>{todo.done ? "done" : "to do"}</Badge>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4">
        <p>{todo.what}</p>
      </CardContent>
      <CardFooter className="group-hover:visible invisible">
        <Button onClick={() => actionToggleTodoDone(todo.id)} variant="outline">
          to do
        </Button>
        <Button
          onClick={() => actionToggleTodoDone(todo.id)}
          variant="outline"
          className="w-30"
        >
          done
        </Button>
        <Button
          onClick={() => actionDeleteTodo(todo.id)}
          variant="destructive"
          className="w-30"
        >
          delete
        </Button>
      </CardFooter>
    </Card>
  );
}

/*

      <Card>
        <CardHeader>
          <p>card header</p>
        </CardHeader>
        <CardContent className="grid gap-4">
          <p>{todo.what}</p>
        </CardContent>
        <CardFooter>
          <p>card footer</p>
          <Button className="w-full">button</Button>
        </CardFooter>
      </Card>

            <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
          
        ))}
      </ul>



*/
