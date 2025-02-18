import Container from "../../../components/Container";
import img from "../../../assets/images/team-s-4-720x840.webp";
import SectionTitle from "../../../components/SectionTitle";

const Players = () => {
  return (
    <section>
      <Container>
        <SectionTitle title="Strikers"></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="relative">
              <img
                src={img}
                alt=""
                className="img-cut border-2 border-yellow-400 hover:border-white transition-all duration-300"
              />
              <h4 className="absolute bottom-2 right-0 text-lg text-yellow-400 border-b-2 border-white">
                STEALTHY ATTACKER
              </h4>
            </div>
            <h3 className="text-3xl text-white">JORGE STRIKER</h3>
          </div>
          {/* single player */}

          <div className="space-y-4">
            <div className="relative">
              <img
                src={img}
                alt=""
                className="img-cut border-2 border-yellow-400 hover:border-white transition-all duration-300"
              />
              <h4 className="absolute bottom-2 right-0 text-lg text-yellow-400 border-b-2 border-white">
                STEALTHY ATTACKER
              </h4>
            </div>
            <h3 className="text-3xl text-white">JORGE STRIKER</h3>
          </div>
          {/* single player */}

          <div className="space-y-4">
            <div className="relative">
              <img
                src={img}
                alt=""
                className="img-cut border-2 border-yellow-400 hover:border-white transition-all duration-300"
              />
              <h4 className="absolute bottom-2 right-0 text-lg text-yellow-400 border-b-2 border-white">
                STEALTHY ATTACKER
              </h4>
            </div>
            <h3 className="text-3xl text-white">JORGE STRIKER</h3>
          </div>
          {/* single player */}

          <div className="space-y-4">
            <div className="relative">
              <img
                src={img}
                alt=""
                className="img-cut border-2 border-yellow-400 hover:border-white transition-all duration-300"
              />
              <h4 className="absolute bottom-2 right-0 text-lg text-yellow-400 border-b-2 border-white">
                STEALTHY ATTACKER
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
