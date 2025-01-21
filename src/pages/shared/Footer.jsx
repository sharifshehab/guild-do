import { Link } from 'react-router-dom';
import footerLogo from '../../assets/images/footer-logo.png';
// react icons
import { SlSocialFacebook, SlSocialPintarest, SlSocialLinkedin } from "react-icons/sl";

const Footer = () => {

    return (
        <footer className="bg-yellow-400 boxShadow  w-full p-6 lg:p-9">

            <div className="flex flex-col items-center justify-center gap-5 w-full sm:px-32">

                <aside className="text-center">
                    <Link to={'/'}><img src={footerLogo} alt="guild-do footer logo" /></Link>
                    <p className='text-secondaryColor font-semibold'>
                        <span className='font-medium'>Unite, Compete, Conquer -</span>
                        <br />
                        Your Gaming Community Hub
                    </p>
                </aside>

                <div className="flex items-center justify-center flex-wrap gap-[10px] text-text">

                    <a href="https://www.facebook.com/svshuvo.4.0" target="_blank" className="text-[1.3rem] p-1.5 cursor-pointer">
                        <SlSocialFacebook size={23} className="text-secondaryColor hover:text-white transition-all duration-300" />
                    </a>

                    <a href="https://www.linkedin.com/in/sharif-shehabuzzaman" target="_blank" className="text-[1.3rem] p-1.5 cursor-pointer">
                        <SlSocialLinkedin size={23} className="text-secondaryColor hover:text-white transition-all duration-300" />
                    </a>

                    <a href="https://www.pinterest.com/onlywebdesk" target="_blank" className="text-[1.3rem] p-1.5 cursor-pointer">
                        <SlSocialPintarest size={23} className="text-secondaryColor hover:text-white transition-all duration-300" />
                    </a>
                </div>

                <div
                    className="border-t border-white flex items-center w-full flex-wrap gap-[20px] justify-center pt-3">
                    <p className="text-[0.8rem] sm:text-sm">© {new Date().getFullYear()} GuildDo. All Rights
                        Reserved. </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;