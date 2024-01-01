import {getJobs} from "@/lib/utils"
import Ad from "@/components/ad"

export default async function Page() {
const jobs = await getJobs()

return <main>
    {jobs.map(job => (
        <Ad job={job} key={job.id} />
    ))}
</main>
}