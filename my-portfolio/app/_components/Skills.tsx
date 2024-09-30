import { Badge } from "@/components/ui/badge";
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
import { Card } from "@/components/ui/card";

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
               <p className="text-sm text-muted-foreground ">Lors de mes projets personnels, j'ai eu l'occasion d'utiliser React pour développer des interfaces utilisateur dynamiques et interactives. Grâce à <Code>React</Code>, j'ai pu créer des composants réutilisables et gérer l'état de l'application de manière efficace, ce qui m'a permis de développer des applications fluides et réactives. Cette expérience m'a également aidé à comprendre les concepts fondamentaux de la programmation en JavaScript et à me familiariser avec des outils complémentaires comme Redux pour la gestion de l'état. En travaillant sur ces projets, j'ai pu approfondir mes compétences en développement front-end et concevoir des expériences utilisateur optimisées.</p>
            </div>
            <div className="flex flex-col gap-2">
               <TailswindLogo
                  size={42}
               />
               <h3 className="text-2xl font-semibold tracking-tight mb-2 ">Tailwind</h3>
               <p className="text-sm text-muted-foreground ">Dans mes projets personnels, j'ai utilisé <Code>Tailwind CSS</Code> pour styliser mes applications web. Grâce à cette bibliothèque utilitaire, j'ai pu créer des designs réactifs et modernes en appliquant des classes CSS directement dans le code <Code>HTML</Code>. Cette approche m'a permis de gagner en rapidité et en flexibilité, tout en maintenant un code propre et bien structuré. L'utilisation de Tailwind a également renforcé mes compétences en design et en conception d'interfaces utilisateur, me permettant de créer des expériences visuelles attrayantes et intuitives pour les utilisateurs.</p>
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
               <p className="text-sm text-muted-foreground ">J'ai appris les bases du développement à travers les langages <Code>HTML</Code>, <Code>JavaScript</Code> et<Code>CSS</Code> . Ces technologies fondamentales m'ont permis de comprendre les concepts de structuration de contenu, de style et d'interactivité sur le web. Avec HTML, j'ai pu créer la structure de mes pages web, tandis que CSS m'a aidé à les styliser de manière attrayante et responsive. JavaScript, quant à lui, m'a permis d'ajouter de l'interactivité et de manipuler le contenu dynamique de mes applications. Ensemble, ces langages m'ont fourni une solide base pour développer des projets web efficaces et modernes.</p>
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
               <p className="text-sm text-muted-foreground ">Au cours de ma formation en développement, j'ai eu l'opportunité de participer à plusieurs projets collectifs où j'ai utilisé la stack <Code>PHP</Code>, <Code>Laravel</Code> et <Code>MySQL</Code>. Ces projets m'ont permis de développer des applications web robustes, en utilisant Laravel pour la gestion des routes, l'authentification, et la structuration des bases de données relationnelles avec MySQL. Cette expérience m'a également permis de collaborer efficacement en équipe, tout en mettant en place des fonctionnalités complexes côté serveur et en intégrant des bases de données performantes.</p>
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
               <p className="text-sm text-muted-foreground ">J'ai acquis des compétences en développement mobile grâce à <Code>Kotlin</Code> et <Code>Android Studio</Code> . En utilisant Kotlin, j'ai pu développer des applications Android modernes et performantes, tirant parti de ses fonctionnalités telles que la concision et la sécurité des types. Android Studio, en tant qu'environnement de développement intégré <Code>IDE</Code>, m'a fourni des outils puissants pour concevoir, tester et déployer mes applications. Cette combinaison m'a permis de créer des applications intuitives et réactives, tout en me familiarisant avec les bonnes pratiques du développement mobile.</p>
            </div>
               </div>
               </Card>
            </div>
      </Section>
   );
};
