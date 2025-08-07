import React from "react";
import { Button } from "../ui/button";

export default function CtaFooter() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl text-center py-20">
        <hgroup>
          <h1 className="text-5xl font-[400] text-balance sm:text-5xl">
            Hai bisogno di un contatto diretto?
          </h1>
        </hgroup>
        <p className="mx-auto text-2xl text-gray-600 font-light mt-6">
          Ci trovi il <span className="font-semibold">lunedì</span>,{" "}
          <span className="font-semibold">martedì</span>,
          <span className="font-semibold">mercoledì</span> e{" "}
          <span className="font-semibold">venerdì</span> dalle{" "}
          <span className="font-semibold">08.30</span> alle{" "}
          <span className="font-semibold">12.30</span>.
          <br /> Oppure il <span className="font-semibold">
            giovedì
          </span> dalle <span className="font-semibold">15.00</span> alle{" "}
          <span className="font-semibold">18.00</span>. Presso la{" "}
          <span className="font-semibold">
            nostra sede in Via Galileo-Galilei 4a
          </span>
          , Bolzano o contattandoci{" "}
          <span className="font-semibold">telefonicamente</span> al numero{" "}
          <span className="font-semibold">+39 0471 931888</span>.
        </p>
        <div className="mt-8 flex justify-center">
          <Button className="bg-primary border border-primary text-white text-lg py-8 px-12 rounded-full cursor-pointer hover:bg-transparent hover:text-primary hover:border-primary">
            Contattaci
          </Button>
        </div>
      </div>
    </section>
  );
}
