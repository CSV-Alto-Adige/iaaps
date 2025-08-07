import { CalendarClock, Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import Contactform from "./form";

export default function Page() {
  return (
    <div>
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          alt=""
          src="/images/iaaps-hero.png"
          className="absolute inset-0 -z-10 size-full object-cover opacity-20 "
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
        <div className="mx-auto px-20 container">
          <div className="mx-auto lg:mx-0 pt-20">
            <h1 className="text-5xl text-center font-[400] tracking-[-2.8px] text-balance text-white sm:text-7xl leading-20">
              Contatti
            </h1>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-8 lg:px-20 text-xl">
        <section className="py-20">
          <div className="container mx-auto">
            <div className="mb-12">
              <p className="text-balance text-4xl font-medium md:text-5xl leading-tight">
                Hai domande, esigenze o necessita di assistenza? <br />
                Siamo a tua disposizione.
              </p>
            </div>
            <div className="mt-6 grid items-start gap-10 md:grid-cols-2">
              <div className="h-full">
                <div className="grid  items-start gap-10 xl:grid-cols-2 sticky top-40">
                  <div className="rounded-lg bg-white p-6 min-h-40 h-full border border-primary">
                    <div className="flex items-center gap-4 mb-4">
                      <Mail className="h-6 w-auto text-primary" />
                      <p className="text-sm font-medium text-gray-500">Email</p>
                    </div>
                    <a href="#" className="text-lg hover:underline">
                      info@iaaps.it
                    </a>
                  </div>
                  <div className="rounded-lg bg-white p-6 min-h-40 h-full border border-primary">
                    <div className="flex items-center gap-4 mb-4">
                      <Phone className="h-6 w-auto text-primary" />
                      <p className="text-sm font-medium text-gray-500">
                        Telefono
                      </p>
                    </div>
                    <a href="#" className="text-lg hover:underline">
                      +39 ### ### ####
                    </a>
                  </div>
                  <div className="rounded-lg bg-white p-6 min-h-40 h-full border border-primary">
                    <div className="flex items-center gap-4 mb-4">
                      <MapPin className="h-6 w-auto text-primary" />
                      <p className="text-sm font-medium text-gray-500">
                        Indirizzo
                      </p>
                    </div>
                    <p className="text-lg hover:underline">
                      <span className="block">Via ###</span>
                      <span className="block">Bologna</span>
                    </p>
                  </div>
                  <div className="rounded-lg bg-white p-6 min-h-40 h-full border border-primary">
                    <div className="flex items-center gap-4 mb-4">
                      <CalendarClock className="h-6 w-auto text-primary" />
                      <p className="text-sm font-medium text-gray-500">
                        Orari di Apertura
                      </p>
                    </div>
                    <p className="text-lg">####</p>
                  </div>
                </div>
              </div>
              <div className="flex max-w-screen-md flex-col gap-6 bg-gray-100 p-8 rounded-lg">
                <Contactform />
              </div>
            </div>
          </div>
          {/* <div className="container mx-auto mt-20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3133.3601901501715!2d11.33678047671993!3d46.48721167110912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47829c2d27269115%3A0x6aaecc6c996b3c30!2sG.%20Galilei-Stra%C3%9Fe%2C%204%2C%2021008%20Bozen%2C%20Autonome%20Provinz%20Bozen%20-%20S%C3%BCdtirol!5e1!3m2!1sde!2sit!4v1745488366183!5m2!1sde!2sit"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full rounded-lg"
            ></iframe>
          </div> */}
        </section>
      </div>
    </div>
  );
}
