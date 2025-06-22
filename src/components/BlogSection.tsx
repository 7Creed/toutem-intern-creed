import Image from "next/image";

interface CardItem {
  id: number;
  image: string;
  title: string;
  desc: string;
}

const cardData: CardItem[] = [
  {
    id: 1,
    image: "/blog.jpg",
    title: "How to create your own essential oil diffuser blends",
    desc: "As you begin creating your own diffuser blends, it’s important to keep a few ...",
  },
  {
    id: 2,
    image: "/blog.jpg",
    title: "How to create your own essential oil diffuser blends",
    desc: "As you begin creating your own diffuser blends, it’s important to keep a few ...",
  },
  {
    id: 3,
    image: "/blog.jpg",
    title: "How to create your own essential oil diffuser blends",
    desc: "As you begin creating your own diffuser blends, it’s important to keep a few ...",
  },
  //   {
  //     id: 4,
  //     image: "/blog.jpg",
  //     title: "How to create your own essential oil diffuser blends",
  //     desc: "As you begin creating your own diffuser blends, it’s important to keep a few ...",
  //   },
];

export default function BlogSection() {
  return (
    <section className="bg-white px-5 md:px-20 lg:px-25 py-16">
      <h3 className="text-green-500 text-3xl font-bold mb-10 text-center">
        BLOG
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cardData.map((card, index) => (
          <div key={card.id} className="bg-white rounded-lg shadow p-4">
            <Image
              src={card.image}
              alt="Blog Post"
              width={400}
              height={300}
              className="rounded mb-4"
            />
            <p className="text-green-600 font-semibold mb-1">{card.title} </p>
            <p className="text-sm text-gray-600">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
