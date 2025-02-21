import WidthConstraint from "@/components/width-constraint";
import { analytics } from "@/constants";
import Image from "next/image";

export default function Analytics() {
  return (
    <WidthConstraint className="mt-32">
      <h1 className="ebasNeue tracking-wider text-[30px] leading-normal lg:text-[40px] font-bold text-center mb-10">
        Interaction History and Income
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 place-items-center rounded-xl py-10 px-5 lg:px-16 text-white bg-[#3B82F6] gap-5 w-full shadow-lg shadow-black transition-all duration-500 hover:bg-[#34D399]">
        {analytics.map((month, i) => (
          <div
            key={i}
            className={`flex flex-col p-5 rounded-xl w-full transition-all duration-300 `}
            style={{ backgroundColor: month.color }}
          >
            <div className="py-5 lg:py-3 md flex items-center font-bold justify-between">
              <p className="font-bold ebasNeue tracking-wider text-[20px] leading-normal lg:text-[25px]">
                {month.date}
              </p>
              <span className="p-4 rounded-full bg-[#2563EB] transition-all duration-300 cursor-pointer hover:bg-black">
                <Image src={month.icon} width={30} height={30} alt="Image" />
              </span>
            </div>
            <p className="ebasNeue tracking-wider text-[20px] leading-normal font-bold">
              {month.title}
            </p>
            <div className="flex items-center mt-2 gap-x-2">
              <p className="font-semibold">Income this month:</p>
              <p className="font-bold ebasNeue tracking-wider text-[18px] leading-normal">
                {month.income}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col-reverse gap-y-10 md:gap-y-0 md:flex-row items-center justify-between mt-20">
        <Image
          src="/assets/dashboard/stat.jpg"
          width={400}
          height={400}
          alt="Statistics"
        />
        <p className="font-bold text-center ebasNeue tracking-wider leading-normal text-[25px]">
          Our revenue has seen remarkable growth, reflecting our commitment to
          excellence and innovation
        </p>
      </div>
    </WidthConstraint>
  );
}
