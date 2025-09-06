// react icons
import { Helmet } from "react-helmet-async";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <>
            <Helmet><title>GuildDo - 404</title></Helmet>
            <main>
                <section className="min-h-screen bg-secondaryColor my-0 flex items-center justify-center">

                    <div className="boxShadow px-10 w-full flex items-center flex-col justify-center pb-[50px] rounded-xl">
                        <img src="https://i.ibb.co/nP1Cngw/Error-Server-1.png" alt="illustration"
                            className="w-full lg:w-[500px]" />
                        <h1 className="text-yellow-400 text-[1.8rem] sm:text-[2.5rem] font-[800] mt-3 w-full lg:w-[55%] text-center">Thunder
                            404 </h1>

                        <Link to={'/'}>
                            <button
                                className="py-3 px-6 sm:px-8 bg-yellow-400 text-secondaryColor border mt-4 flex items-center gap-[10px]">
                                <FaArrowLeftLong /> Back to home
                            </button>
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Error;