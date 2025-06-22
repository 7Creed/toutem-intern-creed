// const Hero = () => {
//   return (
//     <section className="text-center py-20 bg-gray-50">
//       <h1 className="text-4xl font-bold text-gray-800 mb-4">
//         Welcome to My App
//       </h1>
//       <p className="text-lg text-gray-600 mb-8">
//         Build fast, modern websites with Next.js and Tailwind CSS.
//       </p>
//       <a
//         href="#"
//         className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
//       >
//         Get Started
//       </a>
//     </section>
//   );
// };

// export default Hero;

import Image from "next/image";

interface CardItem {
  id: number;
  image: string;
  label: string;
}

const cardData: CardItem[] = [
  {
    id: 1,
    image: "/card1.png",
    label: "Essential oils ",
  },
  {
    id: 2,
    image: "/card2.png",
    label: "Natural cosmetics",
  },
  {
    id: 3,
    image: "/card3.png",
    label: "Diffusers",
  },
  {
    id: 4,
    image: "/card4.png",
    label: "Aromatherapy",
  },
];

export default function Hero() {
  return (
    <>
      <div className="bg-white">
        <section className="relative bg-[#fefefe] h-screen flex items-center justify-between px-5 md:px-20 lg:px-25 py-60">
          <div className="w-full md:w-1/3 z-10 mb-10 md:mb-0">
            <h1 className="text-5xl font-semibold text-green-400">
              Pear kiwi
              <br />& Mint
            </h1>
            {/* <p className="text-[14px] text-gray-500 mt-6"> */}
            <p className="text-sm md:text-base text-gray-500 mt-6 max-w-md">
              They say that home is where the heart is. Perhaps that’s why a
              feeling of loss is so apparent when you are far from the ones you
              love.
            </p>
          </div>
          <div className="w-full md:w-2/3 relative z-10 flex justify-center">
            <Image
              src="/hero-img.png"
              alt="Product"
              width={600}
              height={600}
              className="object-contain"
            />
          </div>
          <div className="absolute top-0 bottom-0 right-0 w-[60%] h-[100%] bg-green-300 rounded-bl-full rounded-tl-full z-0"></div>
        </section>

        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-5 sm:px-10 md:px-20 mt-10">
            {cardData.map((card, index) => (
              <div
                key={card.id}
                className="bg-white border shadow-md rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:bg-green-100 active:bg-green-200 cursor-pointer"
              >
                <div className="mb-4">
                  <Image
                    src={card.image}
                    alt={card.label}
                    width={120}
                    height={120}
                    className="mb-4"
                  />
                </div>
                <h3 className="text-base font-semibold text-[#5FD788]">
                  {card.label}
                </h3>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
