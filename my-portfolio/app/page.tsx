import { Contact } from "./_components/Contact";
import Github from "./_components/Github";
import { Header } from "./_components/Header";
import { Head, Hero } from "./_components/head";
import { OtherSkills, OtherSkillsAndReadme } from "./_components/OtherSkillsAndReadme";
import { Skills } from "./_components/Skills";
import { Spacing } from "./_components/Spacing";
import { Status } from "./_components/Status";



export default function Home() {
  return (
    <main className="animatedBackground">
      <Header />

      <Spacing size="md" />

      <Head size="md" />

      <Spacing size="md" />

      <Status size="md" />

      <Spacing size="md" />

      <Skills size="md"/>

      <Spacing size="md" />

      <OtherSkillsAndReadme size="md" />

      <Spacing size="md" />
      
      <Contact size="md" />
      
      <Spacing size="md" />
    </main>
  );
}