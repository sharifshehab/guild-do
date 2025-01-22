import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
const CommentModal = ({ comment, commenterEmail }) => {
    const [isModalOpen, setisModalOpen] = useState(false);
    return (
        <>
            <div className="mb-4 inline-flex items-center gap-5 justify-center">
                <div className="w-full flex items-center justify-center">
                    <button
                        className="text-white text-sm"
                        onClick={() => setisModalOpen(true)}
                    >
                        Read More
                    </button>
                </div>
                <div
                    className={`${isModalOpen ? " visible" : " invisible"
                        } w-full h-screen fixed top-0 left-0 z-50 bg-[#0000002a] transition-all duration-300 flex items-center justify-center`}
                >
                    <div
                        className={`${isModalOpen ? "scale-[1] opacity-100" : " scale-[0] opacity-0"
                            } w-[90%] md:w-[80%] lg:w-[60%] bg-[#fff]  transition-all duration-300 mx-auto mt-8`}
                    >
                        <div className="w-full flex items-end p-4 justify-between border-b border-[#d1d1d1]">
                            <h1 className="text-[1.5rem] font-bold text-darkColor">{commenterEmail}</h1>
                            <RxCross1
                                className="p-2 text-[2.5rem] hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer text-darkColor"
                                onClick={() => setisModalOpen(false)}
                            />
                        </div>

                        <div className="p-4">
                            <p className="text-[1.2rem] text-text text-secondaryColor">
                                {comment}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CommentModal;