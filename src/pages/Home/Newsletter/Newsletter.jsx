import { useForm } from "react-hook-form";
import Container from "../../../components/Container";
import useToast from "../../../hooks/useToast";
import { Toaster } from "react-hot-toast";

const Newsletter = () => {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm();
  const { successToast } = useToast();

  const onSubmit = async (formData) => {
    if (formData.email) {
      successToast("Email Subscription successful");
      reset(); // Reset form
    }
  };



  return (
    <section className="bg-yellow-400  newsletter-cut py-10" data-aos="fade-left" data-aos-duration={1400} data-aos-delay={300}>
      <Container>
        <div className="text-center">
          <h1 className="text-4xl lg:text-6xl font-semibold leading-tight uppercase text-secondaryColor">
            Weekly Gaming Digest
          </h1>
          <p className="text-lg leading-relaxed text-secondaryColor mt-2">
            Stay Ahead in the Gaming World – News, Trends, and Community
            Highlights
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="relative mt-10 w-full mx-auto">
              <input
                {...register("email", {
                  required: "Email is required",
                })}
                placeholder="Your Email Address"
                className="py-3 px-4 pr-32 border-2 outline-none focus:ring-0 focus:border-yellow-400 w-full"
              />
              <button className="font-semibold py-3 px-6 h-full absolute top-0 right-0 bg-secondaryColor hover:opacity-90 border-l-2 border-se text-white transition-all duration-300">
                Subscribe
              </button>
            </div>
          </form>

        <Toaster />
      </Container>
    </section>
  );
};

export default Newsletter;
