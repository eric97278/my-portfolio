/* eslint-disable @next/next/no-img-element */
import { Section } from "./Section";



export const Hero = () => {
   return <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] flex flex-col gap-2">
         <h2 className="font-caption font-bold text-5xl text-primary">Chillan Eric</h2>
         <h3 className="text-3xl font-caption">
            Developpeur Full-Stack en recherche alternance</h3>
         <p className="text-base">
            <a href="" download="CV.pdf">Télécharge mon CV</a>
            </p>
      </div>
      <div className="flex-[2] max-md:m-auto ml-auto">
         <img
            src= "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg"
            className="w-full h-auto max-w-xs max-w-xs max-md:w-56 "
            alt="eric's picture"
         />
      </div>
   </Section>
}