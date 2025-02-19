import { media } from "@/constants";
import Image from "next/image";
import WidthConstraint from "./width-constraint";
import Link from "next/link";

export default function Footer() {
  const currentDate = new Date().getFullYear();

  return (
    // <footer className="bg-gradient-to-br from-[#130428] via-[#38126D] to-[#190634]">
    <footer className="bg-[#FF5722]">
      <WidthConstraint>
        <section className="text-white py-10 flex flex-col items-center justify-center space-y-10 mb-5">
          <div className="flex items-center gap-x-5">
            <div className="w-3 h-3 bg-white hover:bg-black rounded-full" />
            <h1 className="text-3xl font-bold">SkillUp Academy</h1>
            <div className="w-3 h-3 bg-white hover:bg-black rounded-full" />
          </div>
          <div>
            <Link href="/">
              <Image
                src="/assets/home/header-logo.png"
                width={200}
                height={200}
                alt="Brand"
                className=""
              />
              {/* <video
                width="200"
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                className="rounded-full"
              >
                <source src="/latest.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}
            </Link>
          </div>
          <div className=" flex items-center justify-center space-x-6">
            {media.map((link, i) => (
              <Link href={link.url} target="_blank" key={i}>
                <Image src={link.icon} width={30} height={30} alt={link.name} />
              </Link>
            ))}
          </div>
        </section>
        <hr className="border-solid border-2 border-white" />
        <div className="flex text-white flex-col gap-y-3 lg:gap-y-0 font-semibold lg:flex-row items-center justify-between py-5">
          <p>Copyright &copy; {currentDate} </p>
          <Link href="tel:+233571991014">Call Us Now : +233 571991014</Link>
          <p>
            <Link href="https://desmond-code.vercel.app/" target="_blank">
              Designed by dev_desmond
            </Link>
          </p>
        </div>
      </WidthConstraint>
    </footer>
  );
}
