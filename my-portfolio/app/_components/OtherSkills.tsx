"use client";

import { useEffect, useState } from "react";

import { Card } from "@/components/ui/card";
import { Section } from "lucide-react";
import { CssLogo } from "./icons/CssLogo";
import { DockerLogo } from "./icons/DockerLogo";
import { FigmaLogo } from "./icons/FigmaLogo";
import { FirebaseLogo } from "./icons/FirebaseLogo";
import { GithubIcon } from "./icons/GithubIcon";
import { HtmlLogo } from "./icons/HtmlLogo";
import { JavascriptLogo } from "./icons/JavascriptLogo";
import { KotlinLogo } from "./icons/KotlinLogo";
import { LaravelLogo } from "./icons/LaravelLogo";
import { LinkedinIcon } from "./icons/LinkedinIcon";
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
import { TailswindLogo } from "./icons/TailswindLogo";
import { TrelloLogo } from "./icons/TrelloLogo";
import { ViteLogo } from "./icons/Vite-jsLogo";
import { VueLogo } from "./icons/Vue-jsLogo";


export const OtherSkills = () => {
   
   return (
      <Section className="flex max-md:flex-col items-start gap-4">
         <div className="flex-[3] w-full">
            <Card className=" p-4 w-full flex flex-col gap-2 w-ful">
               <p className="text-lg text-muted-foreground">All my Skills</p>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4"> {/* Utilisation de Grid pour la mise en page */}
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
                     <TailswindLogo size={42} className="text-teal-500" />
                     <span>Tailwind CSS</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <PhpLogo size={42} className="text-blue-600" />
                     <span>PHP</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <KotlinLogo size={42} className="text-purple-500" />
                     <span>Kotlin</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <LuaLogo size={42} className="text-green-500" />
                     <span>Lua</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <DockerLogo size={42} className="text-blue-500" />
                     <span>PowerShell</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <GithubIcon size={42} className="text-orange-500" />
                     <span>Git</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <TrelloLogo size={42} className="text-blue-600" />
                     <span>Docker</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <FigmaLogo size={42} className="text-lightblue-500" />
                     <span>Google Cloud</span>
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
                     <ViteLogo size={42} className="text-yellow-500" />
                     <span>Vite</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <VueLogo size={42} className="text-green-500" />
                     <span>Vue.js</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <PostgresqlLogo size={42} className="text-blue-600" />
                     <span>PostgreSQL</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <LinkedinIcon size={42} className="text-pink-500" />
                     <span>Figma</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <NotionLogo size={42} className="text-purple-500" />
                     <span>Canva</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <RaspberryLogo size={42} className="text-gray-600" />
                     <span>GitHub Actions</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <ReactLogo size={42} className="text-green-500" />
                     <span>Raspberry Pi</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <PostmanLogo size={42} className="text-red-500" />
                     <span>Notion</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <NextLogo size={42} className="text-red-500" />
                     <span>Notion</span>
                  </div><div className="flex items-center gap-2">
                     <NpmLogo size={42} className="text-red-500" />
                     <span>Notion</span>
                  </div><div className="flex items-center gap-2">
                     <PnpmLogo size={42} className="text-red-500" />
                     <span>Notion</span>
                  </div><div className="flex items-center gap-2">
                     <FirebaseLogo size={42} className="text-red-500" />
                     <span>Notion</span>
                  </div><div className="flex items-center gap-2">
                     <MysqlLogo size={42} className="text-red-500" />
                     <span>Notion</span>
                  </div><div className="flex items-center gap-2">
                     <TrelloLogo size={42} className="text-red-500" />
                     <span>Notion</span>
                  </div>
               </div>
            </Card>
         
         </div>
      </Section>
   );
};
