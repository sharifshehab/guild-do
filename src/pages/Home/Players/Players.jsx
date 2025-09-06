import Container from "../../../components/Container";
import SectionTitle from "../../../components/SectionTitle";
import player01Image from "../../../assets/images/team-s-4-720x840.webp";
import player02Image from "../../../assets/images/team-s-6-720x840.webp";
import player03Image from "../../../assets/images/team-s-2-720x840.webp";
import player04Image from "../../../assets/images/team-s-1-720x840.webp";

const Players = () => {
  return (
    <section>
      <Container>
        <SectionTitle title="Strikers"></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4" data-aos="fade-right" data-aos-duration={800}>
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

          <div className="space-y-4" data-aos="fade-up" data-aos-duration={900}>
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

          <div className="space-y-4" data-aos="fade-up" data-aos-duration={900}>
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

          <div className="space-y-4" data-aos="fade-left" data-aos-duration={800}>
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
      </Container>
    </section>
  );
};

export default Players;
