"use client";

import React, { useEffect, useState } from "react";
import { projects } from "@/types/Project";
import { PinContainer } from "../ui/Pin";
import { FaLocationArrow } from "react-icons/fa";



export function RecentProjects() {
  const [projects, setProjects] = useState<projects[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('http://127.0.0.1:8000/projects/');
      const fetchedData: projects[] = await res.json();
      setProjects(fetchedData);
    }
    fetchData();
  }, []);

  return (
    <div className="flex justify-center items-center flex-col gap-16">
      <h3 className="heading text-5xl text-center">
        My{" "}
        <span className="text-Primary">recent projects</span>
      </h3>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8">
        {projects.map((item) => (
          <div
            key={item.id}
            className="sm:h-[41rem] h-[32rem] sm:w-[570px] lg:min-h-[32.5rem] flex items-center justify-center w-[80vw]"
          >
            <PinContainer title={item.main_url} href={item.main_url}>
              <div className="relative flex items-center justify-center sm:w-[570px] sm:h-[40vh] h-[30vh] w-[80vw] overflow-hidden lg:h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="z-10 absolute bottom-0"
                />
              </div>
              <h5 className="font-bold lg:text-2xl md:text-xl text-Primary line-clamp-1">
                {item.title}
              </h5>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {item.description}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.skills.map((skill) => (
                    <div 
                      key={skill.id} 
                      className="border border-white/[02] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5* skill.id * 2}px)`
                      }}
                    >
                      <img src={skill.icon} alt={skill.name} className="p-2"/>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center gap-2">
                  <p className="flex lg:text-xl md:text-xs text-sm text-MainText">Check Live</p>
                  <FaLocationArrow />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
}
