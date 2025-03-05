import { FaInstagram } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaVoicemail } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { FaLinkedinIn } from "react-icons/fa";

export const homeData = [
  {
    id: 1,
    icon: <FaLinkedinIn size={25} />,
    link: "https://www.linkedin.com/in/krishna-dholiya-b0414016b/",
  },
  /* {
    id: 2,
    icon: <FaDribbble size={25} />,
    link: "https://dribbble.com/session/new",
  },
  {
    id: 3,
    icon: <FaFacebookF size={25} />,
    link: "https://www.facebook.com/",
  }, */
];

export const homeDesc = [
  {
    id: 1,
    icon: <FaVoicemail size={22} />,
    text: "+44 740 702 18 19",
    link: "tel:+447407021819",
  },
  {
    id: 2,
    icon: <TfiEmail size={22} />,
    text: "kishudholiya059@gmail.com",
    link: "mailto:kishudholiya059@gmail.com",
  },
];
