import Link from "next/link";
import clsx from "clsx";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

/** Site paleti (tasarım kılavuzundaki renkler) */
const VARIANT_STYLES = {
  primary: "bg-[#0F2CE8] text-white hover:bg-[#0d26c9]",
  gold: "bg-[#E1BF30] text-black hover:bg-[#caa628]",
  maroon: "bg-[#8D2538] text-white hover:bg-[#731d2d]",
  neutral: "bg-black text-white hover:bg-neutral-800",
  outline: "bg-white text-black border border-gray-300 hover:bg-gray-50",
} as const;

type Variant = keyof typeof VARIANT_STYLES;
type Size = "sm" | "md" | "lg";

const SIZE_STYLES: Record<Size, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-[15px]",
  lg: "px-5 py-2.5 text-base",
};

/** Ortak props */
type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
};

/** Buton olarak kullanım */
type ButtonAsButton = ButtonHTMLAttributes<HTMLButtonElement> &
  CommonProps & { href?: undefined };

/** Link olarak kullanım */
type ButtonAsLink = AnchorHTMLAttributes<HTMLAnchorElement> &
  CommonProps & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

/** Tek bileşen: href varsa Link, yoksa button döndürür */
export default function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, ...rest } = props;

  const classes = clsx(
    "inline-flex items-center justify-center rounded-xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-white",
    VARIANT_STYLES[variant],
    SIZE_STYLES[size],
    className
  );

  if ("href" in props && props.href) {
    const { href, ...anchorRest } = props as ButtonAsLink;
    return <Link href={href} className={classes} {...anchorRest} />;
  }

  const buttonRest = rest as ButtonAsButton;
  return <button className={classes} {...buttonRest} />;
}