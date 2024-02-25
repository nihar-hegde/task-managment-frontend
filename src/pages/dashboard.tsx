import { useContext, useEffect, useState } from "react";
import LogOut from "@/components/Logout";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "@/context/AuthContext";
import DeleteTask from "@/components/DeleteTask";

interface Task {
  _id: string;
  title: string;
  description: string;
  dueDate: Date;
  userId: string;
}

function formatDateToDateOnly(dateString: Date) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

const Dashboard = () => {
  const navigate = useNavigate();
  const [taskData, setTaskData] = useState<Task[] | null>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          "https://task-managment-backend.onrender.com/api/v1/task/get",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch tasks!");
        }

        const data = await response.json(); // Type the response data
        setTaskData(data.allTasks);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        // Ensure you catch potential errors
        setError(error.message || "An error occurred.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [token]);
  //console.log(taskData);
  if (error) {
    return (
      <div className="p-24 items-center justify-center">
        <p className="text-5xl">Error.</p>
      </div>
    );
  }
  return (
    <div className="flex items-center flex-col h-screen bg-gradient-to-br from-gray-700 via-gray-900 p-24 to-black">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div className="flex flex-col bg-gray-200  p-5 rounded-md w-[650px]">
            <div className="felx flex row-auto items-center justify-between p-2">
              <Button className="" onClick={() => navigate("/addTask")}>
                Add New Task
              </Button>
              <LogOut />
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>SN.</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Descriptoin</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Edit</TableHead>
                  <TableHead>Delete</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {taskData?.map((item, index) => (
                  <TableRow key={item._id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>{item.description}</TableCell>
                    <TableCell>{formatDateToDateOnly(item.dueDate)}</TableCell>

                    <TableCell>
                      <Link to={`/updateTask/${item._id}`}>
                        <Pencil />
                      </Link>
                    </TableCell>
                    <TableCell>
                      <DeleteTask id={item._id} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
