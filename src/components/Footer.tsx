// const Footer = () => {
//   return (
//     <footer className="bg-gray-100 text-center py-6 text-sm text-gray-500">
//       © {new Date().getFullYear()} MyBrand. All rights reserved.
//     </footer>
//   );
// };

import Image from "next/image";

// export default Footer;

export default function Footer() {
  return (
    <footer className="bg-white text-center text-sm px-5 md:px-15 lg:px-20 py-10 text-gray-600">
      <div className="flex items-start justify-between">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={150}
            height={150}
            className="mr-2"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-16">
          <div>
            <p className="font-bold text-green-600 mb-2">Customer Support</p>
            <ul>
              <li>Shipping</li>
              <li>Free Return</li>
              <li>Track your Order</li>
              <li>Gift Cards</li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-green-600 mb-2">About Us</p>
            <ul>
              <li>Our Values</li>
              <li>Sustainability</li>
              <li>Brand Ambassadors</li>
              <li>Fitness Professionals</li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-green-600 mb-2">Customer Service</p>
            <ul>
              <li>Help</li>
              <li>Order Support</li>
              <li>Recall—Important Safety Info</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="mt-6">
        copyright © 2022 Toutem
        <br />
        all rights reserved.
      </p>
    </footer>
  );
}
