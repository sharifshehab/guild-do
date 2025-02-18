import Container from "../../../components/Container";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

// import required modules
import { Autoplay, EffectCreative } from "swiper/modules";
import SectionTitle from "../../../components/SectionTitle";

const Testimonials = () => {
  return (
    <section>
      <Container>
        <SectionTitle title="Game Review"></SectionTitle>
        <Swiper
          grabCursor={true}
          effect={"creative"}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
              opacity: 0,
            },
            next: {
              translate: ["100%", 0, 0],
              opacity: 1,
            },
          }}
          modules={[Autoplay, EffectCreative]}
          className="mySwiper"
        >
          <SwiperSlide>
            <h2 className="text-3xl text-center text-yellow-400 font-medium border-b-2 capitalize mb-4">
              GOD 4
            </h2>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 px-6 py-16 border-l-2 border-yellow-400 bg-secondaryColor next-cut">
                <img
                  src="https://img.freepik.com/free-photo/curly-man-with-broad-smile-shows-perfect-teeth-being-amused-by-interesting-talk-has-bushy-curly-dark-hair-stands-indoor-against-white-blank-wall_273609-17092.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
                  alt="demo/image"
                  className="w-36 h-36 object-cover"
                />

                <div className="w-full md:w-[65%] relative">
                  <div className="flex flex-col md:flex-row flex-wrap gap-y-2 items-center justify-between relative">
                    <div className="flex items-center gap-2">
                      <h2 className="text-lg text-yellow-400">Jhone Dehon -</h2>
                    </div>
                  </div>
                  <p className="my-3 leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque nesciunt saepe quam doloremque nulla cumque vero
                    sequi, repellendus vel reiciendis? Eos totam quidem ducimus
                    amet, in fuga quia minus ab!
                  </p>
                </div>
              </div>
              {/* item */}

              <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 px-6 py-16 bg-secondaryColor border-r-2 border-yellow-400 prev-cut">
                <img
                  src="https://img.freepik.com/free-photo/curly-man-with-broad-smile-shows-perfect-teeth-being-amused-by-interesting-talk-has-bushy-curly-dark-hair-stands-indoor-against-white-blank-wall_273609-17092.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
                  alt="demo/image"
                  className="w-36 h-36 object-cover"
                />

                <div className="w-full md:w-[65%] relative">
                  <div className="flex flex-col md:flex-row flex-wrap gap-y-2 items-center justify-between relative">
                    <div className="flex items-center gap-2">
                      <h2 className="text-lg text-yellow-400">Jhone Dehon -</h2>
                    </div>
                  </div>
                  <p className="my-3 leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque nesciunt saepe quam doloremque nulla cumque vero
                    sequi, repellendus vel reiciendis? Eos totam quidem ducimus
                    amet, in fuga quia minus ab!
                  </p>
                </div>
              </div>
              {/* item */}
            </div>
            {/* flex */}
          </SwiperSlide>
          <SwiperSlide>
            <h2 className="text-3xl text-center text-yellow-400 font-medium border-b-2 capitalize mb-4">
              GOD 4
            </h2>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 px-6 py-16 border-l-2 border-yellow-400 bg-secondaryColor next-cut">
                <img
                  src="https://img.freepik.com/free-photo/curly-man-with-broad-smile-shows-perfect-teeth-being-amused-by-interesting-talk-has-bushy-curly-dark-hair-stands-indoor-against-white-blank-wall_273609-17092.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
                  alt="demo/image"
                  className="w-36 h-36 object-cover"
                />

                <div className="w-full md:w-[65%] relative">
                  <div className="flex flex-col md:flex-row flex-wrap gap-y-2 items-center justify-between relative">
                    <div className="flex items-center gap-2">
                      <h2 className="text-lg text-yellow-400">Jhone Dehon -</h2>
                    </div>
                  </div>
                  <p className="my-3 leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque nesciunt saepe quam doloremque nulla cumque vero
                    sequi, repellendus vel reiciendis? Eos totam quidem ducimus
                    amet, in fuga quia minus ab!
                  </p>
                </div>
              </div>
              {/* item */}

              <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 px-6 py-16 bg-secondaryColor border-r-2 border-yellow-400 prev-cut">
                <img
                  src="https://img.freepik.com/free-photo/curly-man-with-broad-smile-shows-perfect-teeth-being-amused-by-interesting-talk-has-bushy-curly-dark-hair-stands-indoor-against-white-blank-wall_273609-17092.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
                  alt="demo/image"
                  className="w-36 h-36 object-cover"
                />

                <div className="w-full md:w-[65%] relative">
                  <div className="flex flex-col md:flex-row flex-wrap gap-y-2 items-center justify-between relative">
                    <div className="flex items-center gap-2">
                      <h2 className="text-lg text-yellow-400">Jhone Dehon -</h2>
                    </div>
                  </div>
                  <p className="my-3 leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque nesciunt saepe quam doloremque nulla cumque vero
                    sequi, repellendus vel reiciendis? Eos totam quidem ducimus
                    amet, in fuga quia minus ab!
                  </p>
                </div>
              </div>
              {/* item */}
            </div>
            {/* flex */}
          </SwiperSlide>
          <SwiperSlide>
            <h2 className="text-3xl text-center text-yellow-400 font-medium border-b-2 capitalize mb-4">
              GOD 4
            </h2>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 px-6 py-16 border-l-2 border-yellow-400 bg-secondaryColor next-cut">
                <img
                  src="https://img.freepik.com/free-photo/curly-man-with-broad-smile-shows-perfect-teeth-being-amused-by-interesting-talk-has-bushy-curly-dark-hair-stands-indoor-against-white-blank-wall_273609-17092.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
                  alt="demo/image"
                  className="w-36 h-36 object-cover"
                />

                <div className="w-full md:w-[65%] relative">
                  <div className="flex flex-col md:flex-row flex-wrap gap-y-2 items-center justify-between relative">
                    <div className="flex items-center gap-2">
                      <h2 className="text-lg text-yellow-400">Jhone Dehon -</h2>
                    </div>
                  </div>
                  <p className="my-3 leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque nesciunt saepe quam doloremque nulla cumque vero
                    sequi, repellendus vel reiciendis? Eos totam quidem ducimus
                    amet, in fuga quia minus ab!
                  </p>
                </div>
              </div>
              {/* item */}

              <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 px-6 py-16 bg-secondaryColor border-r-2 border-yellow-400 prev-cut">
                <img
                  src="https://img.freepik.com/free-photo/curly-man-with-broad-smile-shows-perfect-teeth-being-amused-by-interesting-talk-has-bushy-curly-dark-hair-stands-indoor-against-white-blank-wall_273609-17092.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
                  alt="demo/image"
                  className="w-36 h-36 object-cover"
                />

                <div className="w-full md:w-[65%] relative">
                  <div className="flex flex-col md:flex-row flex-wrap gap-y-2 items-center justify-between relative">
                    <div className="flex items-center gap-2">
                      <h2 className="text-lg text-yellow-400">Jhone Dehon -</h2>
                    </div>
                  </div>
                  <p className="my-3 leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque nesciunt saepe quam doloremque nulla cumque vero
                    sequi, repellendus vel reiciendis? Eos totam quidem ducimus
                    amet, in fuga quia minus ab!
                  </p>
                </div>
              </div>
              {/* item */}
            </div>
            {/* flex */}
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>
  );
};

export default Testimonials;
