import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { Card } from "@/components/ui/card";

export const Contact = () => {
   return (
      <Section className="flex max-md:flex-col items-start gap-4">
         <div className="flex-[3] w-full">
            <Card className=" p-4 w-full flex flex-col gap-2 w-ful">
               <p className="text-lg text-muted-foreground">
            Je suis ravi de partager mon portfolio avec vous et de vous donner un aperçu de mon travail. J'ai hâte de collaborer sur des projets passionnants à l'avenir et de contribuer à vos initiatives.

            N'hésitez pas à me contacter si vous avez des questions ou si vous souhaitez discuter d'une potentielle collaboration.

            Vous pouvez me joindre via :
            <ul>
             <a href="mailTo:ericchillan@gmail.com">Par mail?</a>
            </ul>
            <ul>
             <a href="" className="text-red">Sur GitHub?</a>
            </ul>
            <ul>
             <a href="">Ou bien via Linkedin?</a>
            </ul>
                  <span className="text-lg text-muted-foreground">Au plaisir d'échanger avec vous.</span> 
                  </p>
            </Card>
         </div>    
      </Section>
   );
};
