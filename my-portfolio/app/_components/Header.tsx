import { cn } from "@/lib/utils"
import { GithubIcon } from "./icons/GithubIcon"
import { Section } from "./Section"
import  Link  from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { LinkedinIcon } from "./icons/LinkedinIcon"

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
                  className={cn(buttonVariants({ variant:"outline"}), "size-6 p-0")}>
                  <GithubIcon size={16} className="text-foreground"/>
               </Link>
               <Link
                  href="https://www.linkedin.com/in/eric-chillan"
               className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}>
               <LinkedinIcon size={16} className="text-foreground" />
            </Link>
            </ul> 
         </Section>
      </header>
   )
}