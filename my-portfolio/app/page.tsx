import { Contact } from "./_components/Contact";
import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { OtherSkills } from "./_components/OtherSkills";
import { Skills } from "./_components/Skills";
import { Spacing } from "./_components/Spacing";
import { Status } from "./_components/Status";



export default function Home() {
  return (
    <main className="animatedBackground">
      <Header />

      <Spacing size="md" />

      <Hero size="md" />

      <Spacing size="md" />

      <Status size="md" />

      <Spacing size="md" />

      <Skills size="md"/>

      <Spacing size="md" />

      <OtherSkills size="md" />

      <Spacing size="md" />
      
      <Contact size="md" />
      
      <Spacing size="md" />
    </main>
  );
}