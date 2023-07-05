import Feed from "@components/Feed";
import ColorWall from "../components/ColorWall";

// change Google domain info on cloud console

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Supercharge your
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">Tailwind workflow</span>
      </h1>
      <p className="desc text-center">
        Tailwind Nest is a one-stop tool for Tailwind config files, palettes,
        components, and a configurable cheatsheet.
      </p>
      <ColorWall />
      <Feed />
    </section>
  );
};

export default Home;
