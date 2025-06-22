import Image from "next/image";

export default function SoapPromo() {
  return (
    <section className="flex flex-col md:flex-row items-center bg-green-400 text-white px-5 md:px-20 lg:px-25">
      <div className="w-full md:w-1/2 mb-6 md:mb-0 pr-10 py-20">
        <h3 className="text-3xl font-bold mb-4">
          Our luxury soaps are 100% natural providing nourishing benefits for
          your skin.
        </h3>
        <button className="bg-white text-green-600 px-4 py-2 font-semibold rounded">
          SHOP ALL
        </button>
      </div>
      <div className="w-full md:w-1/2">
        <Image
          src="/food-promo.jpg"
          alt="Soap"
          width={600}
          height={400}
          className="rounded"
        />
      </div>
    </section>
  );
}
