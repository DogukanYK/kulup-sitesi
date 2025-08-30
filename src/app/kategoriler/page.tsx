import { redirect } from "next/navigation";

export default function Page() {
  redirect("/oylama#kategoriler");
  return null;
}