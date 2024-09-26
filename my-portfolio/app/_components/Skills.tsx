import { Code } from "./Code";
import { CssLogo } from "./icons/CssLogo";
import { HtmlLogo } from "./icons/HtmlLogo";
import { JavascriptLogo } from "./icons/JavascriptLogo";
import { ReactLogo } from "./icons/ReactLogo";
import { TailswindLogo } from "./icons/TailswindLogo";
import { Section } from "./Section";
import { Badge } from "@/components/ui/badge"

export const Skills = () => {
   return (
      <Section className="flex flex-col items-start gap-4">
         <Badge variant={"outline"}>Skills</Badge>
         <h2 className=" pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            I love working on ...
         </h2>
         <div className="flex max-md:flex-col gap-4">
            <div className="flex flex-col gap-2">
                  <ReactLogo
                  size={42}
                  className="animate-spin"
                  style={{ animationDuration: "10s" }} /> 
               <h3 className="text-2xl font-semibold tracking-tight mb-2 ">React</h3>
               <p className="text-sm text-muted-foreground ">My main framework is <Code>React</Code>. I also <Code>Next.js</Code> {"as a backend and frontend framework."}</p>
            </div> <div className="flex flex-col gap-2">
               <TailswindLogo
                  size={42}
               />
               <h3 className="text-2xl font-semibold tracking-tight mb-2 ">Tailwind</h3>
               <p className="text-sm text-muted-foreground ">My main framework is <Code>React</Code>. I also <Code>Next.js</Code> {"as a backend and frontend framework."}</p>
            </div>
            <div className="flex flex-col gap-2">
               <div className="flex gap-4">
                  <HtmlLogo
                     size={42}
                  />
                  <JavascriptLogo
                     size={42}
                  />
                  <CssLogo
                  size={42}
                  />
                  
               </div>
               <h3 className="text-2xl font-semibold tracking-tight mb-2 ">HTML / JAVASCRIPT / CSS</h3>
               <p className="text-sm text-muted-foreground ">J'ai débuté les bases en <Code>HTML</Code>,<Code>CSS
               </Code>  et<Code>JavaScript</Code>  pour créer des interfaces web dynamiques et responsives</p>
            </div> <div className="flex flex-col gap-2">
               
               <h3 className="text-2xl font-semibold tracking-tight mb-2 ">Marketing</h3>
               <p className="text-sm text-muted-foreground ">My main framework is <Code>React</Code>. I also <Code>Next.js</Code> {"as a backend and frontend framework."}</p>
            </div> <div className="flex flex-col gap-2">
               
               
            </div>
         </div>
      </Section>
   );
};
