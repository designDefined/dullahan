import Image from "next/image";

import { articleApi } from "@/api/articles";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const { data: articles } = await articleApi.all({});

  if (articles) {
    const articleData = await Promise.all(
      articles
        .map((article) => article.documentId)
        .filter((id) => !!id)
        .map((id) => articleApi.byId({ path: { documentId: id! } })),
    );
    console.log(articleData);
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Button>Click me</Button>
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
    </div>
  );
}
