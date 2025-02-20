import React from "react";
import WidthConstraint from "./width-constraint";
import { CheckCircle } from "lucide-react";
import { allStudents } from "@/constants";

export default function AllStudents() {
  return (
    <WidthConstraint className="p-0">
      <div className="w-full p-4">
        {allStudents.map((student, index) => (
          <div
            key={index}
            className={`flex flex-col gap-y-3 md:gap-y-0 md:flex-row items-center justify-between ${
              index % 2 == 0 ? "bg-gray-900" : "bg-purple-700"
            } text-white p-4 rounded-lg shadow-md shadow-black mb-4`}
          >
            {/* Left Side */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-gray-700 rounded-full text-xl font-bold">
                {student.avatar}
              </div>
              <div>
                <h1 className="font-semibold">{student.name}</h1>
                <p className="text-gray-300 text-sm">{student.email}</p>
              </div>
            </div>

            {/* Middle Section */}
            {/* <div className="flex-1 flex flex-col text-gray-300 mt-4 md:mt-0"> */}
            <span className="font-semibold text-white text-start">
              {student.program}
            </span>
            {/* </div> */}
            <p>{student.fee}</p>
            <p>{student.startDate}</p>

            {/* Right Side */}
            <div className="flex flex-row items-center gap-2 mt-4 md:mt-0">
              <span>{student.courses}</span>
              <span>
                <CheckCircle className="text-green-500" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </WidthConstraint>
  );
}
