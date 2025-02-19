import Container from "../../../components/Container";
import img from "../../../assets/images/about-gun-image.png";
import { Link } from "react-router-dom";


const About = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="basis-2/5">
            <img src={img} alt="" className="w-full h-full" />
          </div>
          {/* image */}
          <div className="basis-2/4 space-y-5">
            <h3 className="capitalize text-4xl lg:text-6xl text-yellow-400 font-semibold leading-tight">
              Connect, Dominate, and Rise — Gaming Legacy Awaits!
            </h3>
            <p className="text-white leading-relaxed">
              GuildDo, is the ultimate online destination for gamers to connect,
              share, and stay in the loop with everything gaming! Whether you're
              a casual player, a competitive esports enthusiast, or just someone
              who loves staying updated on the latest in the gaming world,
              GuildDo is your go-to hub.
            </p>

            <Link
              to={"/about"}
              className="px-5 py-3 inline-block bg-yellow-400 text-secondaryColor font-semibold title-cut border-x-4 border-white hover:bg-yellow-500 transition-all duration-300"
            >
              Read More
            </Link>
          </div>
          {/* context */}
        </div>
        {/* flex */}
      </Container>
    </section>
  );
};

export default About;
