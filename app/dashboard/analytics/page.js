import WidthConstraint from "@/components/width-constraint";
import { analytics } from "@/constants";
import Image from "next/image";

export default function Analytics() {
  return (
    <WidthConstraint className="mt-32">
      <h1 className="text-3xl font-bold text-center mb-10">
        Interaction History and Income
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 place-items-center rounded-xl py-10 px-5 lg:px-16 text-white bg-[#3B82F6] gap-5 w-full shadow-lg shadow-black transition-all duration-500 hover:bg-[#34D399]">
        {analytics.map((month, i) => (
          <div
            key={i}
            className={`]flex flex-col p-5 rounded-xl w-full transition-all duration-300 `}
            style={{ backgroundColor: month.color }}
          >
            <div className="flex items-center font-bold justify-between">
              <p className="font-bold">{month.date}</p>
              <span className="p-4 rounded-full bg-[#2563EB] transition-all duration-300 cursor-pointer hover:bg-black">
                <Image src={month.icon} width={30} height={30} alt="Image" />
              </span>
            </div>
            <p className="text-xl font-bold">{month.title}</p>
            <div className="flex items-center gap-x-2">
              <p className="font-semibold">Income this month:</p>
              <p className="font-bold">{month.income}</p>
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
        <p className="font-bold text-2xl text-center">
          Our revenue has seen remarkable growth, reflecting our commitment to
          excellence and innovation
        </p>
      </div>
    </WidthConstraint>
  );
}
