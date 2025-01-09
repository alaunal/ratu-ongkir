import { useRouteError } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ErrorBoundary = () => {
  const error = useRouteError() as Error;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-6">
      <h1 className="text-4xl font-bold text-red-500 mb-4">
        Uh oh, something went terribly wrong 😩
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        {error.message || "An unexpected error occurred. Please try again."}
      </p>
      <pre className="bg-gray-100 text-sm text-gray-600 p-4 rounded-lg border border-gray-200 mb-6 w-full max-w-lg overflow-x-auto">
        {JSON.stringify(error, null, 2)}
      </pre>
      <Button type="button" onClick={() => (window.location.href = "/")}>
        Reload the App
      </Button>
    </div>
  );
};

export default ErrorBoundary;
