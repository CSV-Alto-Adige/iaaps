import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "Socio 1",
    href: "#",
    imageUrl: "images/iaaps-logo.png",
  },
  {
    id: 2,
    title: "Socio 2",
    href: "#",
    imageUrl: "images/iaaps-logo.png",
  },
  {
    id: 3,
    title: "Socio 3",
    href: "#",
    imageUrl: "images/iaaps-logo.png",
  },
  {
    id: 4,
    title: "Socio 4",
    href: "#",
    imageUrl: "images/iaaps-logo.png",
  },
  {
    id: 5,
    title: "Socio 5",
    href: "#",
    imageUrl: "images/iaaps-logo.png",
  },
];

export default function Blog() {
  return (
    <div className="bg-white pt-0 pb-20 ">
      <div className="mx-auto mt-16">
        <div className="grid w-full max-w-sm items-center gap-1.5 ml-auto">
          <div className="relative">
            <div className="absolute left-2.5 top-4 h-6 w-6 text-muted-foreground">
              <SearchIcon className="h-4 w-4" />
            </div>
            <Input
              id="search"
              type="search"
              placeholder="Cerca un socio..."
              className="w-full rounded-lg bg-background pl-8 border-primary py-6"
            />
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col items-start justify-between"
            >
              <div className="relative w-full">
                <img
                  alt=""
                  src={post.imageUrl}
                  className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-2/1 lg:aspect-3/2"
                />
                <div className="absolute inset-0 rounded-2xl inset-ring inset-ring-gray-900/10" />
              </div>
              <div className="flex max-w-xl grow flex-col justify-between">
                <div className="group relative grow">
                  <h3 className="mt-6 text-2xl/6 font-semibold text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
