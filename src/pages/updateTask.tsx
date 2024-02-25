import UpdateTaskForm from "@/components/UpdateTaskFrom";
import { AuthContext } from "@/context/AuthContext";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface TaskDetails {
  _id: string;
  title: string;
  description: string;
  dueDate: string;
}

const UpdateTask = () => {
  const { id } = useParams();
  const { token } = useContext(AuthContext);
  const [taskData, setTaskData] = useState<TaskDetails>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://task-managment-backend.onrender.com/api/v1/task/getTaskById/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
        setTaskData(data.taskDetails);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id, token]);
  console.log(taskData);
  return (
    <main className="bg-gradient-to-br flex items-center justify-center from-gray-700 via-gray-900 to-black h-screen p-36">
      <div className="flex flex-col items-center justify-center bg-gray-200 rounded-md p-10 w-[450px]">
        <h1 className="text-2xl font-semibold mb-5">Update Task</h1>
        {taskData && <UpdateTaskForm taskDetails={taskData} />}
      </div>
    </main>
  );
};

export default UpdateTask;
