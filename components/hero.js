import Image from "next/image";
import WidthConstraint from "./width-constraint";
import CustomButton from "./custom-button";

export default function Hero() {
  return (
    <div className="h-full bg-customGradient bg-customSize animate-customAnimation scroll-smooth">
      <WidthConstraint className="flex  flex-col lg:gap-y-0 lg:flex-row justify-center lg:justify-between items-center py-40 lg:py-0">
        <div className="flex flex-col lg:translate-y-16 max-w-[600px] text-[#F0F0F0] font-bold items-center justify-between gap-y-7">
          <h1 className="text-center lg: text-4xl  drop-shadow-[8px_4px_6px_black]">
            Unlock Your Future with SkillUp Academy
          </h1>
          <h1 className="text-3xl text-center lg: drop-shadow-[3px_3px_5px_black]">
            Master in-demand tech skills and transform your career. Learn data
            analytics, coding, and more with expert-led training.
          </h1>
          <CustomButton
            btn={true}
            className="bg-white text-xl font-semibold transition-all hover:text-white hover:bg-black duration-300 text-black rounded-lg shadow-black hover:shadow-white shadow-lg"
          >
            Start Learing Today
          </CustomButton>
        </div>
        <div className="hidden lg:block">
          <Image
            src={"/assets/home/hero.png"}
            alt="Unity"
            width={600}
            height={600}
            className="rounded-xl"
          />
        </div>
      </WidthConstraint>
    </div>
  );
}
