import IcfyIcon from "../IcfyIcon";

interface ISocialLinkData {
  icon: string;
  href: string;
}

interface IProps {
  socialLinks: ISocialLinkData[];
}

const SocialLinks = ({ socialLinks }: IProps) => {
  // common classes
  const socialLinksClasses =
    "text-4xl text-white hover:text-primary transition-all duration-150 cursor-pointer";

  return (
    <div className="justify-self-center">
      {/* social media icons */}
      <div>
        <h2 className="text-xl text-center md:text-left text-white mb-3 2xl:text-3xl font">
          Follow Us
        </h2>

        {/* social media icons */}
        <div className="text-white text-2xl flex items-center gap-4">
          {socialLinks.map((link, i) => (
            <a key={i} className={socialLinksClasses} href={link.href}>
              <IcfyIcon icon={link.icon} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
