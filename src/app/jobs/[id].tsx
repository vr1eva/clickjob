import { getJob } from '@/lib/utils'
 
export const revalidate = 3600 // revalidate the data at most every hour
 
export default async function Page({
  params: { id },
}: {
  params: { id: string }
}) {
  const job = await getJob(parseInt(id))

  if(!job) return <h1>Whoopsie, we cant find that job rn.</h1>
  
  return ( 
    <div>hello {job.id}</div>
  )
}