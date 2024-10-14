import {
  IconExternal,
  IconGithub,
  IconInstagram,
  IconLinkedin,
  IconMail,
  IconTwitter,
} from "@/components/Icons";

const Icon = ({ name }) => {
  switch (name) {
    case "mail":
      return <IconMail />;
    case "linkedin":
      return <IconLinkedin />;
    case "github":
      return <IconGithub />;
    case "instagram":
      return <IconInstagram />;
    case "twitter":
      return <IconTwitter />;
    default:
      return <IconExternal />;
  }
};

export default Icon;
