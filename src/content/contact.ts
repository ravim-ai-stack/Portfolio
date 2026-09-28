import { Mail } from "lucide-react";

import { GithubIcon, LinkedinIcon, type IconComponent } from "@/components/icons";

export type ContactLink = {
  label: string;
  subtext: string;
  href: string;
  icon: IconComponent;
  external?: boolean;
};

export const CONTACT_LINKS: ContactLink[] = [
  {
    label: "Email",
    subtext: "ravimanikandanm@gmail.com",
    href: "mailto:ravimanikandanm@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    subtext: "Connect with me",
    href: "https://www.linkedin.com/in/ravimanikandanm?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    icon: LinkedinIcon,
    external: true,
  },
  {
    label: "GitHub",
    subtext: "View my code",
    href: "https://github.com/Ravi-bit-creater",
    icon: GithubIcon,
    external: true,
  },
];

export const LOCATION = "Coimbatore, Tamil Nadu, India";
