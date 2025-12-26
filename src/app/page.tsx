import Navigation from "@/components/sections/navigation/Navigation";
import AboutMe from "@/components/sections/about-me/AboutMe";
import Projects from "@/components/sections/projects/Projects";

export default function Home() {
  return (
    <main>
      <Navigation />
      <AboutMe />
      <Projects />
    </main>
  );
}
