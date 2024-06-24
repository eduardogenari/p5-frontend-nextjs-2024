"use client";

import { Todo } from "@/lib/todos";
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { actionDeleteTodo, actionStatusDone, actionStatusInProgress, actionStatusStandBy, actionStatusToDo } from "@/actions/todos";

export default function TodoCard({ todo }: { todo: Todo }) {
  return (
    <Card className={"group m-5 xl:w-96 hover:bg-gray-50"}>
      <CardHeader>
        <div className={"flex justify-between"}>
          <p className={"text-gray-500"}>{todo.id}</p>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4">
        <p>{todo.text}</p>
      </CardContent>
      <CardFooter className="group-hover:visible invisible">
        <Button 
            onClick={() => actionStatusToDo(todo.id)} 
            variant="ghost"
            className="sm:w-14 hover:bg-stone-200 text-gray-500"
            >
          to do
        </Button>
        <Button
          onClick={() => actionStatusStandBy(todo.id)}
          variant="ghost"
          className="sm:w-20 hover:bg-stone-200 text-gray-500"
        >
          stand by
        </Button>
        <Button
          onClick={() => actionStatusInProgress(todo.id)}
          variant="ghost"
          className="sm:w-20 hover:bg-stone-200 text-gray-500"
        >
          in progress
        </Button>
        <Button
          onClick={() => actionStatusDone(todo.id)}
          variant="ghost"
          className="sm:w-14 hover:bg-stone-200 text-gray-500"
        >
          done
        </Button>
        <Button
          onClick={() => actionDeleteTodo(todo.id)}
          variant="ghost"
          className="sm:w-14 hover:bg-red-200 text-gray-500"
        >
          delete
        </Button>
      </CardFooter>
    </Card>
  );
}
