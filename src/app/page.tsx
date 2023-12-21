import { UserButton, auth } from "@clerk/nextjs";
import { permanentRedirect } from "next/navigation";

export default async function Page() {
  const { userId } = auth()

  if (userId) {
    return (
      <UserButton />
    )
  } else {
    permanentRedirect("/sign-in")
  }
}