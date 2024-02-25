import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const LogOut = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    navigate("/signin");
  };

  return (
    <div>
      <Button variant={"destructive"} onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};
export default LogOut;
