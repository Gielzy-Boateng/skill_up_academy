import React from "react";

export default function Spinner() {
  return (
    <svg
      role="status"
      className="inline w-6 h-6 text-gray-200 animate-spin dark:text-white fill-blue-600"
      viewBox="0 0 100 101"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 50.5C100 78.8 78.8 100 50 100S0 78.8 0 50.5 21.2 1 50 1s50 21.2 50 49.5z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M93.5 50.5A43.5 43.5 0 1 1 6.5 50.5A43.5 43.5 0 0 1 93.5 50.5z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="0 1 10"
        strokeDashoffset="2"
        transform="rotate(180 50 50)"
      />
    </svg>
  );
}
