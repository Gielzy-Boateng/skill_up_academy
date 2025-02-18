import Image from "next/image";
import WidthConstraint from "./width-constraint";
import { courseDescription } from "@/constants";

export default function ProgramInfo() {
  return (
    <div className="mt-20 scroll-smooth">
      <WidthConstraint>
        <h1 className="mb-10 text-start text-3xl font-bold text-[#FF5722]">
          Program Overview
        </h1>
        <section className="flex flex-col gap-y-20 lg:gap-y-0 lg:flex-row items-center justify-between">
          <div>
            <Image
              src={"/assets/home/info.png"}
              alt="Knowlege"
              width={600}
              height={600}
              className="rounded-3xl"
            />
          </div>
          <div className="max-w-[600px] flex items-center gap-y-3 text-lg flex-col">
            <h1 className="text-center  text-2xl text-[#0077B6] font-bold">
              Unlock the world of Data Analytics with SkillUp Academy&apos;s
              Introductory Course.
            </h1>
            <p className="text-center">
              Whether you&apos;re looking to pivot your career or enhance your
              skills, this program is designed to take you from beginner to
              confident data professional in just a few weeks.
            </p>
            <p className="text-center text-2xl text-[#0077B6]  font-bold">
              Why Choose SkillUp Academy?
            </p>

            {courseDescription.map((course) => (
              <ul key={course.desription} className="list-disc">
                <li>
                  <span className="font-semibold text-[#4CAF50]">
                    {course.titile}:{" "}
                  </span>
                  {course.desription}
                </li>
              </ul>
            ))}
          </div>
        </section>
      </WidthConstraint>
    </div>
  );
}
