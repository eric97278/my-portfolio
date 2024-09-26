import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { LucideIcon, Scroll, Calculator, Sun, CookingPot, File, IdCard, Gamepad, Gamepad2 } from 'lucide-react';
import Link from "next/link";

export const Status = () => {
   return (
      <Section className="flex max-md:flex-col items-start gap-4">
         <div className="flex-[3] w-full">
            <Card className=" p-4 w-full flex flex-col gap-2 w-ful">
               <p className="text-lg text-muted-foreground">Side, fun projects</p>
               <div className="flex flex-col gap-4">
                  {SIDE_PROJECTS.map((project, index) => (
                     <SideProject
                        key={index}
                        Logo={project.Logo}
                        title={project.title}
                        description={project.description}
                        url="/"
                     />
                  ))}
               </div>
            </Card>
         </div>
         <div className="flex-[2] w-full flex flex-col gap-4">
            <Card className="p-4 flex-1">Work</Card>
            <Card className="p-4 flex-1">Contact me</Card>
         </div>
      </Section>
   );
};


const SIDE_PROJECTS = [
   {
      Logo: CookingPot,
      title: "Cook-your-way",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ratione",
      url: "Lorem ipsum dolor sit amet consectetur adipisicing."
   },
   {
      Logo: Scroll,
      title: "To-Do-List",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ratione",
      url: "Lorem ipsum dolor sit amet consectetur adipisicing."
   },
   {
      Logo: Calculator,
      title: "Calculator",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ratione",
      url: "Lorem ipsum dolor sit amet consectetur adipisicing."
   },
   {
      Logo: Sun,
      title: "Projet-météo",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ratione",
      url: "Lorem ipsum dolor sit amet consectetur adipisicing."
   },
   {
      Logo: File,
      title: "CV",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ratione",
      url: "Lorem ipsum dolor sit amet consectetur adipisicing."
   },
   {
      Logo: IdCard,
      title: "carte de visite",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ratione",
      url: "Lorem ipsum dolor sit amet consectetur adipisicing."
   },
   {
      Logo: Gamepad,
      title: "Froggy",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ratione",
      url: "Lorem ipsum dolor sit amet consectetur adipisicing."
   },
   {
      Logo: Gamepad2,
      title: "Tape le lapin",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ratione",
      url: "Lorem ipsum dolor sit amet consectetur adipisicing."
   }
]

type SideProjectProps = {
   Logo: LucideIcon;
   title: string;
   description: string;
   url: string;
}

const SideProject = (props:SideProjectProps)=> {
   
   return (
      <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
         <span className="bg-accent text-accent-foreground p-3 rounded-sm">
            <props.Logo />
         </span>
         <div>
            <p className="text-lg font-semibold">{props.title}</p>
            <p className="text-sm text-muted-foreground">{props.description}</p>
         </div>
      </Link>
   );
}
