"use client";

import { actionAddTodo } from "@/actions/todos";
import React, { useRef } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function TodoForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const addTodo = async (formData: FormData) => {
    formRef.current?.reset();
    await actionAddTodo(formData);
  };

  return (
    <form ref={formRef} action={addTodo}>
      <Card className={"group m-5 xl:w-96 hover:bg-gray-50 bg-gray-200"}>
        <CardHeader>
          <h3>Add new ticket</h3>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Input
            type="text"
            name="what"
            placeholder="Type new ticket description here"
            className="border border-stone-300 p-1 mr-2 rounded"
          />
        </CardContent>
        <CardFooter className="group-hover:visible invisible">
          <Button>Add new ticket</Button>
        </CardFooter>
      </Card>
    </form>
  );
}
