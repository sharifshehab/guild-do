import { FaArrowRightLong } from "react-icons/fa6";
import Container from "../../../components/Container";
const Categories = () => {
    return (
        <Container>
            <div>
                <div>
                    <h2>all tags</h2>
                </div>

                <div className="flex items-center justify-center gap-10"> 

                    <div
                        className="w-full sm:w-[90%] lg:w-[70%] bg-[#f2f8f9] px-[20px] py-[30px] relative overflow-hidden group cursor-pointer rounded-md before:bg-[#00838d] before:w-[38px] before:h-[38px] before:absolute before:top-0 before:right-0 before:rounded-bl-[35px] before:z-[-1] hover:before:scale-[31] before:transition-all before:ease-out before:duration-[300ms] z-[0]">

                        {/*  arrow icon  */}
                        <FaArrowRightLong className="absolute top-2 z-20 right-2 text-[1rem] text-white" />

                        {/*  text  */}
                        <h3 className="text-[1.5rem] text-secondaryColor font-bold transition-all duration-500 group-hover:text-white ease-out">ZenUI
                            Library</h3>
                        <p className="text-[0.9rem] text-gray-500 transition-all ease-out duration-500 mt-1 group-hover:text-white">ZenUI
                            Library is an Tailwind CSS components library for any needs. Comes with UI
                            examples & blocks, templates, Icons, Color Palette and more.</p>
                    </div>
                    <div
                        className="w-full sm:w-[90%] lg:w-[70%] bg-[#f2f8f9] px-[20px] py-[30px] relative overflow-hidden group cursor-pointer rounded-md before:bg-[#00838d] before:w-[38px] before:h-[38px] before:absolute before:top-0 before:right-0 before:rounded-bl-[35px] before:z-[-1] hover:before:scale-[31] before:transition-all before:ease-out before:duration-[300ms] z-[0]">

                        {/*  arrow icon  */}
                        <FaArrowRightLong className="absolute top-2 z-20 right-2 text-[1rem] text-white" />

                        {/*  text  */}
                        <h3 className="text-[1.5rem] text-secondaryColor font-bold transition-all duration-500 group-hover:text-white ease-out">ZenUI
                            Library</h3>
                        <p className="text-[0.9rem] text-gray-500 transition-all ease-out duration-500 mt-1 group-hover:text-white">ZenUI
                            Library is an Tailwind CSS components library for any needs. Comes with UI
                            examples & blocks, templates, Icons, Color Palette and more.</p>
                    </div>
                    <div
                        className="w-full sm:w-[90%] lg:w-[70%] bg-[#f2f8f9] px-[20px] py-[30px] relative overflow-hidden group cursor-pointer rounded-md before:bg-[#00838d] before:w-[38px] before:h-[38px] before:absolute before:top-0 before:right-0 before:rounded-bl-[35px] before:z-[-1] hover:before:scale-[31] before:transition-all before:ease-out before:duration-[300ms] z-[0]">

                        {/*  arrow icon  */}
                        <FaArrowRightLong className="absolute top-2 z-20 right-2 text-[1rem] text-white" />

                        {/*  text  */}
                        <h3 className="text-[1.5rem] text-secondaryColor font-bold transition-all duration-500 group-hover:text-white ease-out">ZenUI
                            Library</h3>
                        <p className="text-[0.9rem] text-gray-500 transition-all ease-out duration-500 mt-1 group-hover:text-white">ZenUI
                            Library is an Tailwind CSS components library for any needs. Comes with UI
                            examples & blocks, templates, Icons, Color Palette and more.</p>
                    </div>
                    <div
                        className="w-full sm:w-[90%] lg:w-[70%] bg-[#f2f8f9] px-[20px] py-[30px] relative overflow-hidden group cursor-pointer rounded-md before:bg-[#00838d] before:w-[38px] before:h-[38px] before:absolute before:top-0 before:right-0 before:rounded-bl-[35px] before:z-[-1] hover:before:scale-[31] before:transition-all before:ease-out before:duration-[300ms] z-[0]">

                        {/*  arrow icon  */}
                        <FaArrowRightLong className="absolute top-2 z-20 right-2 text-[1rem] text-white" />

                        {/*  text  */}
                        <h3 className="text-[1.5rem] text-secondaryColor font-bold transition-all duration-500 group-hover:text-white ease-out">ZenUI
                            Library</h3>
                        <p className="text-[0.9rem] text-gray-500 transition-all ease-out duration-500 mt-1 group-hover:text-white">ZenUI
                            Library is an Tailwind CSS components library for any needs. Comes with UI
                            examples & blocks, templates, Icons, Color Palette and more.</p>
                    </div>

                </div>
            </div>
        </Container>
    
    );
};

export default Categories;