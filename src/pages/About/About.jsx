import img from "../../assets/images/about-gun-image.png";
import Container from "../../components/Container";
import Marquee from "react-fast-marquee";
import company01 from "../../assets/images/clients-1.webp";
import company02 from "../../assets/images/clients-2.webp";
import company03 from "../../assets/images/clients-3.webp";
import company04 from "../../assets/images/clients-4.webp";
import company05 from "../../assets/images/clients-5.webp";
import company06 from "../../assets/images/clients-6.webp";
import player04Image from "../../assets/images/team-s-1-720x840.webp";
import player03Image from "../../assets/images/team-s-2-720x840.webp";
import player01Image from "../../assets/images/team-s-4-720x840.webp";
import player02Image from "../../assets/images/team-s-6-720x840.webp";
import SectionTitle from "../../components/SectionTitle";

const About = () => {
  return (
    <section className="my-40">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="basis-2/5">
            <img src={img} alt="" className="w-full h-full" />
          </div>
          {/* image */}
          <div className="basis-2/4 space-y-5">
            <h3 className="capitalize text-4xl lg:text-6xl font-semibold leading-tight">
              discover Our Extensive Game Pass Library
            </h3>
            <p>
              Dive into the latest and greatest in gaming with our curated
              selection of this season's must-play titles. Whether you're a fan
              of action-packed adventures, immersive role-playing games, or
              intense multiplayer battles, we have something for everyone.
            </p>
          </div>
          {/* context */}
        </div>
        {/* flex */}
        <Marquee autoFill={true}>
          <img src={company01} alt="" className="w-52 mx-20" />
          <img src={company02} alt="" className="w-52 mx-20" />
          <img src={company03} alt="" className="w-20 mx-20" />
          <img src={company04} alt="" className="w-52 mx-20" />
          <img src={company05} alt="" className="w-20 mx-20" />
          <img src={company06} alt="" className="w-52 mx-20" />
        </Marquee>
        <div className="mt-10">
          <SectionTitle title="Strikers"></SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="relative">
                <img
                  src={player03Image}
                  alt=""
                  className="img-cut border-2 border-yellow-400 hover:border-white transition-all duration-300"
                />
                <h4 className="absolute bottom-2 right-0 text-yellow-400 border-b-2 border-white">
                  PRIMARY ATTACKER
                </h4>
              </div>
              <h3 className="text-3xl text-white">JORGE STRIKER</h3>
            </div>
            {/* single player */}

            <div className="space-y-4">
              <div className="relative">
                <img
                  src={player02Image}
                  alt=""
                  className="img-cut border-2 border-yellow-400 hover:border-white transition-all duration-300"
                />
                <h4 className="absolute bottom-2 right-0 text-yellow-400 border-b-2 border-white">
                  STEALTHY ATTACKER
                </h4>
              </div>
              <h3 className="text-3xl text-white">JORGE STRIKER</h3>
            </div>
            {/* single player */}

            <div className="space-y-4">
              <div className="relative">
                <img
                  src={player01Image}
                  alt=""
                  className="img-cut border-2 border-yellow-400 hover:border-white transition-all duration-300"
                />
                <h4 className="absolute bottom-2 right-0 text-yellow-400 border-b-2 border-white">
                  FRONTLINE DEFENDER
                </h4>
              </div>
              <h3 className="text-3xl text-white">JORGE STRIKER</h3>
            </div>
            {/* single player */}

            <div className="space-y-4">
              <div className="relative">
                <img
                  src={player04Image}
                  alt=""
                  className="img-cut border-2 border-yellow-400 hover:border-white transition-all duration-300"
                />
                <h4 className="absolute bottom-2 right-0 text-yellow-400 border-b-2 border-white">
                  MASTER STRATEGIST
                </h4>
              </div>
              <h3 className="text-3xl text-white">JORGE STRIKER</h3>
            </div>
            {/* single player */}
          </div>
          {/* grid */}
        </div>
      </Container>
    </section>
  );
};

export default About;
