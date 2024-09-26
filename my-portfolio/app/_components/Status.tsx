import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { LucideIcon, Scroll, Calculator, Sun, CookingPot, File, IdCard, Gamepad, Gamepad2, } from 'lucide-react';
import Link from "next/link";
import { Badge } from "@/components/ui/badge"



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
         <Card className="p-4 flex-1">
            <p className="text-lg text-muted-foreground">Contact me</p>
         </Card>
      </Section>
   );
};

const ContactCard = (props: {
   image: string;
   mediumImage: string;
   name: string;
   description: string;
}) => {
   return (
      <Card className="p-3 bg-accent/10">
         <div className="relative">
            <img src={props.image} alt={props.name} className="w-10 h-10" />
            <img src={props.mediumImage} alt={props.name} className="w-4 h-4 absolute -bottom-2 -right-2" />

         </div>
      </Card>
   )
 };



const SIDE_PROJECTS:SideProjectProps[] = [
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
   intérim:true,
},
   {
      image: "https://th.bing.com/th/id/OIP.sI38R1RioFl_NF4u4fiF8wHaHa?w=184&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      title: "FLC télécom",
      role: "Monteur cableur",
      date: "2022-2023",
      url: "https://l'oréal.com",
      intérim: false,
   },
   {
      image: "https://media-exp1.licdn.com/dms/image/C560BAQGP8erPosNMsw/company-logo_200_200/0/1532440149837?e=2159024400&v=beta&t=1Btcso_I4UQd8mrOCJ0eeUii1xBNFLF9UlDiIlrHRf8",
      title: "Legendre",
      role: "Préparateur de commandes",
      date: "2022-2023",
      url: "https://l'oréal.com",
      intérim: true,
   },
];

type WorkProps = {
   image:string;
   title: string;
   role: string;
   date: string;
   url: string;
   intérim?: boolean;
}

const Work = (props: WorkProps) => {

   return (
      <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
            <img src={props.image} alt={props.title} className="w-10 h-10 object-contain rounded-lg " />
         <div className="mr-auto">
            <div className="flex items-center gap-2">
            <p className="text-lg font-semibold">{props.title}</p>
               {props.intérim && <Badge variant="outline">intérim</Badge>
}
            </div>
            <p className="text-xs text-muted-foreground">{props.role}</p>
         </div>
            <p className="text-xs text-end text-muted-foreground">{props.date}</p>
      </Link>
   );
}

