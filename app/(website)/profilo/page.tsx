import React from "react";
import { ProfileForm } from "./form";

export default function Page() {
  return (
    <div>
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          alt=""
          src="/images/iaaps-hero.png"
          className="absolute inset-0 -z-10 size-full object-cover opacity-20 object-top"
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
        <div className="mx-auto px-8 lg:px-20 container">
          <div className="mx-auto lg:mx-0 pt-20">
            <h1 className="text-5xl font-[400] tracking-[-2.8px] text-balance text-white sm:text-7xl leading-16 lg:leading-20">
              Il tuo profilo
            </h1>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-8 lg:px-20 my-12">
        <ProfileForm />
      </div>
    </div>
  );
}
