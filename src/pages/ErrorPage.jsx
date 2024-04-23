import React from 'react';
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log("error==>", error);

  return (
    <section className="flex items-center h-screen p-10 bg-blue-50 dark:bg-blue-900 dark:text-white">
      <div className="container flex flex-col items-center justify-center mx-auto space-y-5">
        <div className="w-full max-w-md p-5 bg-white rounded-xl shadow-xl dark:bg-gray-800">
          <h2 className="mb-5 text-6xl font-bold text-blue-600 dark:text-blue-300"> ¡Oops! 
            {error.status}
          </h2>
          <p className="mb-5 text-xl font-medium text-gray-700 dark:text-gray-300">Sorry, we couldn't find this page.</p>
          <a 
            href="/" 
            rel="noopener noreferrer" 
            className="px-6 py-2 text-white bg-blue-600 border rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400">
              Back to homepage
          </a>
        </div>
      </div>
    </section>
  );
}

export default ErrorPage;