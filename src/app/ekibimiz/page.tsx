import { redirect } from "next/navigation";

export default function Page() {
  redirect("/hakkimizda#ekibimiz");
  return null;
}