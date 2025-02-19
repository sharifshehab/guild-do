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
            <h3 className="capitalize text-4xl lg:text-6xl font-semibold leading-tight">
              discover Our Extensive Game Pass Library
            </h3>
            <p>
              Dive into the latest and greatest in gaming with our curated
              selection of this season's must-play titles. Whether you're a fan
              of action-packed adventures, immersive role-playing games, or
              intense multiplayer battles, we have something for everyone.
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
