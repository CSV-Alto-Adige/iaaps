import { Cloud, ServerCog } from "lucide-react";

const features = [
  {
    name: "Push to deploy.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: Cloud,
  },
  {
    name: "SSL certificates.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: Cloud,
  },
  {
    name: "Database backups.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ServerCog,
  },
];

export default function MissionLeft() {
  return (
    <div className="overflow-hidden bg-white mt-12">
      <div className="mx-auto container px-6 lg:px-8 bg-yellow-50 py-24 sm:py-32">
        <div className="mx-auto flex justify-center gap-x-36">
          <div className="flex items-start lg:order-first">
            <img
              alt="Product screenshot"
              src="/images/hero.png"
              className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 w-[30rem] h-[20rem] object-cover"
            />
          </div>
          <div className="lg:pt-4 lg:pl-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-primary">
                Deploy faster
              </h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                A better workflow
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none"></dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
