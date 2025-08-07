"use client";

import { Bolt, Cloud, MessagesSquare, Star } from "lucide-react";
import { useEffect, useState } from "react";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const features = [
  {
    id: "feature-1",
    title: "Eventi e Attività",
    description:
      "Organizziamo eventi, conferenze e incontri per sensibilizzare e informare.",
    icon: Cloud,
    image: "/images/iaaps-eventi.jpg",
  },
  {
    id: "feature-2",
    title: "Biblioteca Graziella Margherita",
    description:
      "Offriamo una biblioteca dedicata alla psicologia e all'arte, in nome di Graziella Magherini.",
    icon: Star,
    image: "/images/iaaps-biblioteca.jpg",
  },
  {
    id: "feature-3",
    title: "Galleria Virtuale",
    description:
      "Organizziamo esposizioni virtuali per promuovere l'arte e la cultura.",
    icon: Bolt,
    image: "/images/iaaps-galleria.jpg",
  },
  {
    id: "feature-4",
    title: "Rete di Collaborazioni",
    description:
      "Collaboriamo con altre associazioni, enti e professionisti per creare una rete di supporto e condivisione.",
    icon: MessagesSquare,
    image: "/images/iaaps-eventi.jpg",
  },
];

const Mission = () => {
  const [selection, setSelection] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  const handleSelection = (index: number) => {
    carouselApi?.scrollTo(index);
  };

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setSelection(carouselApi.selectedScrollSnap());
    };
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="bg-white py-12 md:py-24 lg:pb-32 pt-12">
      <div className="container mx-auto grid grid-cols-12 items-center w-full justify-center pb-20">
        <div className="bg-primary h-[1px] col-span-5"></div>
        <p className="col-span-2 text-center text-primary">
          L&apos;ASSOCIAZIONE
        </p>
        <div className="bg-primary h-[1px] col-span-5"></div>
      </div>
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center md:mb-12 max-w-4xl mx-auto">
          <h1 className="text-5xl font-[400] text-balance sm:text-5xl">
            IAAPs - International Association for Art and Psychology
          </h1>
          <Button className="mt-10 mb-6 bg-primary border border-primary text-white text-lg py-8 px-5 rounded-full cursor-pointer hover:bg-transparent hover:text-primary hover:border-primary">
            Chi siamo
          </Button>
          <p className="text-2xl text-gray-600 font-light mt-6 pb-12">
            L’Associazione Arte e Psicologia è nata a Firenze nel 2000
            presieduta da Graziella Magherini, attuale presidente onorario. Lo
            scopo era soprattutto di approfondire i temi della creazione e
            fruizione dell’opera d’arte, nel rapporto fra psicologia e arti
            visive, proponendo un approccio all’arte di tipo interdisciplinare
            attraverso un confronto fra psicologi, artisti, storici e critici
            d’arte.
          </p>
        </div>
        <div className="relative container border border-primary/40 pt-20 pb-14 rounded-3xl">
          <div className="absolute w-[30px] h-[30px] border-t border-l border-primary/40 top-0 left-1/2 -translate-x-1/2 z-10 rotate-45 -mt-[15px] bg-white"></div>
          <div className="mx-auto flex max-w-7xl flex-col-reverse gap-6 md:flex-row md:gap-8 lg:gap-16">
            <div className="md:w-1/2 lg:w-2/5">
              <ul className="grid grid-cols-1 gap-3 md:flex md:flex-col md:gap-2">
                {features.map((feature, i) => {
                  const isSelected = selection === i;
                  return (
                    <li
                      key={feature.id}
                      className={`group relative flex cursor-pointer rounded-xl border px-4 py-3 transition-all duration-300 md:px-5 md:py-6 ${
                        isSelected
                          ? "border bg-primary shadow-sm"
                          : "hover:border-border hover:bg-gray-100 border-transparent"
                      }`}
                      data-open={isSelected ? "true" : undefined}
                      onClick={() => handleSelection(i)}
                    >
                      <div className="flex w-full items-start gap-3 md:gap-4">
                        <div className="min-w-0 flex-1">
                          <h3
                            className={`mb-1 text-sm transition-colors md:text-base lg:text-3xl ${
                              isSelected
                                ? "text-white"
                                : "text-muted-foreground"
                            }`}
                          >
                            {feature.title}
                          </h3>
                          <p
                            className={cn(
                              "mt-2 text-muted-foreground md:group-data-open:opacity-100 line-clamp-2 text-xs transition-all md:text-sm lg:text-lg font-light",
                              isSelected ? "text-white" : ""
                            )}
                          >
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="relative md:w-1/2 lg:w-3/5">
              <div className="border-border overflow-hidden rounded-xl border shadow-sm">
                <Carousel
                  setApi={setCarouselApi}
                  className="aspect-4/5 md:aspect-3/4 lg:aspect-4/5 max-h-[500px] w-full [&>div]:h-full"
                  opts={{
                    loop: true,
                  }}
                >
                  <CarouselContent className="mx-0 h-full w-full">
                    {features.map((feature) => (
                      <CarouselItem key={feature.id} className="px-0">
                        <div className="relative h-full w-full overflow-hidden">
                          <img
                            src={feature.image}
                            alt={feature.title}
                            className="h-full w-full object-cover object-center transition-transform duration-500"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>

              {/* Carousel indicators */}
              <div className="mt-5 flex justify-center gap-2">
                {features.map((_, i) => (
                  <button
                    key={i}
                    className={`size-2 rounded-full transition-all ${
                      selection === i
                        ? "bg-primary w-6"
                        : "bg-muted hover:bg-muted-foreground/50"
                    }`}
                    onClick={() => handleSelection(i)}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Mission };
