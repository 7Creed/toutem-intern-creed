// const Navbar = () => {
//   return (
//     <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
//       <div className="text-xl font-bold text-blue-600">MyBrand</div>
//       <ul className="flex gap-6 text-gray-700">
//         <li>
//           <a href="#" className="hover:text-blue-500">
//             Home
//           </a>
//         </li>
//         <li>
//           <a href="#" className="hover:text-blue-500">
//             About
//           </a>
//         </li>
//         <li>
//           <a href="#" className="hover:text-blue-500">
//             Contact
//           </a>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

// use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faSearch,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white flex shadow-md px-5 md:px-20 lg:px-25 py-4 items-center justify-between text-black">
      <div className="flex items-center">
        <Image
          src="/logo.png"
          alt="Logo"
          width={150}
          height={150}
          className="mr-2"
        />
        {/* <span className="text-xl font-semibold">Toutem</span> */}
      </div>

      <button
        className="md:hidden text-2xl focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
      </button>

      {/* <ul className="flex gap-6 text-sm font-medium uppercase">
        <li>
          <Link href="#">Home</Link>
        </li>
        <li>
          <Link href="#">About Us</Link>
        </li>
        <li>
          <Link href="#">Shop</Link>
        </li>
        <li>
          <Link href="#">Contact</Link>
        </li>
      </ul> */}

      <ul
        className={`
          flex-col md:flex-row md:flex
          absolute md:static
          top-17 left-0 w-full md:w-auto
          bg-white md:bg-transparent
          border-t md:border-0
          md:gap-6
          text-sm font-medium uppercase
          transition-all duration-300 ease-in-out
          ${isOpen ? "flex" : "hidden"}
          md:items-center
          z-20
          px-5 md:px-0
          py-4 md:py-0
        `}
      >
        <li className="py-2 md:py-0">
          <Link
            href="#"
            onClick={() => setIsOpen(false)}
            className="hover:text-green-500"
          >
            Home
          </Link>
        </li>
        <li className="py-2 md:py-0">
          <Link
            href="#"
            onClick={() => setIsOpen(false)}
            className="hover:text-green-500"
          >
            About Us
          </Link>
        </li>
        <li className="py-2 md:py-0">
          <Link
            href="#"
            onClick={() => setIsOpen(false)}
            className="hover:text-green-500"
          >
            Shop
          </Link>
        </li>
        <li className="py-2 md:py-0">
          <Link
            href="#"
            onClick={() => setIsOpen(false)}
            className="hover:text-green-500"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* <Image src="/cart-icon.svg" alt="Cart" width={24} height={24} /> */}
      <div className="hidden md:flex gap-3">
        <FontAwesomeIcon
          icon={faShoppingCart}
          className="cursor-pointer hover:text-blue-500"
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="cursor-pointer hover:text-blue-500"
        />
      </div>
    </nav>
  );
}
