import Container from "../../../components/Container";

const Newsletter = () => {
  return (
    <section>
      <Container>
        <div className="text-center">
          <b className="text-[1.3rem] sm:text-[2rem]">Get our weekly</b>
          <h1 className="text-4xl lg:text-6xl font-semibold leading-tight uppercase text-yellow-400">
            newsletter
          </h1>
          <p className="mt-3 leading-relaxed">
            Get weekly updates on the newest design stories, case studies and
            tips right in your mailbox. <b>Subscribe now!</b>
          </p>
        </div>

        <div className="relative mt-10 w-full mx-auto">
          <input
            placeholder="Email Address"
            className="py-3 px-4 pr-32 border-2 outline-none focus:ring-0 focus:border-yellow-400 w-full"
          />
          <button className="font-semibold py-3 px-6 h-full absolute top-0 right-0 bg-yellow-400 hover:bg-yellow-500 border-l-2 border-se text-secondaryColor transition-all duration-300">
            Subscribe
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Newsletter;
