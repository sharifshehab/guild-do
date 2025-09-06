import { Link } from 'react-router-dom';
import footerLogo from '../../assets/images/footer-logo.png';
// react icons
import { SlSocialFacebook, SlSocialPintarest, SlSocialLinkedin } from "react-icons/sl";

const Footer = () => {

    return (
        <footer className="bg-yellow-400 boxShadow  w-full">

                
            <div className="flex flex-col items-center justify-center gap-5 w-full sm:px-32 py-16">

                <aside className="text-center space-y-1">
                    <Link to={'/'}><img src={footerLogo} alt="guild-do footer logo" data-aos="zoom-in" /></Link>
                    <p className='text-secondaryColor font-semibold leading-normal'>
                        <span className='font-medium'>Unite, Compete, Conquer -</span>
                        <br />
                        Your Gaming Community Hub
                    </p>
                </aside>

                <div className="flex items-center justify-center flex-wrap gap-8 text-text">
                    <a href="https://www.facebook.com/svshuvo.4.0" target="_blank" data-aos="fade-right" data-aos-delay={300} data-aos-duration={1000} className="text-[1.3rem] p-1.5 cursor-pointer border border-secondaryColor bg-secondaryColor group hover:bg-white transition-all duration-300 img-cut">
                        <SlSocialFacebook size={21} className="text-yellow-400 group-hover:text-secondaryColor transition-all duration-300" />
                    </a>

                    <a href="https://www.linkedin.com/in/sharif-shehabuzzaman" target="_blank" data-aos="zoom-in" className="text-[1.3rem] p-2 cursor-pointer border border-secondaryColor bg-secondaryColor group hover:bg-white transition-all duration-300 img-cut">
                        <SlSocialLinkedin size={18} className="text-yellow-400 group-hover:text-secondaryColor transition-all duration-300" />
                    </a>

                    <a href="https://www.pinterest.com/onlywebdesk" target="_blank" data-aos="fade-left" data-aos-delay={300} data-aos-duration={1000} className="text-[1.3rem] p-1.5 cursor-pointer border border-secondaryColor bg-secondaryColor group hover:bg-white transition-all duration-300 img-cut">
                        <SlSocialPintarest size={21} className="text-yellow-400 group-hover:text-secondaryColor transition-all duration-300" />
                    </a>
                </div>
            </div>
            <div
                className="border-t border-white flex items-center w-full flex-wrap gap-[20px] justify-center pt-6 pb-3">
                <p className="text-[0.8rem] sm:text-sm">© {new Date().getFullYear()} GuildDo. All Rights
                    Reserved. </p>
            </div>
            </footer>
    );
};

export default Footer;