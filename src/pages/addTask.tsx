import AddTaskForm from "@/components/AddTaskForm";
import React from "react";

const AddTask = () => {
  return (
    <main className="bg-gradient-to-br flex items-center justify-center from-gray-700 via-gray-900 to-black h-screen p-36">
      <div className="flex flex-col items-center justify-center bg-gray-200 rounded-md p-10 w-[450px]">
        <h1 className="text-2xl font-semibold mb-5">Add a New Task</h1>
        <AddTaskForm />
      </div>
    </main>
  );
};

export default AddTask;
