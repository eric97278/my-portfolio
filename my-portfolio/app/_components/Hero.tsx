/* eslint-disable @next/next/no-img-element */
import { ComponentPropsWithoutRef } from "react"
import { Section } from "./Section"
import { cn } from "@/lib/utils"
import { AndroidIcon } from "./icons/AndroidIcon";
import Link from "next/link";

const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
   return (
      <span
         className={cn("bg-accent/30 font-mono border hover:bg-accent/50 transition-colors border-accent px-1 py-0.5 text-primary rounded-sm", className)}
         {...props}
      />
   );
};

export const Hero = () => {
   return <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[2] flex flex-col gap-2">
         <h2 className="font-caption font-bold text-5xl text-primary">Chillan Eric</h2>
         <h3 className="text-3xl font-caption">
            Developpeur Full-Stack en recherche alternance</h3>
         <p className="text-base">
            I love creating apps with {" "}
            <Link href="https://github.com/eric97278/Cook-your-way">
            <Code className="inline-flex items-center"><AndroidIcon size={16} className="inline"
               />
                  Kotlin
               </Code>
            </Link>
         </p>
      </div>
      <div className="flex-1 max-md:m-auto ml-auto">
         <img
            src= "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg"
            className="w-full h-auto max-w-xs max-w-xs max-md:w-56 "
            alt="eric's picture"
         />
      </div>
   </Section>
}