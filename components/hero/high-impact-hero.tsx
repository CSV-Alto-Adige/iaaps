"use client";

import { useRef, useState } from "react";
import { Button } from "../ui/button";
import { Facebook, Phone } from "lucide-react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";

export default function HighImpactHero() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [background, setBackground] = useState(false);

  const lastScrollY = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollY.current;
    const scrollingDown = latest > previous;
    const scrollingUp = latest < previous;

    if (latest < 150) {
      setHidden(false);
      setBackground(false);
    } else if (scrollingDown) {
      setHidden(true);
      setBackground(true);
    } else if (scrollingUp) {
      setHidden(false);
      setBackground(true);
    }

    lastScrollY.current = latest;
  });

  return (
    <>
      <div className="bg-[#013529] ">
        <div className="relative isolate overflow-hidden pt-14 flex items-end h-[93vh]">
          <img
            alt=""
            src="/images/iaaps-hero.png"
            className="absolute inset-0 -z-10 size-full object-contain opacity-20 "
          />

          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ffce80] to-[#fcdf89] opacity-20 sm:left-[calc(50%-30rem)] sm:w-288.75"
            />
          </div>
          <div className="max-w-7xl px-12 mx-auto">
            <div className="mx-auto max-w-5xl">
              <div className="mx-auto text-center pb-40">
                <h1 className="text-5xl font-[400] tracking-[-2.8px] text-balance text-white sm:text-9xl leading-20">
                  Arte e Psicologia
                </h1>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Button className="bg-accent border border-primary text-gray-900 text-xl py-10 px-12 rounded-full font-light cursor-pointer hover:bg-white/10 hover:text-white hover:border-white">
                    Cosa Facciamo
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-white/10 text-white text-xl py-10 px-12 rounded-full font-light cursor-pointer hover:border-accent"
                  >
                    L&apos;associazione
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-288.75"
            />
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 right-12 grid grid-cols-3 bg-white pl-6 max-w-2xl gap-x-6 z-50 shadow border-t border-x border-gray-200">
        <div className="text-lg flex items-center tracking-wide col-span-2">
          <span className="mr-1 text-2xl">@</span>
          info@iaaps.it
        </div>

        <a
          href="https://www.facebook.com/profile.php?id=100039471375019"
          target="_blank"
          className="text-lg rounded-none flex justify-center items-center tracking-wide bg-primary text-white p-4 col-span-1"
        >
          <Facebook className="h-5 w-auto" />
        </a>
      </div>
    </>
  );
}
