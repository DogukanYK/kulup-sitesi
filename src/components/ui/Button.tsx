"use client";

import Link from "next/link";
import { ButtonHTMLAttributes } from "react";

// clsx yerine kendi küçük helper fonksiyonumuz
function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

type Variant = "primary" | "vote" | "about" | "neutral";
type Size = "sm" | "md" | "lg";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
};

type ButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type LinkButtonProps = CommonProps & {
  href: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function Button(props: ButtonProps | LinkButtonProps) {
  const { variant = "primary", size = "md", className, ...rest } = props as any;

  const base =
    "inline-flex items-center justify-center font-semibold rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const sizes: Record<Size, string> = {
    sm: "text-sm px-3 py-1.5",
    md: "text-sm px-4 py-2",
    lg: "text-base px-5 py-2.5",
  };

  const variants: Record<Variant, string> = {
    primary:
      "bg-[#0F2CE8] text-white hover:bg-[#0c23b7] focus:ring-[#0F2CE8]/40", // mavi
    vote:
      "bg-[#E1BF30] text-black hover:bg-[#cda72a] focus:ring-[#E1BF30]/40", // sarı
    about:
      "bg-[#8D2538] text-white hover:bg-[#731f2e] focus:ring-[#8D2538]/40", // bordo
    neutral:
      "bg-[#C4C2C2] text-black hover:bg-[#b7b5b5] focus:ring-[#C4C2C2]/40", // gri
  };

  const classes = cn(base, sizes[size], variants[variant], className);

  if ("href" in props && props.href) {
    const { href, ...aRest } = rest;
    return (
      <Link href={props.href} className={classes} {...(aRest as any)} />
    );
  }

  return <button className={classes} {...(rest as any)} />;
}

export default Button;