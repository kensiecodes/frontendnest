import Feed from "@components/Feed";
import ColorWall from "@components/ColorWall";
import PackageCard from "@components/PackageCard";

// change Google domain info on cloud console

const Home = () => {
  return (
    <section className="w-full flex-center flex-col ">
      <h1 className="head_text text-center">
        Supercharge your
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">frontend workflow</span>
      </h1>
      <p className=" text-center text-white">
        Nest is a one-stop suite for config files, palettes, components, and a
        configurable cheatsheets for common frontend packages and tools.
      </p>
      <section className="max-sm:mx-16 mt-10 grid gap-2 lg:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <PackageCard
          pkgName="Tailwind Toolkit"
          pageLink="/colorwall"
          pkgPages={[
            {
              src: "/images/screenshot.png",
              title: "Color Palette",
              link: "/colorwall",
              desc: "A handy reference for the default Tailwind color palettes",
            },
            {
              src: "/images/screenshot.png",
              title: "Gradient Builder",
              link: "gradient",
              desc: "A gradient rule generator",
            },
          ]}
        />
      </section>
    </section>
  );
};

export default Home;

//pkgName, pkgPages
//pkgpages => img={page.src} title={page.title} desc={page.desc}
