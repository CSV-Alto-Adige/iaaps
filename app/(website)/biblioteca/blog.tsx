import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";

const posts = [
  {
    id: 1,
    title: "Libro 1",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl: "images/iaaps-biblioteca.jpg",
  },
  {
    id: 2,
    title: "Libro 2",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl: "images/iaaps-biblioteca.jpg",
  },
  {
    id: 3,
    title: "Libro 3",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl: "images/iaaps-biblioteca.jpg",
  },
];

export default function Blog() {
  return (
    <div className="bg-white pt-0 pb-20 ">
      <Tabs defaultValue="libri" className="mt-12">
        <TabsList className="hidden lg:flex py-8 lg:px-12 bg-gray-100">
          <TabsTrigger
            value="libri"
            className="text-lg p-6 data-[state=active]:bg-primary data-[state=active]:text-white"
          >
            Libri
          </TabsTrigger>
          <TabsTrigger
            value="tesi"
            className="text-lg p-6 data-[state=active]:bg-primary data-[state=active]:text-white"
          >
            Tesi di laurea
          </TabsTrigger>
          <TabsTrigger
            value="audio"
            className="text-lg p-6 data-[state=active]:bg-primary data-[state=active]:text-white"
          >
            Audio
          </TabsTrigger>
          <TabsTrigger
            value="video"
            className="text-lg p-6 data-[state=active]:bg-primary data-[state=active]:text-white"
          >
            Video
          </TabsTrigger>
        </TabsList>
        <TabsContent value="libri">
          <div className="mx-auto">
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
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
                      <p className="mt-6 line-clamp-2 text-lg/6 text-gray-600">
                        {post.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
