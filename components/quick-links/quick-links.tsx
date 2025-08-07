import { cn } from "@/lib/utils";
import { text } from "stream/consumers";

const posts = [
  {
    id: 1,
    title: "",
    href: "#",
    imageUrl: "/images/iaaps-eventi.jpg",
  },
  {
    id: 2,
    title: "I nostri eventi",
    href: "#",
    backgroundColor: "bg-white",
    textColor: "text-gray-900",
    description: "Partecipa ai nostri eventi, conferenze e incontri.",
    cta: "Scopri di più",
  },
  {
    id: 3,
    title: "",
    href: "#",
    imageUrl: "/images/iaaps-biblioteca.jpg",
  },
  {
    id: 4,
    title: "Biblioteca Graziella Margherita",
    href: "#",
    backgroundColor: "bg-primary",
    description:
      "Sfoglia la nostra biblioteca dedicata alla psicologia e all'arte.",
    cta: "Scopri di più",
  },
  {
    id: 5,
    title: "Galleria Virtuale",
    href: "#",
    backgroundColor: "bg-primary",
    description: "Esplora la nostra galleria virtuale di opere d'arte.",
    cta: "Scopri di più",
  },
  {
    id: 6,
    title: "",
    href: "#",
    imageUrl: "/images/iaaps-galleria.jpg",
  },
  {
    id: 7,
    title: "Attualità e Approfondimenti",
    href: "#",
    backgroundColor: "bg-white",
    textColor: "text-gray-900",
    description: "Articoli, ricerche e novità utili.",
    cta: "Scopri di più",
  },
  {
    id: 8,
    title: "",
    href: "#",
    imageUrl: "/images/website.webp",
  },
];

export default function QuickLinks() {
  return (
    <>
      <div className="py-24 sm:py-20">
        <div className="mx-auto container px-6 lg:px-8">
          <div className="flex justify-between items-start">
            <h1 className="text-5xl font-[400] text-balance sm:text-4xl">
              Per professionisti e appassionati di arte e psicologia.
            </h1>
            <p className="max-w-2xl text-2xl text-gray-600 font-light pl-20">
              La IAAP si rivolge ad artisti, psicologi, psichiatri,
              psicoanalisti, storici, critici e teorici dell&apos;arte,
              filosofi, scienziati, insegnanti e a tutti coloro che, a vario
              titolo, intendono contribuire alla diffusione della cultura
              nell&apos;ambito delle relazioni tra arte e psicologia.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {posts.map((post) => (
              <article
                key={post.id}
                className={cn(
                  "group relative isolate flex flex-col justify-between overflow-hidden bg-gray-900 px-8 pb-8 h-[450px] py-12 rounded-4xl",
                  post.backgroundColor ? post.backgroundColor : "bg-gray-900"
                )}
              >
                {post.imageUrl && (
                  <img
                    alt=""
                    src={post.imageUrl || ""}
                    className="absolute inset-0 -z-10 size-full object-cover"
                  />
                )}
                <div className="absolute inset-0 -z-10 ring-1 ring-inset ring-gray-900/10 rounded-4xl" />
                <h3
                  className={cn(
                    "mt-3 text-3xl/8  text-white group-hover:underline decoration-[2px] underline-offset-4",
                    post.textColor || "text-white"
                  )}
                >
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                {post.description && (
                  <div>
                    <p
                      className={cn(
                        "text-xl font-light",
                        post.textColor ? "text-gray-500" : "text-white/70"
                      )}
                    >
                      {post.description}
                    </p>
                    {post.cta && (
                      <a
                        href={post.href}
                        className={cn(
                          "mt-8 underline underline-offset-4 decoration-[1px] group-hover:underline-offset-8 flex items-center gap-x-2",
                          post.textColor || "text-white"
                        )}
                      >
                        <svg
                          width="9"
                          height="9"
                          viewBox="0 0 9 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 9L9 0L0 -3.93402e-07L9 9Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                        {post.cta}
                      </a>
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
