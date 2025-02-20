import WidthConstraint from "@/components/width-constraint";
import { courses } from "@/constants";
import React from "react";

export default function Courses() {
  return (
    <WidthConstraint className="mt-32 md:mt-32">
      <div className="container mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold text-center mb-4 text-orange-600">
          Available Data Analytics Courses
        </h2>
        <div className="overflow-x-clip">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-orange-600 text-white">
              <tr>
                <th className="p-3 text-left">Course</th>
                <th className="p-3 text-left">Duration</th>
                <th className="p-3 text-left">Level</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 even:bg-gray-100 hover:bg-orange-100 transition"
                >
                  <td className="p-3">{course.course}</td>
                  <td className="p-3">{course.duration}</td>
                  <td className="p-3">{course.level}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </WidthConstraint>
  );
}

//   </div>;
// }
