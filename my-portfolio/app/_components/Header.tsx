import { cn } from "@/lib/utils"
import { GithubIcon } from "./icons/GithubIcon"
import { Section } from "./Section"
import  Link  from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { LinkedinIcon } from "./icons/LinkedinIcon"
import { SiBento } from "react-icons/si";
import { Code } from "./Code"

export const Header = () => {
   return (
      <header className="sticky top-0 py-4">
         <Section className="flex items-baseline">
            <h1 className="text-lg font-bold text-primary">Mon Portfolio
            </h1>
            <div className="flex-1" />
            <ul className="flex items-center gap-2 text-white">
               <Link
                  href="https://github.com/eric97278"
                  className={cn(buttonVariants({ variant:"outline"}), "size-10 p-0")}>
                  <GithubIcon size={24} className="text-foreground"/>
               </Link>
               <Link
                  href="https://www.linkedin.com/in/eric-chillan"
               className={cn(buttonVariants({ variant: "outline" }), "size-10 p-0")}>
               <LinkedinIcon size={26} className="text-foreground" />
               </Link>
               <Link
                  href="https://bento.me/eric972"
                  className={cn(buttonVariants({ variant: "outline" }), "size-10 p-0")}>
                  <SiBento  size={26} className="text-foreground" />
               </Link>
               <a href="mailTo:ericchillan@gmail.com"><Code>M'envoyer un message?</Code></a>
            </ul> 
         </Section>
      </header>
   )
}