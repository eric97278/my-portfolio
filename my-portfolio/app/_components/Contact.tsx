import { Section } from "./Section";
import { Card } from "@/components/ui/card";

export const Contact = () => {
   return (
      <Section className="flex max-md:flex-col items-start gap-4">
         <div className="flex-[3] w-full">
            <Card className="p-4 w-full flex flex-col gap-2">
               <p className="text-lg text-muted-foreground">
                  Je suis ravi de partager mon portfolio avec vous et de vous donner un aperçu de mon travail. J&apos;ai hâte de collaborer sur des projets passionnants à l&apos;avenir et de contribuer à vos initiatives.
                  <br />
                  <br />
                  N&apos;hésitez pas à me contacter si vous avez des questions ou si vous souhaitez discuter d&apos;une potentielle collaboration.
                  <br />
                  <br />
                  Vous pouvez me joindre via :
               </p>
               <ul className="space-y-2 mt-4">
                  <li>
                     <a
                        href="mailto:ericchillan@gmail.com"
                        className="permanent-animation text-blue-600"
                     >
                        Mail?
                     </a>
                  </li>
                  <li>
                     <a
                        href="https://github.com/eric97278"
                        className="permanent-animation text-blue-600"
                     >
                        GitHub?
                     </a>
                  </li>
                  <li>
                     <a
                        href="https://www.linkedin.com/in/eric-chillan/"
                        className="permanent-animation text-blue-600"
                     >
                        Ou encore via Linkedin?
                     </a>
                  </li>
               </ul>
               <span className="text-lg text-muted-foreground mt-4">
                  Au plaisir d&apos;échanger avec vous.
               </span>
            </Card>
         </div>
      </Section>
   );
};
