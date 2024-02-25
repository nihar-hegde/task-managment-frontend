import { Link } from "react-router-dom";
import SignupForm from "../components/signupForm";

const SignUpPage = () => {
  return (
    <main className="h-screen w-screen bg-gradient-to-br from-gray-700 via-gray-900 to-black flex items-center justify-center">
      <div className="bg-white w-[400px] rounded-md flex items-center flex-col p-5">
        <h1 className="text-2xl font-semibold">Sign Up</h1>
        <SignupForm />
        <div className="mt-4">
          Already have an account?{" "}
          <Link to="/signin" className="text-blue-500">
            Sign In
          </Link>
        </div>
      </div>
    </main>
  );
};

export default SignUpPage;
