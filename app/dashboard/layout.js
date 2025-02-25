"use client";
import Link from "next/link";
import Image from "next/image";
import { dashboard } from "@/constants";
import { usePathname } from "next/navigation";

export default function DashboardLayout({ children }) {
  const pathName = usePathname();

  return (
    <div className="flex min-h-screen rounded-xl">
      <aside className="hidden lg:flex pl-1 pr-2 bg-transparent lg:bg-[#1E3A8A] transition-all duration-500 cursor-pointer text-white font-bold flex-col items-center fixed left-0 top-0 bottom-0 justify-center gap-y-32">
        <nav className="flex flex-col gap-y-10">
          {dashboard.map((board, i) => {
            const isActive = pathName === board.link;
            return (
              <Link
                href={board.link}
                key={i}
                className={`${
                  isActive
                    ? "border-4 py-3 px-1 bg-[#37474F] rounded-lg border-[#22D1FF]"
                    : ""
                }  flex flex-col items-center gap-y-3 justify-center`}
              >
                <p className=" text-[9px] uppercase ">{board.name}</p>
                <Image
                  src={board.icon}
                  width={40}
                  height={40}
                  alt="Brand"
                  className="rounded-full"
                />
              </Link>
            );
          })}
        </nav>
      </aside>

      <main className="xl:max-w-full lg:max-w-[900px] mx-auto flex-1 items-center justify-center">
        {children}
      </main>
    </div>
  );
}
