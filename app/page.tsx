import Image from "next/image";
import Container from "./components/container";
import Hero, { HeroSubTitle, HeroTitle } from "./components/Hero";

export default function Home() {
  return (
    <div>
      <Container>
        <Hero>
          <HeroTitle>
            Linear is a better way <br /> to build products
          </HeroTitle>
          <HeroSubTitle>
            Meet the new standard of modern software development. <br /> Streamline issues, sprints and product roadmaps.
          </HeroSubTitle>
          <img src="/img/hero.webp" alt="Hero Image" />
        </Hero>
      </Container>

    </div>
  );
}
