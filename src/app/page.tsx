import { UserButton, auth } from "@clerk/nextjs";
import { permanentRedirect } from "next/navigation";

export default async function Page() {
  const { userId } = auth()

  if (userId) {
    permanentRedirect("/jobs")
  } else {
    permanentRedirect("/sign-in")
  }
}