import { Button } from "../ui/button";

const posts = [
  {
    id: 1,
    title: "Evento",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl: "/images/iaaps-eventi.jpg",
  },
  {
    id: 2,
    title: "Nuova esposizione virtuale",
    href: "#",
    description:
      "Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.",
    imageUrl: "/images/iaaps-galleria.jpg",
  },
  {
    id: 3,
    title: "Il nostro sito web",
    href: "#",
    description:
      "Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis. Nostrud sint anim sunt aliqua. Nulla eu labore irure incididunt velit cillum quis magna dolore.",
    imageUrl: "/images/website.webp",
  },
  {
    id: 4,
    title: "Annuncio",
    href: "#",
    description:
      "Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis. Nostrud sint anim sunt aliqua. Nulla eu labore irure incididunt velit cillum quis magna dolore.",
    imageUrl: "/images/iaaps-biblioteca.jpg",
  },
];

export default function Blog() {
  return (
    <div className="bg-white py-24 sm:pb-6 sm:pt-32">
      <div className="container mx-auto grid grid-cols-12 items-center w-full justify-center pb-20">
        <div className="bg-primary h-[1px] col-span-5"></div>
        <p className="col-span-2 text-center text-primary">Attualità</p>
        <div className="bg-primary h-[1px] col-span-5"></div>
      </div>
      <div className="mx-auto container px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <h1 className="text-5xl font-[400] text-balance sm:text-5xl">
            In Evidenza
          </h1>
          <Button className="bg-primary border border-primary text-white text-lg py-8 px-5 rounded-full cursor-pointer hover:bg-transparent hover:text-primary hover:border-primary">
            Tutte le Novità
          </Button>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col items-start justify-between"
            >
              <div className="relative w-full">
                <img
                  alt=""
                  src={post.imageUrl}
                  className="aspect-video w-full bg-gray-100 object-cover sm:aspect-2/1 lg:aspect-3/2 rounded-2xl"
                />
                <div className="absolute inset-0 inset-ring inset-ring-gray-900/10 rounded-2xl" />
              </div>
              <div className="flex max-w-xl grow flex-col justify-between">
                <div className="group relative grow">
                  <h3 className="mt-8 text-2xl/6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-3 line-clamp-2 text-xl/6 text-gray-500 font-light">
                    {post.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
