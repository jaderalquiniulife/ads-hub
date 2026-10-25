import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactForm } from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <ProjectsSection />
        <ContactForm />
      </main>
    </>
  );
}
