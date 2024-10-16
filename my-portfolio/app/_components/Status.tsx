import { Card } from "@/components/ui/card";
import { Calculator, CookingPot, File, Gamepad, Gamepad2, IdCard, LucideIcon, Scroll, Sun } from 'lucide-react';
import Link from "next/link";
import { Code } from "./Code";
import { Section } from "./Section";
import { Work, WorkProps } from "./Work";



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
            <Card className="p-4 flex-1">
            <p className="text-lg text-muted-foreground">Work</p>
            <div className="flex flex-col gap-4">
               {WORKS.map((work, index) => (
                  <Work
                     key={index}
                     {...work}
                  />
               ))}
               </div>
            </Card>
         </div>
      </Section>
   );
};




const SIDE_PROJECTS:SideProjectProps[] = [
   {
      Logo: CookingPot,
      title: "Cook-your-way",
      description: <p>Un projet <Code>KOTLIN</Code> qui créer une application mobile de cuisine sans API en utilisant une base de données avec firebase.</p> ,
      url: "https://github.com/eric97278/Cook-your-way"
   },
   {
      Logo: Scroll,
      title: "To-Do-List",
      description: <p>Un code en <Code>HTML,JS,CSS</Code> donnant une TO-DO-LIST, un projet proposé par chatgpt.</p>,
      url: "https://github.com/eric97278/To-Do-List"
   },
   {
      Logo: Calculator,
      title: "Calculator",
      description: <p>Un projet tout droit sorti de chatgpt pour créer une calculatrice en <Code>HTML, JS, CSS</Code></p>,
      url: "https://github.com/eric97278/calculator"
   },
   {
      Logo: Sun,
      title: "Projet-météo",
      description: <p>Un projet collectif pour se faire la main avec les <Code>API</Code>, ce projet en <Code>HTML, JS et CSS</Code>utilise une API météo ainsi que l'API de spotify proposant une playlist selon la météo et mettant en place des animations climatique</p>,
      url: "https://github.com/eric97278/projet-API"
   },
   {
      Logo: File,
      title: "CV",
      description: <p>Ceci est projet personnelle, pour créer un CV en utilisant principalement du <Code>CSS</Code> .</p>,
      url: "https://github.com/eric97278/cv"
   },
   {
      Logo: IdCard,
      title: "carte de visite",
      description: <p>Idem que le CV mais pour une carte de visite.</p>,
      url: "https://github.com/eric97278/Carte-de-visite"
   },
   {
      Logo: Gamepad,
      title: "Froggy",
      description: <p>Notres tout premier projet collectif, un jeux de plateformes avec pico-8 en <Code>LUA</Code></p>,
      url: "Lorem ipsum dolor sit amet consectetur adipisicing."
   },
   {
      Logo: Gamepad2,
      title: "Tape le lapin",
      description: <p>Un tuto YouTube suivi pour me familiariser avec kotlin et Android studio</p>,
      url: "Lorem ipsum dolor sit amet consectetur adipisicing."
   }
]

type SideProjectProps = {
   Logo: LucideIcon;
   title: string;
   description: string;
   url: string;
}

const SideProject = (props: SideProjectProps) => {
   
   return (
      <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
         <span className="bg-accent text-accent-foreground p-3 rounded-sm">
            <props.Logo size={16} />
         </span>
         <div>
            <p className="text-lg font-semibold">{props.title}</p>
            <p className="text-sm text-muted-foreground">{props.description}</p>
         </div>
      </Link>
   );
};

const WORKS: WorkProps[] = [{
   image: "https://th.bing.com/th/id/OIP.zVFvjnlWhsK_5rNddfWfDQHaHa?w=168&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
   title: "l'Oréal",
   role: "Agent de fabrication",
   date: "2022-2023",
   url: "https://l'oréal.com",
   contrat:"intérim",
},
   {
      image: "https://th.bing.com/th/id/OIP.sI38R1RioFl_NF4u4fiF8wHaHa?w=184&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      title: "FLC télécom",
      role: "Monteur cableur",
      date: "2022-2023",
      url: "https://l'oréal.com",
      contrat: "CDI",
   },
   {
      image: "https://media-exp1.licdn.com/dms/image/C560BAQGP8erPosNMsw/company-logo_200_200/0/1532440149837?e=2159024400&v=beta&t=1Btcso_I4UQd8mrOCJ0eeUii1xBNFLF9UlDiIlrHRf8",
      title: "Legendre",
      role: "Préparateur de commandes",
      date: "2022-2023",
      url: "https://l'oréal.com",
      contrat: "intérim",
   },
   ,
   {
      image: "https://th.bing.com/th/id/OIP.gg7PXxCyzZ6SuGbaT5UpXgHaD4?w=326&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      title: "Fiabila",
      role: "Agent de fabrication",
      date: "2022-2023",
      url: "https://l'oréal.com",
      contrat: "CDI",
   },
   ,
   {
      image: "https://th.bing.com/th/id/OIP.6IA3JYj9tixYW9GvfnkSxgHaHT?w=164&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      title: "Centre de loisirs",
      role: "Animateurs",
      date: "2022-2023",
      url: "https://l'oréal.com",
      contrat: "CDI",
   },
];



