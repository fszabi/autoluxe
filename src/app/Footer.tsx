import Link from "next/link";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import webrebirth_logo from "/public/assets/logo/webrebirth_logo.png";

const navigation = {
  main: [
    { name: "ÁSZF", href: "/assets/docs/aszf.docx" },
    { name: "Adatvédelmi tájékoztató", href: "/assets/docs/adatvedelmi.docx" },
  ],
  contacts: [
    {
      name: "36 30 131 0942",
      href: "tel:+36301310942",
      icon: PhoneIcon,
    },
    {
      name: "36 30 247 7479",
      href: "tel:+36302477479",
      icon: PhoneIcon,
    },
    {
      name: "info@gosi-kertesz.hu",
      href: "mailto:info@gosi-kertesz.hu",
      icon: EnvelopeIcon,
    },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=100092595793127",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="#3b82f6" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};
const Footer = () => {
  return (
    <footer>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-neutral-600 dark:text-neutral-300 font-medium space-y-10">
        <div className="flex max-md:flex-col items-center justify-center gap-x-10 gap-y-5">
          {navigation.main.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target="_blank"
              className="hover:opacity-70 transition-opacity"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex max-md:flex-col justify-center items-center gap-x-10 gap-y-5">
          {navigation.social.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target="_blank"
              className="hover:opacity-70 transition-opacity"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-7 w-7" aria-hidden="true" />
            </Link>
          ))}
          {navigation.contacts.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target="_blank"
              className="hover:opacity-70 transition-opacity flex gap-3"
            >
              <item.icon
                className="h-6 w-6 shrink-0 text-blue-500"
                aria-hidden="true"
              />
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-5">
          <p className="text-center text-base">
            &copy; 2024 AutoLuxe, Minden jog fenntartva.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3">
            <p className="text-center">A weboldalt készítette</p>
            <Link
              className="block mx-auto w-fit hover:opacity-50 transition-opacity"
              href="https://webrebirth.hu/"
              target="_blank"
            >
              <Image height={35} src={webrebirth_logo} alt="webrebirth logo" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
