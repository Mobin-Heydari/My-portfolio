import { CardSpotlight } from "./ui/CardSpotlight";


interface Skill {
  name: string;
  icon?: React.ReactNode;
}

export interface TechStackCardData {
  title: string;
  description: string;
  skills: Skill[]
}


export function TechStackCard(data: TechStackCardData) {
  return (
    <CardSpotlight className="h-96 w-96">
      <p className="text-xl text-center font-bold relative z-20 mt-2 bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r from-primary-light via-main-text-light to-secondary-light dark:from-primary-dark dark:via-main-text-dark dark:to-secondary-dark">
        {data.title}
      </p>
      <div className="mt-4 relative z-20">
        <p className="text-main-text-light dark:text-main-text-dark">
          The most valuble skills that i got in {data.title}:
        </p>
        <ul className="list-none  mt-2">
          {data.skills.map((skill) => (
            <Skill name={skill.name} key={skill.name} icon={skill.icon}/>
          ))}
        </ul>
      </div>
      <p className="mt-4 relative z-20 text-sm">
        {data.description}
      </p>
    </CardSpotlight>
  );
}

const Skill = (skill: Skill) => {
  return (
    <li className="flex gap-3 items-start text-main-text-light hover:text-hover-light dark:text-main-text-dark dark:hover:text-hover-dark cursor-pointer">
      {skill.icon}
      <p>{skill.name}</p>
    </li>
  );
};

