/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";
import { Section } from "./Section";



export const Head = () => {
   return <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full">
         <Card className=" p-4 w-full flex flex-col gap-2 w-ful">
            <div className="text-lg text-muted-foreground">
         <h2 className="font-caption font-bold text-5xl text-primary">Chillan Eric</h2>
         <h3 className="text-3xl font-caption">
                  Developpeur Full-Stack en recherche alternance</h3>
               
         <p>Je suis actuellement en formation à Ada Tech School, une école pionnière dans l'apprentissage inclusif des métiers de la tech. Je recherche une alternance en tant que développeur Full Stack pour mettre en pratique mes compétences acquises en développement web, et continuer à évoluer dans un environnement professionnel stimulant. Motivé par l'innovation et le travail en équipe, je suis prêt à contribuer à des projets ambitieux tout en continuant à me former au sein d'une entreprise dynamique.</p>
      </div>
      <div className="flex-[2] max-md:m-auto ml-auto">
         <img
            src= "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg"
            className="w-full h-auto max-w-xs max-w-xs max-md:w-56 "
            alt="eric's picture"
               />
               <h4 className="text-base">
                  <a href="/cv" download >Télécharge mon CV</a>
               </h4>
               </div>
               </Card>
      </div>
   </Section>
}