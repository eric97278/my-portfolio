import { Card } from "@/components/ui/card";
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

export const Skills = () => {
   return (
      <Section className="flex max-md:flex-col items-start gap-4 ">
         <div className="flex-[3] w-full">
            <Card className=" p-4 w-full flex flex-col gap-2 w-ful">
         <p className="text-lg text-muted-foreground">Skills</p>
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
                     <p className="text-sm text-muted-foreground ">
                        J'ai utilisé React pour créer des interfaces dynamiques et interactives, en développant des composants réutilisables et en gérant efficacement l'état de l'application. Cette expérience m'a permis de renforcer mes compétences en développement front-end, en comprenant mieux JavaScript et en utilisant des outils comme Redux pour la gestion de l'état.
                     </p>

            </div>
            <div className="flex flex-col gap-2">
               <TailswindLogo
                  size={42}
               />
               <h3 className="text-2xl font-semibold tracking-tight mb-2 ">Tailwind</h3>
                     <p className="text-sm text-muted-foreground ">
                        Dans mes projets personnels, j'ai utilisé <Code>Tailwind CSS</Code> pour styliser mes applications web, ce qui m'a permis de créer des designs réactifs et modernes en appliquant des classes CSS dans le code <Code>HTML</Code>. Cette méthode a amélioré ma rapidité et ma flexibilité, tout en maintenant un code propre. L'utilisation de Tailwind a renforcé mes compétences en design, me permettant de concevoir des interfaces visuelles attrayantes et intuitives.
                     </p>

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
                     <p className="text-sm text-muted-foreground ">
                        J'ai appris les bases du développement avec <Code>HTML</Code>, <Code>JavaScript</Code> et <Code>CSS</Code>. Ces technologies fondamentales m'ont permis de structurer le contenu, de styliser mes pages de manière responsive et d'ajouter de l'interactivité. Ensemble, elles m'ont fourni une solide base pour développer des projets web efficaces et modernes.
                     </p>

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
                     <p className="text-sm text-muted-foreground ">
                        Au cours de ma formation, j'ai participé à plusieurs projets collectifs en utilisant la stack <Code>PHP</Code>, <Code>Laravel</Code> et <Code>MySQL</Code>. J'ai développé des applications web robustes, gérant les routes et l'authentification avec Laravel et structurant les bases de données avec MySQL. Cette expérience m'a permis de collaborer efficacement en équipe tout en intégrant des fonctionnalités complexes côté serveur.
                     </p>

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
                     <p className="text-sm text-muted-foreground ">
                        J'ai acquis des compétences en développement mobile avec <Code>Kotlin</Code> et <Code>Android Studio</Code>. Grâce à Kotlin, j'ai développé des applications Android modernes en profitant de sa concision et de sa sécurité des types. Android Studio, en tant qu'<Code>IDE</Code>, m'a fourni des outils pour concevoir, tester et déployer mes applications, me permettant ainsi de créer des applications intuitives et réactives tout en apprenant les bonnes pratiques du développement mobile.
                     </p>

            </div>
               </div>
               </Card>
            </div>
      </Section>
   );
};
