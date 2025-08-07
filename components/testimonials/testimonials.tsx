import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="bg-primary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2 divide-x divide-white">
          <div className="flex flex-col lg:pr-8 xl:pr-20 py-24 sm:py-32">
            <Quote className="text-white h-12 w-auto mr-auto" />
            <figure className="mt-10 flex flex-auto flex-col justify-between">
              <blockquote className="text-2xl font-light text-white">
                <p>
                  “Amet amet eget scelerisque tellus sit neque faucibus non
                  eleifend. Integer eu praesent at a. Ornare arcu gravida
                  natoque erat et cursus tortor consequat at. Vulputate gravida
                  sociis enim nullam ultricies habitant malesuada lorem ac.
                  Tincidunt urna dui pellentesque sagittis.”
                </p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
                <div className="text-base">
                  <div className="font-semibold text-white">Nome Cognome</div>
                  <div className="mt-1 text-gray-400">Ruolo</div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="flex flex-col border-t border-gray-900/10 lg:border-t-0 lg:border-l lg:pl-8 xl:pl-20 py-24 sm:py-32">
            <Quote className="text-white h-12 w-auto mr-auto" />
            <figure className="mt-10 flex flex-auto flex-col justify-between">
              <blockquote className="text-2xl font-light text-white">
                <p>
                  “Amet amet eget scelerisque tellus sit neque faucibus non
                  eleifend. Integer eu praesent at a. Ornare arcu gravida
                  natoque erat et cursus tortor consequat at. Vulputate gravida
                  sociis enim nullam ultricies habitant malesuada lorem ac.
                  Tincidunt urna dui pellentesque sagittis.”
                </p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
                <div className="text-base">
                  <div className="font-semibold text-white">Nome Cognome</div>
                  <div className="mt-1 text-gray-400">Ruolo</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
