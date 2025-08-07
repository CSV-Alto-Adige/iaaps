import { Blend, Flower, LucideIcon, Users } from "lucide-react";

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
    title: "Mission e Obiettivi",
    content: {
      title: "Mission e Obiettivi",
      image: "/images/iaaps-eventi.jpg",
    },
    icon: Flower,
  },
  {
    title: "La nostra storia",
    content: {
      title: "Storia dell'Associazione",
      image: "/images/iaaps-eventi.jpg",
    },
    icon: Users,
  },
  {
    title: "Organigramma",
    content: {
      title: "Organigramma",
      image: "/images/iaaps-eventi.jpg",
    },
    icon: Blend,
  },
  {
    title: "Partner",
    content: {
      title: "Partner e rete",
      image: "/images/iaaps-hero.png",
    },
    icon: Users,
  },
];

const team = [
  {
    id: 1,
    name: "Roberto Boccalon",
    role: "Presidente",
    imageUrl: "/images/iaaps-logo.png",
  },
  {
    id: 2,
    name: "Silvia Cesco",
    role: "Vicepresidente",
    imageUrl: "/images/iaaps-logo.png",
  },
];

const partner = [
  {
    id: 1,
    name: "Partner 1",
    href: "#",
    imageUrl: "/images/iaaps-logo.png",
  },
];

const Chapters = () => {
  return (
    <section className="relative py-12 lg:py-20 dark:bg-[#2F332E]">
      <div className="container mx-auto px-8 lg:px-20">
        <div className="flex flex-wrap gap-y-6 lg:gap-y-0 justify-start lg:flex-nowrap lg:justify-between items-start">
          <h1 className="text-4xl font-[400] text-balance sm:text-4xl">
            Un approccio all’arte <br /> di tipo interdisciplinare
          </h1>
          <p className="max-w-2xl text-2xl text-gray-600 font-light lg:pl-20">
            Il nostro scopo è soprattutto di approfondire i temi della creazione
            e fruizione dell’opera d’arte, nel rapporto fra psicologia e arti
            visive, proponendo un approccio all’arte di tipo interdisciplinare
            attraverso un confronto fra psicologi, artisti, storici e critici
            d’arte.
          </p>
        </div>

        <Tabs
          defaultValue={FEATURES[0].title}
          orientation="vertical"
          className="mt-8 grid grid-cols-1 gap-4 rounded-xl md:mt-12 lg:mt-20 lg:grid-cols-4"
        >
          <div className="h-full">
            <TabsList className="flex h-[400px] lg:h-[750px] flex-col justify-start rounded-xl bg-gray-100 p-0 sticky top-20 w-full border-white">
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
                "col-span-1 m-0 overflow-hidden lg:col-span-3",
                feature.content.className
              )}
            >
              {feature.title === "Mission e Obiettivi" ? (
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
                    La IAAP si rivolge ad artisti, psicologi, psichiatri,
                    psicoanalisti, storici, critici e teorici dell’arte,
                    filosofi, scienziati, insegnanti e a tutti coloro che, a
                    vario titolo, intendono contribuire alla diffusione della
                    cultura nell’ambito delle relazioni tra arte e psicologia.
                  </p>
                  <p className="mt-6 text-xl/7 text-gray-700 max-w-5xl">
                    I principali ambiti di interesse nello studio della
                    creazione e della fruizione dell’arte sono:
                  </p>
                  <ul className="mt-6 list-disc pl-8 text-xl/7 text-gray-700 max-w-5xl">
                    <li className="mb-4">
                      Psicologia, psicoanalisi e arti figurative
                    </li>
                    <li className="mb-4">Letteratura e psicoanalisi</li>
                    <li className="mb-4">Musica e psicologia</li>
                    <li className="mb-4">Fotografia e psicologia</li>
                    <li className="mb-4">Arti terapie</li>
                    <li className="mb-4">Educazione estetica e museale</li>
                    <li className="mb-4">Arti irregolari o Outsider Art</li>
                    <li className="mb-4">Neuroestetica</li>
                  </ul>
                  <p className="mt-6 text-xl/7 text-gray-700 max-w-5xl">
                    Su queste tematiche l’associazione promuove numerose e
                    diversificate attività, tra cui:
                  </p>
                  <ul className="mt-6 list-disc pl-8 text-xl/7 text-gray-700 max-w-5xl">
                    <li className="mb-4">
                      Psicologia, psicoanalisi e arti figurative
                    </li>
                    <li className="mb-4">
                      Gruppi di studio – sia a livello regionale che nazionale
                    </li>
                    <li className="mb-4">
                      Cicli di conferenze e singoli incontri in collaborazione
                      con Università, Enti pubblici e privati
                    </li>
                    <li className="mb-4">
                      Convegni nazionali e internazionali
                    </li>
                    <li className="mb-4">Attività editoriali</li>
                  </ul>
                </div>
              ) : feature.title === "Organigramma" ? (
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
                  <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {team.map((post) => (
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
                            <h3 className="mt-6 text-xl/6 font-semibold text-gray-900 group-hover:text-gray-600">
                              {post.name}
                            </h3>
                            <p className="mt-2 text-lg/6 text-gray-600">
                              {post.role}
                            </p>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              ) : feature.title === "Partner" ? (
                <div className="pb-4 text-balance px-6">
                  <h4 className="text-3xl font-semibold mt-4">
                    {feature.content.title}
                  </h4>
                  <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {partner.map((post) => (
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
                            <h3 className="mt-6 text-xl/6 font-semibold text-gray-900 group-hover:text-gray-600">
                              {post.name}
                            </h3>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              ) : (
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
                    L’Associazione Arte e Psicologia è nata a Firenze nel 2000
                    presieduta da Graziella Magherini, attuale presidente
                    onorario. Lo scopo era soprattutto di approfondire i temi
                    della creazione e fruizione dell’opera d’arte, nel rapporto
                    fra psicologia e arti visive, proponendo un approccio
                    all’arte di tipo interdisciplinare attraverso un confronto
                    fra psicologi, artisti, storici e critici d’arte.
                  </p>
                  <p className="mt-6 text-xl/7 text-gray-700 max-w-5xl">
                    L’interesse successivamente si è allargato al mondo della
                    musica, della letteratura e ad altri settori a essi
                    collegati. Presto dalla città di Firenze, la partecipazione
                    all&apos;Associazione si è moltiplicata in altre parti
                    d&apos;Italia, venendosi a costituire diverse Sezioni
                    regionali autonome.
                  </p>
                  <p className="mt-6 text-xl/7 text-gray-700 max-w-5xl">
                    Nel 2007 l’associazione ha assunto la denominazione di
                    &quot;International Association for Art and Psychology&quot;
                    (IAAP) e si è formato un Comitato Scientifico
                    Internazionale.
                  </p>
                  <Button className="mt-12 py-6 text-xl">
                    Scarica il Nostro Statuto
                  </Button>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
      <img
        src="/images/tulipano.png"
        alt=""
        className="hidden lg:block absolute -z-10 right-0 bottom-0 h-[660px]object-cover opacity-30"
      />
    </section>
  );
};

export default Chapters;
