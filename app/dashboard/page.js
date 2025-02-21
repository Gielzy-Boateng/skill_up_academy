import WidthConstraint from "@/components/width-constraint";
import React from "react";
import { TrendingUp } from "lucide-react";
import StudentCard from "@/components/student-card";
import Image from "next/image";

export default function Dashboard() {
  return (
    <WidthConstraint className="mt-28 px-10">
      <div className=" font-bold flex flex-col items-center md:items-start mb-10">
        <h1 className="bebasNeue tracking-wider text-[40px] leading-normal lg:text-[50px] text-[#1E3A8A] font-bold ">
          Welcome, Admin!
        </h1>
        <h2 className="bebasNeue tracking-wider text-[20px] leading-normal lg:text-[30px]">
          Ready to lead and make an impact?{" "}
        </h2>
        <h3 className="bebasNeue tracking-wider text-[20px] leading-normal lg:text-[30px]">
          Please have a look around
        </h3>
      </div>

      <section className="">
        <div className="flex flex-col gap-y-10 mb-5 lg:gap-y-0 md:flex-row items-center justify-between">
          <div>
            <h1 className=" font-bold bebasNeue tracking-wider text-[20px] leading-normal lg:text-[30px]">
              Total Students
            </h1>
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
            <h1 className="bebasNeue tracking-wider text-[20px] leading-normal lg:text-[30px] font-bold">
              Active Students
            </h1>
            <h1 className="flex items-center justify-center">
              <span className="text-[50px] font-bold"> 10.50k</span>{" "}
              &nbsp;&nbsp;
              <span className="flex rounded-2xl text-green-700 items-center text-lg py-1 px-2 bg-[#B8E6C1]">
                20%&nbsp; <TrendingUp />
              </span>
            </h1>
          </div>
          <hr className="border w-72 md:w-0 md:h-28 border-gray-500" />
          <div className="flex flex-col items-start lg:items-center">
            <p className="bebasNeue tracking-wider text-[20px] leading-normal lg:text-[30px] font-bold">
              Active Now
            </p>

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
