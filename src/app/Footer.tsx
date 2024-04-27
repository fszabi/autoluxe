import Link from "next/link";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

const navigation = {
  main: [
    { name: "ÁSZF", href: "#" },
    { name: "Adatvédelmi tájékoztató", href: "#" },
  ],
  contacts: [
    {
      name: "36-30-131-0942 / 36-30-247-7479",
      href: "tel:+36301234567",
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
      href: "#",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
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
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8 text-neutral-400 dark:text-neutral-400">
        <div className="-mx-5 -my-2 flex max-md:flex-col items-center justify-center">
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <Link
                href={item.href}
                className="hover:opacity-70 transition-opacity"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-8 flex max-md:flex-col justify-center items-center gap-10">
          {navigation.social.map((item) => (
            <Link
              key={item.name}
              href={item.href}
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
              className="hover:opacity-70 transition-opacity flex gap-3"
            >
              <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
              {item.name}
            </Link>
          ))}
        </div>
        <p className="mt-8 text-center text-base">
          &copy; 2024 Gösi & Kertész Services, Minden jog fenntartva.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
