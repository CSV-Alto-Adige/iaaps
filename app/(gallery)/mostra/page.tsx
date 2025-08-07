import Link from "next/link";
import Mostra from "./mostra";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <main className="relative">
      <Mostra />
      <Button
        asChild
        className="z-[99999] fixed bottom-0 right-20 bg-white text-primary p-6 text-xl rounded-t-xl group hover:text-white"
      >
        <Link
          href="galleria-virtuale"
          className="flex items-center gap-4 text-gray-900 hover:text-primary"
        >
          <div className="bg-primary text-white rounded-full p-2 group-hover:bg-white group-hover:text-primary">
            <ArrowLeft />
          </div>
          Torna alla galleria virtuale
        </Link>
      </Button>
    </main>
  );
}
