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
    <section>
      <Container>
        <div className="text-center">
          <h1 className="text-4xl lg:text-6xl font-semibold leading-tight uppercase text-yellow-400">
            Weekly Gaming Digest
          </h1>
          <p className="mt-3 leading-relaxed text-white">
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
              placeholder="Email Address"
              className="py-3 px-4 pr-32 border-2 outline-none focus:ring-0 focus:border-yellow-400 w-full"
            />
            <button className="font-semibold py-3 px-6 h-full absolute top-0 right-0 bg-yellow-400 hover:bg-yellow-500 border-l-2 border-se text-secondaryColor transition-all duration-300">
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
