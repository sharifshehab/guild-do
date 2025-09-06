import Container from "../../../components/Container";
import testiImage01 from "../../../assets/images/2150904663.jpg";
import testiImage02 from "../../../assets/images/2150904691.jpg";
import testiImage03 from "../../../assets/images/cyberpunk-boy-illustration.jpg";
import testiImage04 from "../../../assets/images/futuristic-ninja-digital-art.jpg";
import testiImage05 from "../../../assets/images/young-adult-biker-riding-motorcycle-looking-camera-confidently-generated-by-artificial-intelligence.jpg";
import testiImage06 from "../../../assets/images/futuristic-christmas-celebration-concept.jpg";
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
        <SectionTitle title="Game Reviews"></SectionTitle>
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
          <SwiperSlide >
            <h2 className="text-3xl text-center text-yellow-400 font-medium border-b-2 capitalize mb-5 pb-2">
              Black Myth: Wukong
            </h2>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 px-6 py-16 border-l-2 border-yellow-400 bg-secondaryColor next-cut">
                <img
                  src={testiImage06}
                  alt="demo/image"
                  className="
                    w-28 h-28 
                    object-cover
                    testimonial-img-cut       
                    border-4 border-yellow-400
                    shadow-2xl
                    transition-transform duration-300
                    hover:scale-105
                    hover:shadow-yellow-400/50
                  "
                />

                <div className="w-full md:w-[65%] relative">
                  <div className="flex flex-col md:flex-row flex-wrap gap-y-2 items-center justify-between relative">
                    <div className="flex items-center gap-2">
                      <h2 className="text-lg text-yellow-400">
                        MonkeyKingMaster -
                      </h2>
                    </div>
                  </div>
                  <p className="my-3 leading-relaxed text-white">
                    The combat is fluid and exhilarating, and every boss encounter feels like a cinematic spectacle.
                    The environments are rich with detail, and exploration constantly rewards curiosity.
                  </p>
                </div>
              </div>
              {/* item */}

              <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 px-6 py-16 bg-secondaryColor border-r-2 border-yellow-400 prev-cut">
                <img
                  src={testiImage04}
                  alt="demo/image"
                  className="
                    w-28 h-28 
                    object-cover
                    testimonial-img-cut       
                    border-4 border-yellow-400
                    shadow-2xl
                    transition-transform duration-300
                    hover:scale-105
                    hover:shadow-yellow-400/50
                  "
                />

                <div className="w-full md:w-[65%] relative">
                  <div className="flex flex-col md:flex-row flex-wrap gap-y-2 items-center justify-between relative">
                    <div className="flex items-center gap-2">
                      <h2 className="text-lg text-yellow-400">
                        Frostborne -
                      </h2>
                    </div>
                  </div>
                  <p className="my-3 leading-relaxed text-white">
                    Every encounter challenges your skills, and the world feels alive and dangerous.
                    The pacing of exploration and combat keeps the adrenaline high from start to finish.
                  </p>
                  .
                </div>
              </div>
              {/* item */}
            </div>
            {/* flex */}
          </SwiperSlide>

          <SwiperSlide>
            <h2 className="text-3xl text-center text-yellow-400 font-medium border-b-2 capitalize mb-5 pb-2">
              God of War: Ragnarök
            </h2>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 px-6 py-16 border-l-2 border-yellow-400 bg-secondaryColor next-cut">
                <img
                  src={testiImage01}
                  alt="demo/image"
                  className="
                    w-28 h-28 
                    object-cover
                    testimonial-img-cut       
                    border-4 border-yellow-400
                    shadow-2xl
                    transition-transform duration-300
                    hover:scale-105
                    hover:shadow-yellow-400/50
                  "
                />

                <div className="w-full md:w-[65%] relative">
                  <div className="flex flex-col md:flex-row flex-wrap gap-y-2 items-center justify-between relative">
                    <div className="flex items-center gap-2">
                      <h2 className="text-lg text-yellow-400">
                        ShadowStriker -
                      </h2>
                    </div>
                  </div>
                  <p className="my-3 leading-relaxed text-white">
                    God of War Ragnarök is a breathtaking sequel that deepens
                    Kratos and Atreus' journey. The combat is refined, the world
                    is richer, and the emotional storytelling makes every moment
                    unforgettable. A true masterpiece!
                  </p>
                </div>
              </div>
              {/* item */}

              <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 px-6 py-16 bg-secondaryColor border-r-2 border-yellow-400 prev-cut">
                <img
                  src={testiImage02}
                  alt="demo/image"
                  className="
                    w-28 h-28 
                    object-cover
                    testimonial-img-cut       
                    border-4 border-yellow-400
                    shadow-2xl
                    transition-transform duration-300
                    hover:scale-105
                    hover:shadow-yellow-400/50
                  "
                />

                <div className="w-full md:w-[65%] relative">
                  <div className="flex flex-col md:flex-row flex-wrap gap-y-2 items-center justify-between relative">
                    <div className="flex items-center gap-2">
                      <h2 className="text-lg text-yellow-400">
                        CrimsonRonin -
                      </h2>
                    </div>
                  </div>
                  <p className="my-3 leading-relaxed text-white">
                    An epic continuation of Kratos' saga! The visuals are
                    stunning, battles feel intense, and the narrative is both
                    heart-wrenching and thrilling. Every detail is crafted with
                    excellence, making it one of the best games ever.
                  </p>
                  .
                </div>
              </div>
              {/* item */}
            </div>
            {/* flex */}
          </SwiperSlide>

          <SwiperSlide>
            <h2 className="text-3xl text-center text-yellow-400 font-medium border-b-2 capitalize mb-5 pb-2">
              Marvel's Spider-Man 2
            </h2>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 px-6 py-16 border-l-2 border-yellow-400 bg-secondaryColor next-cut">
                <img
                  src={testiImage03}
                  alt="demo/image"
                  className="
                    w-28 h-28 
                    object-cover
                    testimonial-img-cut       
                    border-4 border-yellow-400
                    shadow-2xl
                    transition-transform duration-300
                    hover:scale-105
                    hover:shadow-yellow-400/50
                  "
                />

                <div className="w-full md:w-[65%] relative">
                  <div className="flex flex-col md:flex-row flex-wrap gap-y-2 items-center justify-between relative">
                    <div className="flex items-center gap-2">
                      <h2 className="text-lg text-yellow-400">
                        PixelPhantom -
                      </h2>
                    </div>
                  </div>
                  <p className="my-3 leading-relaxed text-white">
                    Marvel's Spider-Man 2 is an exhilarating experience, with
                    stunning visuals, fluid web-swinging, and an emotional
                    storyline. The dual Spider-Men dynamic adds depth, making it
                    a must-play for fans and newcomers alike.
                  </p>
                </div>
              </div>
              {/* item */}

              <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 px-6 py-16 bg-secondaryColor border-r-2 border-yellow-400 prev-cut">
                <img
                  src={testiImage04}
                  alt="demo/image"
                  className="
                    w-28 h-28 
                    object-cover
                    testimonial-img-cut       
                    border-4 border-yellow-400
                    shadow-2xl
                    transition-transform duration-300
                    hover:scale-105
                    hover:shadow-yellow-400/50
                  "
                />

                <div className="w-full md:w-[65%] relative">
                  <div className="flex flex-col md:flex-row flex-wrap gap-y-2 items-center justify-between relative">
                    <div className="flex items-center gap-2">
                      <h2 className="text-lg text-yellow-400">GameGuruX -</h2>
                    </div>
                  </div>
                  <p className="my-3 leading-relaxed text-white">
                    Insomniac delivers another masterpiece! The combat feels
                    smoother, the city is more alive, and the story keeps you
                    hooked. Playing as both Peter and Miles makes the adventure
                    even more immersive. A superhero triumph!
                  </p>
                </div>
              </div>
              {/* item */}
            </div>
            {/* flex */}
          </SwiperSlide>

          <SwiperSlide>
            <h2 className="text-3xl text-center text-yellow-400 font-medium border-b-2 capitalize mb-5 pb-2">
              Ghost of Tsushima
            </h2>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 px-6 py-16 border-l-2 border-yellow-400 bg-secondaryColor next-cut">
                <img
                  src={testiImage05}
                  alt="demo/image"
                  className="
                    w-28 h-28 
                    object-cover
                    testimonial-img-cut       
                    border-4 border-yellow-400
                    shadow-2xl
                    transition-transform duration-300
                    hover:scale-105
                    hover:shadow-yellow-400/50
                  "
                />

                <div className="w-full md:w-[65%] relative">
                  <div className="flex flex-col md:flex-row flex-wrap gap-y-2 items-center justify-between relative">
                    <div className="flex items-center gap-2">
                      <h2 className="text-lg text-yellow-400">NeonSpecter -</h2>
                    </div>
                  </div>
                  <p className="my-3 leading-relaxed text-white">
                    Ghost of Tsushima is a visually stunning samurai adventure
                    with breathtaking landscapes, fluid combat, and a gripping
                    story. The duels are intense, and the open world feels
                    alive, making it an unforgettable journey through feudal
                    Japan.
                  </p>
                </div>
              </div>
              {/* item */}

              <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 px-6 py-16 bg-secondaryColor border-r-2 border-yellow-400 prev-cut">
                <img
                  src={testiImage06}
                  alt="demo/image"
                  className="
                    w-28 h-28 
                    object-cover
                    testimonial-img-cut       
                    border-4 border-yellow-400
                    shadow-2xl
                    transition-transform duration-300
                    hover:scale-105
                    hover:shadow-yellow-400/50
                  "
                />

                <div className="w-full md:w-[65%] relative">
                  <div className="flex flex-col md:flex-row flex-wrap gap-y-2 items-center justify-between relative">
                    <div className="flex items-center gap-2">
                      <h2 className="text-lg text-yellow-400">EpicQuester -</h2>
                    </div>
                  </div>
                  <p className="my-3 leading-relaxed text-white">
                    A masterpiece of storytelling and gameplay! The combat is
                    satisfying, the world is beautifully crafted, and the
                    emotional depth of Jin’s journey is incredible. Ghost of
                    Tsushima is a must-play for samurai fans.
                  </p>
                </div>
              </div>
              {/* item */}
            </div>
            {/* flex */}
          </SwiperSlide>

          <SwiperSlide>
            <h2 className="text-3xl text-center text-yellow-400 font-medium border-b-2 capitalize mb-5 pb-2">
              Batman: Arkham Knight
            </h2>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 px-6 py-16 border-l-2 border-yellow-400 bg-secondaryColor next-cut">
                <img
                  src={testiImage02}
                  alt="demo/image"
                  className="
                    w-28 h-28 
                    object-cover
                    testimonial-img-cut       
                    border-4 border-yellow-400
                    shadow-2xl
                    transition-transform duration-300
                    hover:scale-105
                    hover:shadow-yellow-400/50
                  "
                />

                <div className="w-full md:w-[65%] relative">
                  <div className="flex flex-col md:flex-row flex-wrap gap-y-2 items-center justify-between relative">
                    <div className="flex items-center gap-2">
                      <h2 className="text-lg text-yellow-400">DarkKnightFan -</h2>
                    </div>
                  </div>
                  <p className="my-3 leading-relaxed text-white">
                    The city feels alive, and the sense of scale and freedom is incredible.
                    Combat is smooth and satisfying, while stealth sections keep tension high.
                  </p>
                </div>
              </div>
              {/* item */}

              <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 px-6 py-16 bg-secondaryColor border-r-2 border-yellow-400 prev-cut">
                <img
                  src={testiImage06}
                  alt="demo/image"
                  className="
                    w-28 h-28 
                    object-cover
                    testimonial-img-cut       
                    border-4 border-yellow-400
                    shadow-2xl
                    transition-transform duration-300
                    hover:scale-105
                    hover:shadow-yellow-400/50
                  "
                />
                <div className="w-full md:w-[65%] relative">
                  <div className="flex flex-col md:flex-row flex-wrap gap-y-2 items-center justify-between relative">
                    <div className="flex items-center gap-2">
                      <h2 className="text-lg text-yellow-400">GothamWatcher -</h2>
                    </div>
                  </div>
                  <p className="my-3 leading-relaxed text-white">
                    The story is gripping and immersive, and every gadget and mechanic feels purposeful.
                    Exploring the city and engaging in challenges is both thrilling and rewarding.
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
