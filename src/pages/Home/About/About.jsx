import Container from "../../../components/Container";
import img from "../../../assets/images/393678090_1022226672255558_4711665666845711563_n-removebg-preview.png";
const About = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="basis-2/5">
            <img src={img} alt="" className="w-full h-full"/>
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
            <button className="px-5 py-3 bg-yellow-400 text-secondaryColor font-semibold title-cut border-x-4 border-white hover:opacity-90 duration-300">
              View More
            </button>
          </div>
          {/* context */}
        </div>
        {/* flex */}
      </Container>
    </section>
  );
};

export default About;
