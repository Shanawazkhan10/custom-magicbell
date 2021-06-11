import Updates from "./Updates";
import React from "react";

export default function App() {
  return (
    <div className="max-w-5xl w-screen h-screen">
      <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
        <div className="flex-1">
          <a
            className="text-blue-100 hover:text-white hover:border-white"
            href="/#"
          >
            Home
          </a>
        </div>
        <div>
          <Updates />
        </div>
      </nav>
      <div className="bg-gray-100 h-full">
        <h1 className="py-20 text-center text-2xl">Welcome to my site</h1>
      </div>
    </div>
  );
}
