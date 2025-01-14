// react icons
import { CiSearch } from "react-icons/ci";
import { FaCircleCheck } from "react-icons/fa6";
import Container from "../../../components/Container";

const Hero = () => {
    return (

        <div className="w-full h-full bg-primaryColor">

            <Container>
                {/* header */}
                <header className="flex lg:flex-row flex-col gap-[50px] lg:gap-10 items-center p-8">
                    <div className="w-full lg:w-[55%]">
                        <h1 className="text-[40px] sm:text-[60px] font-[600] leading-[45px] sm:leading-[70px]">Let
                            your <span className="text-[#F38160]">groceries</span> come to you</h1>
                        <p className="text-[18px] text-gray-400 mt-2">Get fresh groceries online without stepping out to
                            make delicious food with the freshest ingredients</p>
                        <div className="relative my-5">
                            <input placeholder="Search here"
                                className="py-3 px-4 w-full outline-none rounded-l-md bg-gray-100" />
                            <button
                                className="h-full absolute top-0 right-0 bg-[#F38160] px-3 text-white text-[1.3rem] rounded-r-md">
                                <CiSearch /></button>
                        </div>

                        <div className="flex items-center justify-center gap-[15px]">
                            <p className="flex items-center gap-[5px] text-gray-400 text-[1rem]">
                                <FaCircleCheck className="text-[#F0B70D] text-[1.2rem]" />
                                Fresh Vegetables
                            </p>
                            <p className="flex items-center gap-[5px] text-gray-400 text-[1rem]">
                                <FaCircleCheck className="text-[#F0B70D] text-[1.2rem]" />
                                100% Guarantee
                            </p>
                            <p className="flex items-center gap-[5px] text-gray-400 text-[1rem]">
                                <FaCircleCheck className="text-[#F0B70D] text-[1.2rem]" />
                                Cash on Delivery
                            </p>
                            <p className="flex items-center gap-[5px] text-gray-400 text-[1rem]">
                                <FaCircleCheck className="text-[#F0B70D] text-[1.2rem]" />
                                Fast Delivery
                            </p>
                        </div>
                    </div>

                    <div className="w-full sm:w-[40%]">
                        <img src="https://i.ibb.co/61R7zbv/delivery-concept-handsome-african-american-deliver-AZUZTZ3-1.png"
                            alt="image" className="w-full h-full" />
                    </div>
                </header>
            </Container>
        </div>
    );
};

export default Hero;