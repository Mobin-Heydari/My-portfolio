import { skills } from "./Skill";


export interface projects {

  id: number;
  title: string;
  slug: string;
  description: string;

  image: string;
  banner: string;
  video: string;

  github: string;
  main_url: string;

  project_status: string;

  is_published: boolean;

  published_date: Date;
  updated_at: Date;
  created_at: Date;

  skills: skills;
}