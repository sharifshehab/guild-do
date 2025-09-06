import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";
// react icons
import {MdOutlineCall, MdOutlineEmail} from "react-icons/md";

const Contact = () => {
  return (
    <section className="my-40">
      <Container>
        <SectionTitle title="Get in touch"></SectionTitle>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <h2 className="text-white text-4xl lg:text-5xl font-bold leading-tight" data-aos="fade-right">
            Let’s Start Working Together. <br />
            Get in Touch
          </h2>

          <div className="space-y-2" data-aos="fade-left" >
            <h3 className="text-3xl text-white">
              27 Division St, New York, NY 10002, USA
            </h3>
            <h4 className="text-2xl text-yellow-400 font-semibold flex items-center gap-x-2 hover:underline underline-offset-8 transition-all duration-300">
              <MdOutlineEmail />
              rebell@mail.com
            </h4>
            <h4 className="text-2xl text-yellow-400 font-semibold flex items-center gap-x-2 hover:underline underline-offset-8 transition-all duration-300">
              <MdOutlineCall />
              +1 800 123 45 67
            </h4>
          </div>
        </div>

        {/* form area */}
        <form className="mt-28" data-aos="zoom-in" data-aos-duration={1200}>
          <div className="space-y-16">
          <div className="flex flex-col sm:flex-row items-center gap-20">
            <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
              <label className="text-yellow-400">First Name</label>
              <input
                type="text"
                className="text-white peer border-white py-2 border-b outline-none focus:border-yellow-400 w-full bg-transparent transition-colors duration-300"
              />
            </div>

            <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
              <label className="text-yellow-400">Last Name</label>
              <input
                type="text"
                className="text-white peer border-white py-2 border-b outline-none focus:border-yellow-400 w-full bg-transparent transition-colors duration-300"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-20 mt-5">
            <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
              <label className="text-yellow-400">Email Address</label>
              <input
                type="email"
                className="text-white peer border-white py-2 border-b outline-none focus:border-yellow-400 w-full bg-transparent transition-colors duration-300"
              />
            </div>

            <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
              <label className="text-yellow-400">Phone Number</label>
              <input
                type="number"
                className="text-white peer border-white py-2 border-b outline-none focus:border-yellow-400 w-full bg-transparent transition-colors duration-300"
              />
            </div>
          </div>

          <div className="flex flex-col gap-[5px] w-full mt-5">
            <label className="text-yellow-400">Write Message</label>
            <textarea className="text-white peer min-h-32 border-gray-300 border-b resize-none outline-none w-full bg-transparent transition-colors focus:border-yellow-400 duration-300"></textarea>
          </div>

          <div className="w-full flex items-center sm:items-end justify-center sm:justify-end mt-5">
            <button
              type="submit"
                className="py-2.5 px-6 bg-yellow-400 text-secondaryColor hover:text-slate-600  font-semibold mt-[10px] w-max next-cut border-l-8 border-white hover:border-r-8 hover:border-l-0 transition-all duration-200"
            >
              Send Message
            </button>
            </div>
          </div>
        </form>
      </Container>
    </section>
  );
};

export default Contact;
