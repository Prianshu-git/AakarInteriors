import { motion } from "framer-motion";
import { 
  SiInstagram, 
  SiPinterest, 
  SiFacebook, 
  SiLinkedin 
} from "react-icons/si";

const socialLinks = [
  { icon: SiInstagram, href: "https://www.instagram.com/aakar_interiors01?igsh=MTZoeHBiZGUxN2Qwdw==", label: "Instagram" },
  { icon: SiFacebook, href: "#", label: "Facebook" },
  { icon: SiLinkedin, href: "#", label: "LinkedIn" }
];

export default function SocialIcons() {
  return (
    <div className="flex gap-4 items-center">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <motion.a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/60 hover:text-primary transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="sr-only">{label}</span>
          <Icon className="w-6 h-6" />
        </motion.a>
      ))}
    </div>
  );
}