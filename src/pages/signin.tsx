import SignInForm from "@/components/signInForm";
import { Link } from "react-router-dom";

const SignInPage = () => {
  return (
    <main className="h-screen w-screen bg-gradient-to-br from-gray-700 via-gray-900 to-black flex items-center justify-center">
      <div className="bg-white w-[400px] rounded-md flex items-center flex-col p-5">
        <h1 className="text-2xl font-semibold">Sign In</h1>
        <SignInForm />
        <div className="mt-4">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="text-blue-500">
            Sign Up
          </Link>
        </div>
      </div>
    </main>
  );
};

export default SignInPage;
