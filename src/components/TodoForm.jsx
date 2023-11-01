import { Button, Card, CardBody, Input } from "@nextui-org/react";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";

const TodoForm = () => {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();

  const disptach = useDispatch();

  const submitForm = (data) => {
    disptach(addTodo(data));

    resetField("title");
    resetField("description");
  };

  return (
    <>
      <Card className="py-3">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-600 dark:text-white">
            Add Your Todo
          </h3>
        </div>
        <CardBody>
          <form onSubmit={handleSubmit(submitForm)}>
            <div className="space-y-4">
              <div className="">
                <Input
                  type="text"
                  label="Title"
                  {...register("title", { required: true })}
                />
              </div>
              <div className="">
                <Input
                  type="text"
                  label="Description"
                  {...register("description", { required: true })}
                />
              </div>
              <div className="text-center">
                <Button type="submit">Submit</Button>
              </div>
            </div>
          </form>
        </CardBody>
      </Card>
    </>
  );
};

export default TodoForm;
