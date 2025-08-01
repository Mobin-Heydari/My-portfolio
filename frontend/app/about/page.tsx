import { CareerTimeLine } from "@/components/CareerTimeLine";
import { TechStackCard } from "@/components/TechStackCard";
import { ShootingStars } from "@/components/ui/ShootingStars";
import { Spotlight } from "@/components/ui/SpotlightNew";
import { StarsBackground } from "@/components/ui/StarsBackground";

import { techStacksData } from "@/data/TeachStackData";



export default function About() {
  return (
    <main className='relative flex justify-between gap-6 items-center flex-col mx-auto'>
        <section className="h-[30rem] w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <Spotlight />
            <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
                <h1 className="text-center md:mt-10 my-5 text-4xl bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-primary-light via-main-text-light to-secondary-light dark:from-primary-dark dark:via-main-text-dark dark:to-secondary-dark  [text-shadow:0_0_rgba(0,0,0,0.1)] font-bold">
                  Who I Am
                </h1>
                <p className="mt-4 font-normal text-base text-main-text-light dark:text-main-text-dark max-w-lg text-center mx-auto">
                    I’m Mobin, a full-stack developer with a passion for crafting seamless, interactive web experiences. I thrive at the intersection of frontend polish and backend robustness, always striving to bridge design and architecture in a way that delights users and scales effortlessly.
                </p>
            </div>
        </section>
        <section className="h-full rounded-md flex flex-col gap-5 items-center justify-center relative w-full">
          <h2 className="text-center md:mt-10 my-5 text-4xl bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-primary-light via-main-text-light to-secondary-light dark:from-primary-dark dark:via-main-text-dark dark:to-secondary-dark  [text-shadow:0_0_rgba(0,0,0,0.1)] font-bold">
            <span>My Tech Stack</span>
          </h2>
          <ShootingStars />
          <StarsBackground />
          <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 -sm:grid-cols-1 gap-7">
            {techStacksData.map((stack) => (
              <TechStackCard
                key={stack.title}
                title={stack.title}
                description={stack.description}
                skills={stack.skills}
              />
            ))}
          </div>
        </section>
        <section className="flex flex-col justify-center w-full">
          <CareerTimeLine />
        </section>
    </main>
  )
}
