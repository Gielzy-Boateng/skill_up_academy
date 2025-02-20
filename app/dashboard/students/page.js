import AllStudents from "@/components/all-students";
import WidthConstraint from "@/components/width-constraint";
import React from "react";

export default function Students() {
  return (
    <WidthConstraint className="mt-28">
      <h1 className="text-3xl font-bold text-center">List of all Students</h1>
      <AllStudents />
      <p className="bg-blue-700 text-white cursor-pointer font-bold inline-block py-2 px-4 rounded-full">
        More...
      </p>
    </WidthConstraint>
  );
}
