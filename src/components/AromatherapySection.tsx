import Image from "next/image";

export default function AromatherapySection() {
  return (
    <section className="relative bg-white flex flex-col md:flex-row items-center justify-between px-5 md:px-20 lg:px-25 py-20">
      <div className="relative w-full lg:w-1/2">
        {/* <div className="absolute -top-10 -left-10 w-[70%] h-[80%] bg-green-300 rounded-br-full -z-10"></div> */}
        <Image src="/image-5.jpg" alt="image" width={450} height={450} />
      </div>
      <div className="w-full md:w-1/2 text-center md:text-right">
        <h2 className="text-3xl font-bold text-green-500 mb-4">
          Improve your well-being with Aromatherapy
        </h2>
        <p className="text-gray-600 mb-6">
          Diffusing can be exactly what you need to add purpose and focus to
          your daily tasks. We’ve got tons of fun diffuser blends, with scents
          to suit every mood, day, and situation.
        </p>
        <button className="bg-green-400 hover:bg-green-500 text-white px-6 py-2 rounded">
          EXPLORE THE COLLECTION
        </button>
      </div>
    </section>
  );
}
