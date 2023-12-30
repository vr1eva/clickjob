import { getProfile } from '@/lib/utils'
 
export const revalidate = 3600 // revalidate the data at most every hour
 
export default async function Page({
  params: { id },
}: {
  params: { id: string }
}) {
  const profile = await getProfile(parseInt(id))

  if(!profile) return <h1>Whoopsie, we cant find that profile rn.</h1>
  
  return ( 
    <div>hello {profile.id}</div>
  )
}