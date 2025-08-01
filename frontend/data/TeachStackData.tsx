import { ReactNode } from "react";

import { FaReact, FaPython, FaDocker, FaAws } from "react-icons/fa";
import { TbBrandDjango, TbBrandJavascript, TbBrandTypescript, TbBrandMysql } from "react-icons/tb";
import {
    SiNextdotjs,
    SiTailwindcss,
    SiDjango,
    SiPostgresql,
    SiGraphql,
    SiGithubactions,
    SiVercel,
} from "react-icons/si";

import { TechStackCardData } from "@/components/TechStackCard";




export const techStacksData: TechStackCardData[] = [
  {
    title: "Frontend",
    description:
      "Building responsive, component-driven UIs with React, Next.js, and utility-first CSS for pixel-perfect experiences.",
    skills: [
      {
        name: "React",
        icon: <FaReact />,
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs />,
      },
      {
        name: "JavaScript",
        icon: <TbBrandJavascript />,
      },
      {
        name: "TypeScript",
        icon: <TbBrandTypescript  />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
      },
    ],
  },
  {
    title: "Backend",
    description:
      "Designing and scaling RESTful APIs and data layers with Django, DRF, and PostgreSQL for robust, maintainable services.",
    skills: [
      {
        name: "Django",
        icon: <SiDjango />,
      },
      {
        name: "Django REST Framework",
        icon: <TbBrandDjango />,
      },
      {
        name: "MySql",
        icon: <TbBrandMysql />,
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql />,
      },
      {
        name: "Python",
        icon: <FaPython />,
      },
    ],
  },
  {
    title: "DevOps",
    description:
      "Implementing containerization and CI/CD pipelines with Docker, GitHub Actions, and cloud providers for seamless delivery.",
    skills: [
      {
        name: "Docker",
        icon: <FaDocker />,
      },
      {
        name: "GitHub Actions",
        icon: <SiGithubactions />,
      },
      {
        name: "AWS",
        icon: <FaAws />,
      },
      {
        name: "Vercel",
        icon: <SiVercel />,
      },
    ],
  },
];
