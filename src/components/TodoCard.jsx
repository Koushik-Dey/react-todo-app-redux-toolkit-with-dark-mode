import { Button, Card, CardBody, CardHeader, Input } from "@nextui-org/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { deleteTodo, updateTodo } from "../features/todoSlice";
import { useDispatch } from "react-redux";

const TodoCard = ({ id, title, description }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const submitEditedDescription = (data) => {
    dispatch(updateTodo({ id: id, description: data.newDescription }));

    console.log(data);
  };

  return (
    <>
      <Card className="mb-5">
        <CardHeader>
          <h3 className="text-2xl font-bold">{title}</h3>
        </CardHeader>
        <CardBody>
          <h4 className="text-xl font-bold">Description</h4>
          <p>{description}</p>

          <div className="mt-5">
            <form onSubmit={handleSubmit(submitEditedDescription)}>
              <div className="flex space-x-3">
                <Input
                  type="text"
                  placeholder="Edit description"
                  {...register("newDescription")}
                />
                <Button type="submit">Edit</Button>
                <Button onClick={() => dispatch(deleteTodo({ id: id }))}>
                  Delete
                </Button>
              </div>
            </form>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default TodoCard;
