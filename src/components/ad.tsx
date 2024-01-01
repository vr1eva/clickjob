import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import Link from "next/link"
import {Job} from "@prisma/client"

interface AdProps {
    job: Job;
  }

export default function Ad({job}:AdProps)  {
    return (
     <Link href={"/jobs/"+job.id}>
        <Card>
  <CardHeader>
    <CardTitle>{job.title}</CardTitle>
    <CardDescription>{job.description}</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Posted by <Link href={"/profile/"+job.postedById}>{job.postedById}</Link></p>
  </CardContent>
  <CardFooter>
    <p>{job.location}</p>
  </CardFooter>
</Card></Link>
    )
}