import { cn } from "@/lib/utils";
import Link from "next/link";

export default function CustomButton({ children, btn, href, className }) {
  return (
    <div>
      {btn ? (
        <button className={cn("px-6 py-4 text-black bg-blue-500", className)}>
          {children}
        </button>
      ) : (
        <Link
          href={href}
          className={cn("px-6 py-4 text-black bg-blue-500", className)}
        >
          {children}
        </Link>
      )}
    </div>
  );
}
