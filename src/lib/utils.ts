import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { cache } from "react"
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getJobs = cache(async () => {
  const jobs = await prisma.job.findMany()
  return jobs
})

export const getProfile = cache(async (id: number) => {
  const profile = await prisma.account.findUnique({
    where: {
      id
    }
  })
  return profile
})

export const getJob = cache(async (id: number) => {
  const job = await prisma.job.findUnique({
    where: {
      id
    },
    include: {
      postedBy: true
    }
  })
  return job
})