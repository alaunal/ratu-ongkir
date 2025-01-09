import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-6">
      <h1 className="text-4xl font-bold text-red-500 mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Oops! The page you are looking for does not exist.
      </p>
      <Link to="/" className="text-blue-500 hover:underline text-lg">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
