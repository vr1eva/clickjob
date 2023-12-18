import Image from "next/image"
export default function Page() {
  const skills = ["React", "JavaScript", "Next.js", "PostgreSQL", "Prisma", "Vue.js", "Figma", "GitHub", "Jira", "TypeScript", "Redux" ]
  return (
    <div className="flex flex-col items-center w-[320px] mx-auto mt-20 border">
       <Image
          src="/pp.png"
          alt="Profile picture"
          width={132}
          height={132}
          priority
        />
      <h1 className="text-lg font-bold text-indigo-900 text-center mt-8">Bruno G.</h1>
      <p className="text-lg font-medium text-indigo-200 text-center">Fullstack Developer</p>
      <div className="flex space-x-2 items-center mx-auto mt-6">
        <Image
            src="/flag.png"
            alt="Flag picture"
            width={27}
            height={16}
            priority
          />
        <span className="text-lg font-semibold text-gray-400">Perú</span>
      </div>
      <ul className="flex mt-7 flex-wrap justify-center gap-1	">
        {skills.map(skill => (
          <li className=" rounded-full bg-indigo-600 py-2 px-4 text-white text-lg" key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  )
}