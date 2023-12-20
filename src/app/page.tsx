import { UserButton, auth, currentUser } from "@clerk/nextjs";

export default async function Page() {
  const { userId } = auth()

  if (userId) {
    const user = await currentUser()
    console.log(user)
    return (
      <UserButton />
    )
  }
}