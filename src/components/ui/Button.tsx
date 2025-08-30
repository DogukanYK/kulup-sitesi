import Link from "next/link";

type Variant = "primary" | "maroon" | "warning" | "gray" | "white";

const variants: Record<Variant, string> = {
  primary: "bg-[#0F2CE8] text-white hover:bg-[#0d26c7]",
  maroon:  "bg-[#8D2538] text-white hover:bg-[#731d2d]",
  warning: "bg-[#E1BF30] text-black hover:bg-[#caa628]",
  gray:    "bg-[#C4C2C2] text-black hover:bg-[#a7a5a5]",
  white:   "bg-white text-black hover:bg-gray-100",
};

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
};

export function Button({ href, children, variant = "primary", className = "" }: Props) {
  return (
    <Link
      href={href}
      className={`px-3 py-1 rounded-md text-sm font-semibold transition ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}