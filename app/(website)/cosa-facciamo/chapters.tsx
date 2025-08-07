import {
  Blend,
  CircleDot,
  Flower,
  LucideIcon,
  MoveRight,
  Users,
} from "lucide-react";

import { cn } from "@/lib/utils";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

type FeatureContent = {
  title: string;
  description?: string;
  image: string;
  className?: string;
};

const FEATURES: Array<{
  title: string;
  description?: string;
  content: FeatureContent;
  icon: LucideIcon;
}> = [
  {
    title: "Le attività organizzate dall'associazione",
    content: {
      title: "Le attività organizzate dall'associazione",
      description: ` `,
      image: "/images/attivita.webp",
    },
    icon: CircleDot,
  },
  {
    title: "Missione e Obbiettivi",
    content: {
      title: "Unser Leitbild",
      image: "/leitbild.jpg",
    },
    icon: Flower,
  },
  {
    title: "Consiglio Direttivo",
    content: {
      title: "Unsere Ziele",
      image: "/ziele.jpg",
    },
    icon: Blend,
  },
  {
    title: "Collaboratori/trici",
    content: {
      title: "Unser Vorstand",
      image: "/vorstand.jpg",
    },
    icon: Users,
  },
  {
    title: "La nostra storia",
    content: {
      title: "Unser Vorstand",
      image: "/vorstand.jpg",
    },
    icon: Users,
  },
];

const posts = [
  {
    id: 1,
    title:
      "Organizzazione e sostegno dei gruppi di autoaiuto nonchè dei gruppi di familiari",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl: "/images/gruppi.jpeg",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Michael Foster",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "Consulenza ed assistenza dei parkinsoniani e loro familiari",
    href: "#",
    description:
      "Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.",
    imageUrl: "/images/aiuto.jpeg",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    author: {
      name: "Lindsay Walton",
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    title:
      "Trasmissione di informazioni sulla malattia di Parkinson agli ammalati, ai loro parenti ed al pubblico tramite l'organizzazione di congressi, conferenze, giornate Parkinson",
    href: "#",
    description:
      "Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis.",
    imageUrl: "/images/informazione.webp",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    author: {
      name: "Tom Cook",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

const Chapters = () => {
  return (
    <section className="py-12 lg:py-32 dark:bg-[#2F332E]">
      <div className="container mx-auto px-20">
        <div className="flex justify-between items-start">
          <h1 className="text-5xl font-[400] text-balance sm:text-4xl">
            Trova supporto, informazioni e attività. <br />
            Per persone con Parkinson e familiari.
          </h1>
          <p className="max-w-2xl text-2xl text-gray-600 font-light pl-20">
            Un’ampia e variegata gamma di proposte di supporto, informazione e
            tempo libero per le persone affette da Parkinson, i loro familiari e
            tutti gli interessati{" "}
          </p>
        </div>

        <Tabs
          defaultValue={FEATURES[0].title}
          orientation="vertical"
          className="mt-8 grid grid-cols-1 gap-4 rounded-xl md:mt-12 lg:mt-20 lg:grid-cols-4"
        >
          <div className="h-full">
            <TabsList className="flex h-[750px] flex-col justify-start rounded-xl bg-gray-100 p-0 sticky top-20 w-full border-white">
              {FEATURES.map((feature) => (
                <TabsTrigger
                  key={feature.title}
                  value={feature.title}
                  className="group w-full justify-start px-4 py-3 text-start whitespace-normal text-gray-700 transition-colors duration-300 data-[state=active]:rounded-lg data-[state=active]:text-white data-[state=active]:shadow-xl data-[state=active]:bg-primary lg:px-6 lg:py-4 dark:text-gray-300 dark:data-[state=active]:text-white border-x-0 border-t-0 border-b-2 rounded-none border-white"
                >
                  <div className="flex items-center gap-3 pl-6">
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {FEATURES.map((feature) => (
            <TabsContent
              key={feature.title}
              value={feature.title}
              className={cn(
                "col-span-1 m-0 overflow-hidden bg-background lg:col-span-3",
                feature.content.className
              )}
            >
              {feature.title === "Le attività organizzate dall'associazione" ? (
                // ←– your custom div for “Unsere Tätigkeitsbereiche”
                <div className="px-0 md:px-6">
                  <h4 className="text-3xl font-semibold mt-4">
                    {feature.content.title}
                  </h4>
                  <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                      <article
                        key={post.id}
                        className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pt-80 pb-8 sm:pt-48 lg:pt-48"
                      >
                        <img
                          alt=""
                          src={post.imageUrl}
                          className="absolute inset-0 -z-10 size-full object-cover"
                        />
                        <div className="absolute inset-0 -z-10 bg-linear-to-t from-gray-900 via-gray-900/40" />
                        <div className="absolute inset-0 -z-10 rounded-2xl inset-ring inset-ring-gray-900/10" />

                        <h3 className="mt-3 text-lg/6 font-semibold text-white">
                          <a href={post.href}>
                            <span className="absolute inset-0" />
                            {post.title}
                          </a>
                        </h3>
                      </article>
                    ))}
                  </div>
                </div>
              ) : feature.title === "Unser Leitbild" ? (
                // ←– your custom div for “Unsere Tätigkeitsbereiche”
                <div className="px-0 md:px-6">
                  <img
                    src={feature.content.image}
                    alt={feature.title}
                    className="h-[420px] w-full rounded-lg object-cover lg:h-[312px] lg:flex-1"
                  />
                  <h4 className="text-3xl font-semibold mt-16">
                    {feature.content.title}
                  </h4>
                  <p className="mt-6 text-xl/7 text-gray-700 max-w-5xl">
                    Die Arbeitsgemeinschaft für die biologisch-dynamische
                    Wirtschaftsweise stützt sich auf die Angaben von Rudolf
                    Steiner, anlässlich des sogenannten “Landwirtschaftlichen
                    Kurses” 1924 in Koberwitz (R. Steiner:
                    Geisteswissenschaftliche Grundlagen zum Gedeihen der
                    Landwirtschaft, GA 640, R.-Steiner-Verlag, Dornach). Im
                    Sinne der laut R. Steiner anzustrebenden sozialen
                    Dreigliederung der Gesellschaft versteht sich die ARGE als
                    freie und unabhängige geistige Plattform.
                  </p>
                  <Button
                    asChild
                    className="mt-12 h-fit w-2/4 rounded-full px-12 py-3.5 font-semibold text-nowrap lg:py-4 lg:text-lg bg-linear-to-bl from-[#55ce68] to-[#45b986] text-gray-900"
                  >
                    <a href="/mitgliedschaft">
                      Broschüre herunterladen <MoveRight />
                    </a>
                  </Button>
                </div>
              ) : feature.title === "Unsere Ziele" ? (
                // ←– custom div for “Unsere Ziele”
                <div className="px-0 md:px-6">
                  <img
                    src={feature.content.image}
                    alt={feature.title}
                    className="h-[420px] w-full rounded-lg object-cover lg:h-[312px] lg:flex-1"
                  />
                  <h4 className="text-3xl font-semibold mt-16">
                    {feature.content.title}
                  </h4>
                  <p className="mt-6 text-xl/7 text-gray-700 max-w-5xl">
                    Die Arbeitsgemeinschaft für die biologisch-dynamische
                    Wirtschaftsweise verfolgt folgende Ziele:
                  </p>
                  <ul className="mt-6 list-disc pl-8 text-xl/7 text-gray-700 max-w-5xl">
                    <li className="mb-4">
                      Förderung der Produktion hochwertiger Lebensmittel, unter
                      Berücksichtigung einer natürlichen und nachhaltigen
                      Bewirtschaftung des Bodens.
                    </li>
                    <li className="mb-4">
                      Förderung und Verbreitung der biologisch-dynamischen
                      Wirtschaftsweise.
                    </li>
                    <li className="mb-4">
                      Fortbildung im Sinne der Weiterentwicklung des Menschen
                      und der Landwirtschaft auf der Grundlage der
                      Anthroposophie.
                    </li>
                    <li className="mb-4">
                      Herstellung der Präparate unter Einbeziehung aller
                      Mitglieder.
                    </li>
                    <li className="mb-4">
                      Förderung des gegenseitigen Gedankenaustausches sowie
                      Unterstützung und Beratung in einer geschwisterlichen
                      Grundhaltung.
                    </li>
                  </ul>
                </div>
              ) : (
                // ←– default for all other tabs
                <div className="pb-4 text-balance px-6">
                  <img
                    src={feature.content.image}
                    alt={feature.title}
                    className="h-[420px] w-full rounded-lg object-cover lg:h-[412px] lg:flex-1"
                  />
                  <h4 className="text-3xl font-semibold mt-16">
                    {feature.content.title}
                  </h4>
                  <p className="mt-6 text-xl/7 text-gray-700 max-w-5xl">
                    <span className="text-green-600 font-bold">
                      Namen v.l.n.r.:
                    </span>{" "}
                    Christian Drescher, Katharina Alverà, Klaus Visintin,
                    Andreas Zuegg (Obmann), Stefano Franceschin, Klaus Mader,
                    Andreas Dichristin, Bernhard Zuegg, Marco Devigili
                  </p>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Chapters;
