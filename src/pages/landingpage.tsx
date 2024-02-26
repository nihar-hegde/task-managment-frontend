import { Link } from "react-router-dom"; // Assuming you'll use React Router

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="container mx-auto max-w-sm p-8 rounded-lg shadow-lg bg-white">
        <h1 className="text-3xl font-bold mb-6 text-center">Welcome!</h1>
        <p className="text-center mb-8">
          Start your journey with our amazing Task managment System..
        </p>
        <Link to="/signin">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};
export default LandingPage;
