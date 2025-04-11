"use client";

import React, { useEffect, useState } from "react";
import { projects } from "@/types/Project";
import { Lamp } from "../ui/Lamp";



export function RecentProjects() {

  const [projects, setProjects] = useState<projects[]>([]);
  
  useEffect(() => {
    async function fetchData() {
      const res = await fetch('http://127.0.0.1:8000/projects/');
      const fetchedData = await res.json();
      setProjects(fetchedData);
    }
    fetchData();
  }, []);

  console.log(projects)

  return (
    <div>
      <Lamp />
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 -mt-10">
        {projects.map((item) => (
          <div>
            <p className="">
              { item.title }
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
