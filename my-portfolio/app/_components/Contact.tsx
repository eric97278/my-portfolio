import { Badge } from "@/components/ui/badge";
import { ContactCard } from "./ContactCard";
import { Section } from "./Section";

export const Contact = () => {
   return (
      <Section className="flex flex-col items-start gap-4">
         <Badge variant={"outline"}>Contact me</Badge>
         <h2 className=" pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            I will be happy to work with you.
         </h2>
         <div className="flex max-md:flex-col gap-4">
            <ContactCard
               url="https://github.com/eric97278"
               name="@ericchillan"
               image="https://th.bing.com/th/id/OIP.eNIyS5Ol1HFyu899KRlyFAHaHa?w=181&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"
               mediumImage="https://th.bing.com/th/id/OIP.TftfstX0ZbE_nplCVPOd1QHaHa?w=183&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7="
               description="16'0000" />
            <ContactCard
               url="https://github.com/eric97278"
               name="eric chillan"
               image="https://th.bing.com/th/id/OIP.eNIyS5Ol1HFyu899KRlyFAHaHa?w=181&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"
               mediumImage="https://th.bing.com/th/id/OIP.Cn9SAHCmTy8MEaixr8bqpAHaHa?w=207&h=207&c=7&r=0&o=5&dpr=1.3&pid=1.7"
               description="16'0000" />
            <ContactCard
               url="mailto:ericchillan@gmail.com"
               name="@ericchillan"
               image="https://th.bing.com/th/id/OIP.eNIyS5Ol1HFyu899KRlyFAHaHa?w=181&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"
               mediumImage="https://th.bing.com/th/id/OIP.TftfstX0ZbE_nplCVPOd1QHaHa?w=183&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7="
               description="Email me for any inquiries." />
            
         </div>    
      </Section>
   );
};
