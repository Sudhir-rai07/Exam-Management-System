import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-full">
          <h1 className="mb-4 font-extrabold text-red-500 text-9xl">404</h1>
          <h2 className="mb-2 text-3xl font-semibold">Oops! Page Not Found</h2>
          <p className="max-w-md mb-6 text-lg text-center">
            Sorry, the page you’re looking for doesn’t exist. It might have been removed, or the link is broken.
          </p>
          <Link
            to="/"
            className="px-6 py-3 text-white transition duration-300 bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600"
          >
            Go Back to Home
          </Link>
        </div>
      );
}

export default NotFound