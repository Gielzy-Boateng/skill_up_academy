import { cn } from "@/lib/utils";
import Link from "next/link";

export default function CustomButton({ children, btn, linkBtn, className }) {
  return (
    <div>
      {btn ? (
        <button className={cn("px-6 py-4 text-black bg-blue-500", className)}>
          {children}
        </button>
      ) : (
        <Link className={cn("px-6 py-4 text-black bg-blue-500", className)}>
          {children}
        </Link>
      )}
    </div>
  );
}
