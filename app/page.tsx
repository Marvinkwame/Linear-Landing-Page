import classNames from "classnames";
import Clients from "./components/Clients";
import Container from "./components/container";
import HomepageHero from "./components/HomepageHero";
import { StarsIllustration } from "./components/icons/stars";
import UnlikeTool from "./components/sections/UnlikeTool";

export default function Home() {
  return (
    <>
      <div>
        <Container className="overflow:hidden py-[6.4rem]">
          <HomepageHero />
        </Container>
      </div>
      <Container>
        <Clients />
      </Container>
      <div
        className={classNames(
          "mask-radial-faded pointer-events-none relative z-[-1] my-[-12.8rem] h-[60rem] overflow-hidden",
          "[--color:#7877C6] before:absolute before:inset-0 before:bg-radial-faded before:opacity-[0.4]",
          "after:absolute after:top-1/2 after:-left-1/2 after:h-[142.8%] after:w-[200%] after:rounded-[50%] after:border-t after:border-[rgba(120,_119,_198,_0.4)] after:bg-background"
        )}
      >
        <StarsIllustration />
      </div>

      <UnlikeTool />

    </>
  );
}
