import img from "../../assets/images/about-gun-image.png";
import Container from "../../components/Container";
import Marquee from "react-fast-marquee";
import company01 from "../../assets/images/clients-1.png";
import company02 from "../../assets/images/clients-2.png";
import company03 from "../../assets/images/clients-3.png";
import company04 from "../../assets/images/clients-4.png";
import company05 from "../../assets/images/clients-5.png";
import company06 from "../../assets/images/clients-6.png";
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
            <h3 className="capitalize text-4xl lg:text-6xl font-semibold text-yellow-400 leading-tight">
              Connect, Dominate, and Rise — Gaming Legacy Awaits!
            </h3>
            <p className="text-white leading-relaxed">
              GuildDo, is the ultimate online destination for gamers to connect,
              share, and stay in the loop with everything gaming! Whether you're
              a casual player, a competitive esports enthusiast, or just someone
              who loves staying updated on the latest in the gaming world,
              GuildDo is your go-to hub. At GuildDo, we’re passionate about
              fostering a vibrant community where gamers from all walks of life
              can come together to discuss their favorite games, share tips and
              strategies, and dive into the latest news about game releases,
              updates, and industry trends. From breaking news on upcoming
              titles to insights into the competitive gaming scene, we’ve got
              you covered. Our platform is designed to be more than just a news
              source—it’s a space for meaningful conversations, collaborations,
              and connections. Join the discussion, share your experiences, and
              be part of a community that celebrates the ever-evolving world of
              gaming. At GuildDo, we believe gaming is more than just a
              hobby—it’s a culture, a passion, and a way to bring people
              together. So, whether you’re here to stay updated, make new
              friends, or simply geek out over your favorite games, you’ve found
              your home. Let’s level up together! Welcome to GuildDo—where
              gamers unite.
            </p>
          </div>
          {/* context */}
        </div>
        {/* flex */}
      </Container>

      <Marquee autoFill={true} className="my-10">
        <img src={company01} alt="" className="w-44 mx-20 " />
        <img src={company02} alt="" className="w-40 mx-20" />
        <img src={company03} alt="" className="w-16 mx-20" />
        <img src={company04} alt="" className="w-44 mx-20" />
        <img src={company05} alt="" className="w-16 mx-20" />
        <img src={company06} alt="" className="w-44 mx-20" />
      </Marquee>
      
      <Container>
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
