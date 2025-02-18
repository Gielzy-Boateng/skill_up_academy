import { featuredCourses } from "@/constants";
import Image from "next/image";

export default function FeaturedCourses() {
  return (
    <div className="flex flex-col gap-y-5 items-start justify-center lg:w-[700px]">
      <h1 className="text-3xl font-bold">{featuredCourses.title}</h1>
      <p className="text-xl">{featuredCourses.description}</p>
      <div className="grid grid-cols-2 gap-4  ">
        {featuredCourses.language.map((lang, i) => (
          <p
            className="hover:cursor-pointer transition-all relative duration-300 group px-4 py-2 font-bold text-white "
            key={lang}
            style={{ backgroundColor: `${featuredCourses.colors[i]}` }}
          >
            {/* <span className="block group-hover:hidden transition-opacity duration-300 "> */}
            <span className="absolute flex items-center justify-center inset-0 group-hover:opacity-0 transition-opacity duration-300">
              {lang}
            </span>
            {/* <span className="hidden group-hover:block "> */}
            <span className="text-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Sign Up Now!
            </span>
          </p>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-4 mt-5 mb-10 lg:mb-0 ">
        {featuredCourses.image.map((img, i) => (
          <div key={i}>
            <Image
              src={img}
              alt="Languages"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
