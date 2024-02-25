import { Button } from "./ui/button";
import { Loader, Trash } from "lucide-react";
import { AuthContext } from "@/context/AuthContext"; // Replace with your AuthContext path
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  id: string;
}

const DeleteTask = ({ id }: Props) => {
  const { token } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleDeleteClick = async () => {
    if (!token) {
      console.error("No token found, cannot delete task.");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:8080/api/v1/task/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to delete task");
      }

      navigate(0);
      console.log("Task deleted!");
    } catch (error) {
      console.error("Error deleting task:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button variant={"destructive"} onClick={handleDeleteClick}>
      {loading ? <Loader className="animate-spin" /> : <Trash />}
    </Button>
  );
};

export default DeleteTask;
