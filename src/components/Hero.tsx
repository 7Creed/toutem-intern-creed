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
        <section className="relative bg-[#fefefe] min-h-screen flex flex-col md:flex-row items-center justify-between px-5 md:px-20 lg:px-25 py-20 md:py-60">
          <div className="w-full md:w-1/3 z-10 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-semibold text-green-400">
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
              className="object-contain max-w-full h-auto"
            />
          </div>
          <div className="absolute top-0 bottom-0 right-0 w-[55%] h-[80%] bg-green-300 rounded-bl-full rounded-tl-full rounded-br-full z-0"></div>
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
