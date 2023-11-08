import Link from 'next/link';

enum NavLink {
  services = '#services',
  portfolio = '#portfolio',
  contacts = '#contacts',
}

const navigationLinks = Object.entries(NavLink).map(([label, href]) => ({
  label: label as keyof typeof NavLink,
  href,
}));

interface IProps {
  dictionary: {
    services: string;
    portfolio: string;
    contacts: string;
  };
}

export default function Navigation({ dictionary }: IProps) {
  return (
    <ul
      className="flex flex-col items-start gap-10 
                 text-xl text-secondary md:mr-16
                 md:flex-row md:items-center xl:mr-36 xl:gap-12
                 [&>li]:w-full"
    >
      {navigationLinks.map(({ label, href }) => (
        <li key={href} className=" ">
          <Link href={href}>{dictionary[label]}</Link>
        </li>
      ))}
    </ul>
  );
}

// import Link from 'next/link';

// interface IProps {
//   dictionary: {
//     services: string;
//     portfolio: string;
//     contacts: string;
//   };
// }

// interface IDic {
//   services: string;
//   portfolio: string;
//   contacts: string;
// }

// interface INavLink {
//   label: keyof IDic;
//   href: string;
// }

// const navLinks: INavLink[] = [
//   { label: 'services', href: '#services' },
//   { label: 'portfolio', href: '#portfolio' },
//   { label: 'contacts', href: '#contacts' },
// ];

// export default function Navigation({ dictionary }: IProps) {
//   // const navigationLinks = [
//   //   { label: dictionary.services, href: '#services' },
//   //   { label: dictionary.portfolio, href: '#portfolio' },
//   //   { label: dictionary.contacts, href: '#contacts' },
//   // ];
//   return (
//     <ul
//       className="flex flex-col items-start gap-10
//                  text-xl text-secondary md:mr-16
//                  md:flex-row md:items-center
//                  xl:mr-36 xl:gap-12"
//     >
//       {navLinks.map(({ label, href }) => (
//         <li key={href} className="w-full">
//           <Link href={href} className="block w-full">
//             {dictionary[label]}
//           </Link>
//         </li>
//       ))}
//     </ul>
//   );
// }
