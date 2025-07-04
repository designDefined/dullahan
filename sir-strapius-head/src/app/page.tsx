import { Header } from "@/components/_common/Header";
import { Separator } from "@/components/_ui/separator";
import { Greeting } from "@/components/home/Greeting";
import { Recent } from "@/components/home/Recent";

export default async function Home() {
  return (
    <article>
      <Header />
      <main className="animate-reveal container mx-auto flex flex-col gap-16 px-4 py-8">
        <Greeting />
        <Separator />
        <Recent />
      </main>
    </article>
  );
}
