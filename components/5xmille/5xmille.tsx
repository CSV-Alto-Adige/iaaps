import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function FiveXMille() {
  return (
    <section className="border-b border-white">
      <div className="grid lg:grid-cols-2 gap-y-4 gap-x-1">
        <div className="relative h-[500px] bg-primary px-6 lg:px-0">
          <img
            src="/images/partecipare.jpeg"
            className="absolute inset-0 h-full w-full z-0 object-cover opacity-20"
          />
          <div className="relative z-10 flex flex-col justify-start pt-16 max-w-xl mx-auto h-full">
            <h2 className="text-4xl text-white font-bold">
              Desideri diventare socio?
            </h2>
            <p className="text-2xl font-light text-white/90 mt-6">
              Diventa parte di un network unico: entra in IAAP e potrai
              confrontarti con artisti, psicologi, critici e appassionati di
              ogni disciplina. Iscriviti oggi per dare forma alle tue idee,
              ampliare le tue competenze.
            </p>
            <Button
              asChild
              className="mt-10 mb-6 bg-accent border border-accent text-primary text-lg py-8 px-5 rounded-full cursor-pointer hover:bg-transparent hover:text-white hover:border-white"
            >
              <Link href="/area-soci">Diventa socio</Link>
            </Button>
          </div>
        </div>
        <div className="relative h-[500px] bg-primary px-6 lg:px-0">
          <img
            src="/images/sign.jpg"
            className="absolute inset-0 h-full w-full z-0 object-cover opacity-20"
          />
          <div className="relative z-10 flex flex-col justify-start pt-16 max-w-xl mx-auto h-full">
            <h2 className="text-4xl font-bold text-white">
              Area riservata soci
            </h2>
            <p className="text-2xl font-light text-white/90 mt-6">
              Entra nell&apos;area riservata per entrare in contatto con altri
              soci e ampliare la tua rete di conoscenze.
            </p>
            <Button
              asChild
              className="mt-10 mb-6 bg-accent border border-accent text-primary text-lg py-8 px-5 rounded-full cursor-pointer hover:bg-transparent hover:text-white hover:border-white"
            >
              <Link href="/area-soci">Area riservata</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
