import {
  SiGithub,
  SiGmail,
  SiInstagram,
  SiLinkedin,
  SiSpotify,
  SiTwitter,
  SiWhatsapp,
} from "react-icons/si";
import type { SocialMediasType } from "types";
import { v4 as uuidv4 } from "uuid";

export const socialMedias: SocialMediasType[] = [
  {
    id: uuidv4(),
    name: "GitHub",
    url: "https://github.com/riandeoliveira",
    icon: SiGithub,
  },
  {
    id: uuidv4(),
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/riandeoliveira/",
    icon: SiLinkedin,
  },
  {
    id: uuidv4(),
    name: "Twitter",
    url: "https://twitter.com/_MrBachelor_",
    icon: SiTwitter,
  },
  {
    id: uuidv4(),
    name: "WhatsApp",
    url: "https://wa.me/5551991852873",
    icon: SiWhatsapp,
  },
  {
    id: uuidv4(),
    name: "Gmail",
    url: "mailto:riandiasdeoliveira2001@gmail.com",
    icon: SiGmail,
  },
  {
    id: uuidv4(),
    name: "Instagram",
    url: "https://www.instagram.com/rian.deoliveira/",
    icon: SiInstagram,
  },
  {
    id: uuidv4(),
    name: "Spotify",
    url: "https://open.spotify.com/user/riandias2016",
    icon: SiSpotify,
  },
];
