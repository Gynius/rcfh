import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import MainTemplate from "../components/MainTemplate";

const NotFound = () => {
  return (
    <MainTemplate>
      <Helmet>
        <title>RCFH | Page Not Found</title>
      </Helmet>
      <div className="text-center mt-10 h-[55vh] flex items-center justify-center flex-col px-[20%]">
        <h1 className="font-playfair font-bold text-8xl">
          <span className="font-roboto">404 - </span>Page Not Found
        </h1>
        <p className="font-playfair  text-6xl">
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="mt-10 border p-5 bg-green rounded-full text-white font-bold shadow-lg hover:bg-green_dark"
        >
          Go Back to Home
        </Link>
      </div>
    </MainTemplate>
  );
};

export default NotFound;
