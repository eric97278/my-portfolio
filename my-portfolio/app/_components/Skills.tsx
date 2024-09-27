import { Code } from "./Code";
import { AndroidStudioIcon } from "./icons/AndroidStudioLogo";
import { CssLogo } from "./icons/CssLogo";
import { HtmlLogo } from "./icons/HtmlLogo";
import { JavascriptLogo } from "./icons/JavascriptLogo";
import { KotlinLogo } from "./icons/KotlinLogo";
import { LaravelLogo } from "./icons/LaravelLogo";
import { MysqlLogo } from "./icons/MysqlLogo";
import { PhpLogo } from "./icons/PhpLogo";
import { ReactLogo } from "./icons/ReactLogo";
import { TailswindLogo } from "./icons/TailswindLogo";
import { Section } from "./Section";
import { Badge } from "@/components/ui/badge";

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
            </div>
            <div className="flex flex-col gap-2">
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
            </div> 
            <div className="flex flex-col gap-2">
            <div className="flex gap-4">
               <PhpLogo
                  size={42}
               />
               <LaravelLogo
                  size={42}
               />
               <MysqlLogo
                  size={42}
                  /> 
               </div>
               <h3 className="text-2xl font-semibold tracking-tight mb-2 ">PHP / LARAVEL / MYSQL</h3>
               <p className="text-sm text-muted-foreground ">Lors de ma formation chez <Code>Ada Tech School</Code>, j'ai fais des projet en <Code>Php</Code>avec son framework <Code>Laravel</Code>  en utilisant comme base de données <Code>Mysql</Code> .</p>
            </div>
            <div className="flex flex-col gap-2">
               <div className="flex gap-4">
                  <KotlinLogo
                     size={42}
                  />
                  <AndroidStudioIcon
                     size={42}
                  />
               </div>
               <h3 className="text-2xl font-semibold tracking-tight mb-2 ">Kotlin / Android studio</h3>
               <p className="text-sm text-muted-foreground ">j'adore utiliser le langage <Code>Kotlin</Code>avec l'IDE de <Code>Android studio</Code> mon premier projet avec cette techno est, une application de cuisine <Code>Cook-your-way</Code> .</p>
            </div>
            </div>
      </Section>
   );
};
