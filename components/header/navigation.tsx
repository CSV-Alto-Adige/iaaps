"use client";

import { useRef, useState } from "react";
import { Button } from "../ui/button";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navigation4() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [background, setBackground] = useState(false);

  const lastScrollY = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollY.current;
    const scrollingDown = latest > previous;
    const scrollingUp = latest < previous;

    if (latest < 100) {
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
      <div className="bg-primary py-4 z-50 relative flex items-center justify-between px-6 lg:px-14 gap-x-8">
        <p className="text-white tex-sm md:text-xl tracking-wide">
          Arte e Psicologia
        </p>
        <div className="flex items-center gap-x-6">
          <div className="flex items-center gap-x-4 text-white text-xl">
            <svg
              width="9"
              height="9"
              viewBox="0 0 9 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 9L9 0L0 -3.93402e-07L9 9Z" fill="white"></path>
            </svg>
            IT
          </div>
        </div>
      </div>
      <motion.header
        variants={{
          hidden: { y: "-150%" },
          visible: { y: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={cn(
          "fixed inset-x-0 z-50",
          background
            ? "bg-white/90 backdrop-blur-xl border-b border-primary/20 top-0"
            : "bg-transparent top-14"
        )}
      >
        <nav
          aria-label="Global"
          className={cn(
            "flex items-center justify-between px-8 lg:p-6 lg:px-12",
            background ? " py-2" : "py-8"
          )}
        >
          <div className="flex lg:flex-1">
            <Link
              href="/"
              className="md:mt-0 md:-m-1.5 p-1.5 flex items-center gap-x-4"
            >
              <img
                alt=""
                src="/images/iaaps-logo.png"
                className=" h-16 md:h-24 w-auto rounded-full"
              />
              <span className="text-white">IAAPS</span>
            </Link>
          </div>
          <Sheet>
            <SheetTrigger asChild className="2xl:hidden">
              <Button variant="outline" size="icon" className="p-6">
                <Menu className="size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto">
              <SheetHeader>
                <SheetTitle>
                  <a href="" className="flex items-center gap-2">
                    <img
                      src="/images/iaaps-logo.png"
                      className="max-h-12 dark:invert"
                      alt=""
                    />
                  </a>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-2 p-4">
                <Accordion
                  type="single"
                  collapsible
                  className="flex w-full flex-col gap-4 border-b last:border-b-0"
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg font-semibold data-[state=open]:text-primary">
                      Chi Siamo
                    </AccordionTrigger>
                    <AccordionContent className="text-lg pl-4 flex flex-col gap-2">
                      <SheetClose asChild>
                        <Link href="chi-siamo">Mission e obiettivi</Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href="chi-siamo">La Nostra Storia</Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href="chi-siamo">Organigramma</Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href="chi-siamo">Rete e Partner</Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href="chi-siamo">Cartella Stampa</Link>
                      </SheetClose>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-lg font-semibold data-[state=open]:text-primary">
                      Cosa Facciamo
                    </AccordionTrigger>
                    <AccordionContent className="text-lg pl-4  flex flex-col gap-2">
                      <SheetClose asChild>
                        <Link href="cosa-facciamo">Attività</Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href="eventi">Eventi</Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href="biblioteca">
                          Biblioteca Graziella Margherita
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href="galleria-virtuale">Galleria virtuale</Link>
                      </SheetClose>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-lg font-semibold data-[state=open]:text-primary">
                      Attualità
                    </AccordionTrigger>
                    <AccordionContent className="text-lg pl-4  flex flex-col gap-2">
                      <SheetClose asChild>
                        <Link href="news">Novità</Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href="archivio">Archivio News</Link>
                      </SheetClose>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <SheetClose asChild>
                  <Link href="contatti" className="text-lg font-semibold py-4">
                    Contattaci
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Button asChild>
                    <Link href="area-soci">Area Riservata Soci</Link>
                  </Button>
                </SheetClose>

                <div className="flex flex-col gap-3"></div>
              </div>
            </SheetContent>
          </Sheet>
          <div className="hidden 2xl:flex lg:gap-x-12">
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger
                className={cn(
                  "text-xl flex items-center gap-x-2 cursor-pointer",
                  background
                    ? "text-gray-900 font-normal hover:text-gray-500"
                    : "text-white font-extralight hover:text-gray-300"
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
                Chi Siamo
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-2 py-2">
                <DropdownMenuItem
                  asChild
                  className="text-lg pr-12 hover:cursor-pointer"
                >
                  <Link href="chi-siamo"> Mission e Obiettivi</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  asChild
                  className="text-lg pr-12 hover:cursor-pointer"
                >
                  <Link href="chi-siamo"> La nostra Storia</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-lg pr-12 hover:cursor-pointer">
                  <Link href="chi-siamo"> Organigramma</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  asChild
                  className="text-lg pr-12 hover:cursor-pointer"
                >
                  <Link href="chi-siamo"> Partner e Rete</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  asChild
                  className="text-lg pr-12 hover:cursor-pointer"
                >
                  <Link href="chi-siamo"> Cartella Stampa</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger
                className={cn(
                  "text-xl flex items-center gap-x-2 cursor-pointer",
                  background
                    ? "text-gray-900 font-normal hover:text-gray-500"
                    : "text-white font-extralight hover:text-gray-300"
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
                Cosa Facciamo
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-2 py-2">
                <DropdownMenuItem
                  asChild
                  className="text-lg pr-12 hover:cursor-pointer"
                >
                  <Link href="cosa-facciamo">Attività</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  asChild
                  className="text-lg pr-12 hover:cursor-pointer"
                >
                  <Link href="eventi">Eventi</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  asChild
                  className="text-lg pr-12 hover:cursor-pointer"
                >
                  <Link href="biblioteca">Biblioteca Graziella Margherita</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  asChild
                  className="text-lg pr-12 hover:cursor-pointer"
                >
                  <Link href="galleria-virtuale">Galleria Virtuale</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger
                className={cn(
                  "text-xl flex items-center gap-x-2 cursor-pointer",
                  background
                    ? "text-gray-900 font-normal hover:text-gray-500"
                    : "text-white font-extralight hover:text-gray-300"
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
                Attualità
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-2 py-2">
                <DropdownMenuItem
                  asChild
                  className="text-lg pr-12 hover:cursor-pointer"
                >
                  <Link href="news">Novità</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  asChild
                  className="text-lg pr-12 hover:cursor-pointer"
                >
                  <Link href="archivio">Archivio News</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <a
              href="contatti"
              className={cn(
                "text-xl flex items-center gap-x-2 cursor-pointer",
                background
                  ? "text-gray-900 font-normal hover:text-gray-500"
                  : "text-white font-extralight hover:text-gray-300"
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
              Contattaci
            </a>
          </div>
          <div className="hidden 2xl:flex lg:flex-1 lg:justify-end gap-x-6">
            <Button
              variant="outline"
              className={cn(
                "text-xl py-8 px-8 rounded-full cursor-pointer",
                background
                  ? "text-primary border-primary font-normal hover:bg-primary hover:text-white bg-transparent"
                  : "bg-white/10 text-white font-extralight"
              )}
              asChild
            >
              <Link href="/area-soci">Area Riservata Soci</Link>
            </Button>
          </div>
        </nav>
      </motion.header>
    </>
  );
}
