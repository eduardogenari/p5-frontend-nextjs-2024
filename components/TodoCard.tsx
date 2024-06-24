"use client";

import { Todo } from "@/lib/todos";
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { actionDeleteTodo, actionStatusDone, actionStatusInProgress, actionStatusStandBy, actionStatusToDo, actionToggleTodoDone } from "@/actions/todos";
import { Badge } from "./ui/badge";

export default function TodoCard({ todo }: { todo: Todo }) {
  return (
    <Card className={"group m-5 xl:w-96 hover:bg-gray-50"}>
      <CardHeader>
        <div className={"flex justify-between"}>
          <p className={"text-gray-500"}>{todo.id}</p>
          <Badge className={"md:w-24"}>{todo.status_id ? "done" : "to do"}</Badge>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4">
        <p>{todo.text}</p>
      </CardContent>
      <CardFooter className="group-hover:visible invisible">
        <Button onClick={() => actionStatusToDo(todo.id)} variant="outline">
          to do
        </Button>
        <Button
          onClick={() => actionStatusStandBy(todo.id)}
          variant="outline"
          className="w-30"
        >
          stand by
        </Button>
        <Button
          onClick={() => actionStatusInProgress(todo.id)}
          variant="outline"
          className="w-30"
        >
          in progress
        </Button>
        <Button
          onClick={() => actionStatusDone(todo.id)}
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
