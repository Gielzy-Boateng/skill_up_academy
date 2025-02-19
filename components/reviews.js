import { Star, TrendingUp } from "lucide-react";
import WidthConstraint from "./width-constraint";

export default function Reviews() {
  return (
    <div className="mt-20">
      <WidthConstraint>
        <h1 className="mb-10 text-start text-3xl font-bold text-[#FF5722]">
          Reviews
        </h1>
        <div className="flex flex-col gap-y-10 lg:gap-y-0 md:flex-row items-center justify-between">
          <div>
            <h1 className="text-lg font-bold">Total Reviews</h1>
            <h1 className="flex items-center justify-center">
              <span className="text-[50px] font-bold"> 10.0k</span> &nbsp;&nbsp;
              <span className="flex rounded-2xl text-green-700 items-center text-lg py-1 px-2 bg-[#B8E6C1]">
                21%&nbsp; <TrendingUp />
              </span>
            </h1>
          </div>
          <hr className="border w-72 md:w-0 md:h-28 border-gray-500" />

          <div>
            <h1 className="text-xl font-bold">Average Rating</h1>
            <h2 className="flex items-center">
              <span className="font-bold text-[50px]">4.0</span>&nbsp;
              <span className="flex items-center">
                <Star color="yellow" fill="yellow" />
                <Star color="yellow" fill="yellow" />
                <Star color="yellow" fill="yellow" />
                <Star color="yellow" fill="yellow" />
                <Star color="gray" />
              </span>
            </h2>
          </div>
          <hr className="border w-72 md:w-0 md:h-28 border-gray-500" />
          <div>
            <div className="flex items-center font-bold justify-center ">
              5&nbsp; <div className="w-44 h-3 rounded-xl bg-green-500"></div>
              &nbsp; 2.0k
            </div>
            <div className="flex items-center font-bold justify-center ">
              4&nbsp; <div className="w-28 h-3 rounded-xl bg-violet-500"></div>
              &nbsp; 1.0k
            </div>
            <div className="flex items-center font-bold justify-center ">
              3&nbsp; <div className="w-20 h-3 rounded-xl bg-yellow-500"></div>
              &nbsp; 500
            </div>
            <div className="flex items-center font-bold justify-center ">
              2&nbsp; <div className="w-10 h-3 rounded-xl bg-blue-500"></div>
              &nbsp; 200
            </div>
            <div className="flex items-center font-bold justify-center ">
              1&nbsp; <div className="w-3 h-3 rounded-xl bg-red-500"></div>
              &nbsp; 0.0
            </div>
          </div>
        </div>
      </WidthConstraint>
    </div>
  );
}
