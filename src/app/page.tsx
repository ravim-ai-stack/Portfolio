import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { TechStack } from "@/components/tech-stack";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Education } from "@/components/education";
import { Certifications } from "@/components/certifications";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";
import { IntroGate } from "@/components/intro-gate";

export default function Home() {
  return (
    <IntroGate>
      <main className="flex min-h-screen flex-col">
        <Navbar />
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <SiteFooter />
    </IntroGate>
  );
}
