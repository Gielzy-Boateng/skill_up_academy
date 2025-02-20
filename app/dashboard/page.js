import WidthConstraint from "@/components/width-constraint";
import React from "react";
import { TrendingUp } from "lucide-react";
import StudentCard from "@/components/student-card";
import Image from "next/image";

export default function Dashboard() {
  return (
    <WidthConstraint className="mt-28">
      <div className=" text-lg font-bold flex flex-col items-center md:items-start mb-10">
        <h1 className="text-[#1E3A8A] font-bold text-3xl">Welcome, Admin!</h1>
        <h2>Ready to lead and make an impact? </h2>
        <h3>Please have a look around</h3>
      </div>

      <section className="">
        <div className="flex flex-col gap-y-10 mb-5 lg:gap-y-0 md:flex-row items-center justify-between">
          <div>
            <h1 className="text-lg font-bold">Total Students</h1>
            <h1 className="flex items-center justify-center">
              <span className="text-[50px] font-bold"> 15.20k</span>{" "}
              &nbsp;&nbsp;
              <span className="flex rounded-2xl text-green-700 items-center text-lg py-1 px-2 bg-[#B8E6C1]">
                35%&nbsp; <TrendingUp />
              </span>
            </h1>
          </div>
          <hr className="border w-72 md:w-0 md:h-28 border-gray-500" />

          <div className="flex flex-col items-start">
            <h1 className="text-xl font-bold">Active Students</h1>
            <h1 className="flex items-center justify-center">
              <span className="text-[50px] font-bold"> 10.50k</span>{" "}
              &nbsp;&nbsp;
              <span className="flex rounded-2xl text-green-700 items-center text-lg py-1 px-2 bg-[#B8E6C1]">
                20%&nbsp; <TrendingUp />
              </span>
            </h1>
          </div>
          <hr className="border w-72 md:w-0 md:h-28 border-gray-500" />
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold">Active Now</p>

            <div className="flex gap-x-5 items-center font-bold justify-center ">
              <p className="text-[50px] font-bold">5.75k</p>

              <Image
                src="/assets/dashboard/active.jpg"
                width={50}
                height={50}
                alt="Users"
              />
            </div>
          </div>
        </div>
        <StudentCard />
      </section>
    </WidthConstraint>
  );
}

// <div className="flex flex-col md:flex-row items-center justify-between gap-y-10 md:gap-x-10">
// <div className="text-center md:text-left">
//   <h1 className="text-lg font-bold">Total Reviews</h1>
//   <h1 className="flex items-center justify-center">
//     <span className="text-[50px] font-bold">10.0k</span> &nbsp;&nbsp;
//     <span className="flex rounded-2xl text-green-700 items-center text-lg py-1 px-2 bg-[#B8E6C1]">
//       21%&nbsp; <TrendingUp />
//     </span>
//   </h1>
// </div>

// {/* Responsive Divider */}
// <hr className="hidden md:block border h-28 border-gray-500" />

// {/* Average Rating */}
// <div className="text-center md:text-left">
//   <h1 className="text-xl font-bold">Average Rating</h1>
//   <h2 className="flex items-center justify-center md:justify-start">
//     <span className="font-bold text-[50px]">4.0</span>&nbsp;
//     <span className="flex items-center">
//       <Star color="yellow" fill="yellow" />
//       <Star color="yellow" fill="yellow" />
//       <Star color="yellow" fill="yellow" />
//       <Star color="yellow" fill="yellow" />
//       <Star color="gray" />
//     </span>
//   </h2>
// </div>

// {/* Responsive Divider */}
// <hr className="hidden md:block border h-28 border-gray-500" />

// {/* Rating Breakdown */}
// <div className="text-center md:text-left">
//   {[
//     { star: 5, width: "w-44", color: "bg-green-500", count: "2.0k" },
//     { star: 4, width: "w-28", color: "bg-violet-500", count: "1.0k" },
//     { star: 3, width: "w-20", color: "bg-yellow-500", count: "500" },
//     { star: 2, width: "w-10", color: "bg-blue-500", count: "200" },
//     { star: 1, width: "w-3", color: "bg-red-500", count: "0.0" },
//   ].map((item) => (
//     <div
//       key={item.star}
//       className="flex items-center font-bold justify-center md:justify-start"
//     >
//       {item.star} &nbsp;{" "}
//       <div
//         className={`${item.width} h-3 rounded-xl ${item.color}`}
//       ></div>{" "}
//       &nbsp; {item.count}
//     </div>
//   ))}
// </div>
// </div>
