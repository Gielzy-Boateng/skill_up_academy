import Link from "next/link";
import Image from "next/image";
import { dashboard } from "@/constants";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen rounded-xl">
      <aside className=" flex bg-transparent lg:bg-[#1E3A8A] text-white font-bold flex-col items-center fixed left-0 top-0 bottom-0 justify-center gap-y-32">
        <nav className="hidden lg:flex flex-col gap-y-10">
          {dashboard.map((board, i) => (
            <Link href={board.link} key={i}>
              <Image
                src={board.icon}
                width={40}
                height={40}
                alt="Brand"
                className="rounded-full"
              />
            </Link>
          ))}
        </nav>
        <Image
          src="/assets/home/logo.jpg"
          width={50}
          height={50}
          alt="Brand"
          className="rounded-full hidden"
        />
      </aside>

      <main className="flex-1 items-center justify-center">{children}</main>
    </div>
  );
}
