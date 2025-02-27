import { Contact } from "./_components/Contact";
import { Head } from "./_components/head";
import { Header } from "./_components/Header";
import { OtherSkillsAndReadme } from "./_components/OtherSkillsAndReadme";
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

      <Skills size="md" />

      <Spacing size="md" />

      <OtherSkillsAndReadme size="md" />

      <Spacing size="md" />

      <Contact size="md" />

      <Spacing size="md" />
    </main>
  );
}