import Image from "next/image";
import WidthConstraint from "./width-constraint";
import { featuresCard } from "@/constants";
import FeaturedCourses from "./featured-courses";

export default function KeyFeatures() {
  return (
    <div id="features" className="scroll-m-20 mt-32">
      <WidthConstraint>
        <h1 className="mb-10 text-center lg:text-start bebasNeue tracking-wider text-[40px] lg:text-[50px] font-bold text-[#FF5722]">
          What Makes Us Different
        </h1>
        <div className="flex flex-col gap-y-10">
          <div className="flex flex-col lg:flex-row gap-y-10 lg:gap-y-0  items-center justify-between lg:max-w-[1200px]">
            {featuresCard.map((card) => (
              <div
                key={card.description}
                className="flex flex-col rounded-xl shadow-xl text-[#333333] hover:text-[#FF7A00] shadow-black items-center justify-center lg:w-[400px] md: bg-[#DFF5E2] py-5 px-10 hover:bg-[#B8E6C1] transition-all duration-300 hover:-translate-y-3  border-[#DFF5E2] border-2 "
              >
                <div className="flex flex-col gap-y-4">
                  <div className="">
                    <Image
                      // style={{ width: "auto", height: "100%" }}
                      src={card.image}
                      alt={card.title}
                      width={200}
                      height={200}
                      className="lg:w-full rounded-xl"
                      priority
                    />
                  </div>
                  <div className="space-y-3">
                    <h1 className=" bebasNeue tracking-widest text-[20px] lg:text-[21px] text-nowrap text-lg font-bold">
                      {card.title}
                    </h1>
                    <p>{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* offerd courses */}
          <div className="bg-[#B8E6C1] rounded-xl shadow-black shadow-xl border border-[#B8E6C1] py-5 px-10 flex-1">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <FeaturedCourses />
              <Image
                src="/assets/home/logo.jpg"
                alt="Languages"
                width={300}
                height={300}
                className=""
              />
            </div>
          </div>
        </div>
      </WidthConstraint>
    </div>
  );
}
