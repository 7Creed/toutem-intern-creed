import Image from "next/image";

export default function BestsellersSection() {
  return (
    <section
      className="bg-white px-5 md:px-20 lg:px-25 py-16 flex flex-col md:flex-row items-center bg-no-repeat bg-left-top md:bg-left"
      style={{
        backgroundImage: "url('/bg-flower.jpg')",
        backgroundSize: "200px",
      }}
    >
      <div className="relative mb-10 w-1/3">
        <div className="">
          <h3 className="text-green-500 text-2xl font-semibold mb-2 text-center md:text-start">
            Bestsellers
          </h3>
          <div className="flex justify-center items-center md:justify-start md:items-start">
            <button className="bg-green-400 hover:bg-green-500 text-white px-4 py-1 rounded text-sm">
              SHOP ALL
            </button>
          </div>
        </div>
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 opacity-10">
          <Image src="/bg-flower.jpg" alt="" width={120} height={120} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-2/3">
        <div className="bg-[#ededed] rounded-lg p-4 shadow-sm">
          <Image
            src="/diffuser-1.jpg"
            alt="Aroma Diffuser"
            width={240}
            height={240}
            className="rounded"
          />
          <div className="flex justify-between items-center mt-4 text-black">
            <div>
              <p className="font-semibold">
                Aroma Diffuser{" "}
                <span className="text-xs text-green-500 ml-2">$20</span>
              </p>
              <p className="text-gray-500 text-sm">Three styles, USB charger</p>
            </div>
            <button>
              <Image src="/cart-icon.jpg" alt="Cart" width={20} height={20} />
            </button>
          </div>
        </div>
        <div className="bg-[#ededed] rounded-lg p-4 shadow-sm">
          <Image
            src="/diffuser-2.jpg"
            alt="Lux Aroma Diffuser"
            width={240}
            height={240}
            className="rounded"
          />
          <div className="flex justify-between items-center mt-4 text-black">
            <div>
              <p className="font-semibold">
                Lux Aroma Diffuser{" "}
                <span className="text-xs text-green-500 ml-2">$15</span>
              </p>
              <p className="text-gray-500 text-sm">Decorative and fragrant</p>
            </div>
            <button>
              <Image src="/cart-icon.jpg" alt="Cart" width={20} height={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
