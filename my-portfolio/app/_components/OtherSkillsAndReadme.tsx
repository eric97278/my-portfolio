import { Card } from "@/components/ui/card";
import { Readme } from "./Readme";

// Importation des logos
import { BsBootstrapFill } from "react-icons/bs";
import { DiDjango } from "react-icons/di";
import { FaPython, FaTrello } from "react-icons/fa";
import { SiApachemaven, SiCanva, SiGradle } from "react-icons/si";
import { VscTerminalLinux } from "react-icons/vsc";
import { CssLogo } from "./icons/CssLogo";
import { DockerLogo } from "./icons/DockerLogo";
import { FigmaLogo } from "./icons/FigmaLogo";
import { GithubIcon } from "./icons/GithubIcon";
import { HtmlLogo } from "./icons/HtmlLogo";
import { JavascriptLogo } from "./icons/JavascriptLogo";
import { KotlinLogo } from "./icons/KotlinLogo";
import { LaravelLogo } from "./icons/LaravelLogo";
import { LuaLogo } from "./icons/LuaLogo";
import { MysqlLogo } from "./icons/MysqlLogo";
import { NextLogo } from "./icons/Next-jsLogo";
import { NodeJsLogo } from "./icons/Node-jsLogo";
import { NotionLogo } from "./icons/NotionLogo";
import { NpmLogo } from "./icons/NpmLogo";
import { PhpLogo } from "./icons/PhpLogo";
import { PnpmLogo } from "./icons/PnpmLogo";
import { PostgresqlLogo } from "./icons/PostgresqlLogo";
import { PostmanLogo } from "./icons/PostmanLogo";
import { RaspberryLogo } from "./icons/RaspberryLogo";
import { ReactLogo } from "./icons/ReactLogo";
import { ViteLogo } from "./icons/Vite-jsLogo";
import { VueLogo } from "./icons/Vue-jsLogo";
import { Section } from "./Section";
import { SiTypescript } from "react-icons/si";


export const OtherSkillsAndReadme = () => {
   return (
         <Section className="flex max-md:flex-col items-start gap-4">
            <div className="flex-1 w-full">
               <Card className=" p-4 w-full flex flex-col gap-2 w-ful">
                  <p className="text-lg text-muted-foreground">All my Skills</p>
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">Langages de programmation</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                     <div className="flex items-center gap-2">
                        <HtmlLogo size={42} className="text-red-500" />
                        <span>HTML5</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <JavascriptLogo size={42} className="text-yellow-500" />
                        <span>JavaScript</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <CssLogo size={42} className="text-blue-600" />
                        <span>CSS3</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <KotlinLogo size={42} className="text-purple-600" />
                        <span>Kotlin</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <PhpLogo size={42} className="text-blue-600" />
                        <span>PHP</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <LuaLogo size={42} className="text-green-600 animate-spin" style={{ animationDuration: "10s" }} />
                        <span>Lua</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <FaPython size={42} className="text-blue-600" />
                        <span>Python</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <SiTypescript size={42} className="text-blue-600" />
                     <span>Typescript</span>
                  </div>
                  
                  
                  </div>

                  {/* Frameworks et bibliothèques */}
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">Frameworks et bibliothèques</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                     <div className="flex items-center gap-2">
                        <ReactLogo size={42} className="text-green-500 animate-spin" style={{ animationDuration: "10s" }} />
                        <span>React</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <NextLogo size={42} className="text-red-500 animate-spin" style={{ animationDuration: "10s" }} />
                        <span>Next.js</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <LaravelLogo size={42} className="text-red-500" />
                        <span>Laravel</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <NodeJsLogo size={42} className="text-green-500" />
                        <span>Node.js</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <DiDjango size={42} className="text-blue-600" />
                        <span>Django</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <VueLogo size={42} className="text-green-500" />
                        <span>Vue.js</span>
                     </div>
                  </div>

                  {/* Outils de développement */}
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">Outils de développement</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                     <div className="flex items-center gap-2">
                        <GithubIcon size={42} className="text-orange-500" />
                        <span>Git</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <NpmLogo size={42} className="text-red-500" />
                        <span>NPM</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <PnpmLogo size={42} className="text-red-500" />
                        <span>PNPM</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <DockerLogo size={42} className="text-blue-500" />
                        <span>Docker</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <PostmanLogo size={42} className="text-red-500 animate-spin" style={{ animationDuration: "10s" }} />
                        <span>Postman</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <PostgresqlLogo size={42} className="text-blue-600" />
                        <span>PostgreSQL</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <MysqlLogo size={42} className="text-blue-600" />
                        <span>MySQL</span>
                     </div>
                  </div>

                  {/* Outils de design et collaboration */}
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">Outils de design et collaboration</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                     <div className="flex items-center gap-2">
                        <FigmaLogo size={42} className="text-lightblue-500" />
                        <span>Figma</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <BsBootstrapFill size={42} />
                        <span>Bootstrap</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <SiCanva size={42} className="text-blue-600" />
                        <span>Canva</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <NotionLogo size={42} className="text-purple-500" />
                        <span>Notion</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <FaTrello size={42} className="text-blue-600" />
                        <span>Trello</span>
                     </div>
                  </div>

                  {/* Outils de gestion et systèmes */}
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">Outils de gestion et systèmes</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                     <div className="flex items-center gap-2">
                        <ViteLogo size={42} className="text-lightblue-500" />
                        <span>Vite.js</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <SiApachemaven size={42} className="text-orange-600" />
                        <span>Maven</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <SiGradle size={42} className="text-red-600" />
                        <span>Gradle</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <VscTerminalLinux size={42} />
                        <span>Linux</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <RaspberryLogo size={42} />
                        <span>Raspberry Pi</span>
                     </div>
                  </div>
               </Card>
            </div>
            <div className="flex max-md:flex-col items-start gap-4">
               <div className="flex-[2] w-full flex flex-col gap-4">
                  <Card className="p-4 flex-1">
                     <h1 className="text-lg text-muted-foreground">Mon README</h1>
                  {/* Affiche uniquement les statistiques GitHub */}
                  <Readme section="📊 GitHub Stats" />
               </Card>
            </div>
         </div>
         </Section>
   );
};
