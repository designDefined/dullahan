import { articleApi } from "@/api/articles";

import { ArticleSummaryCard } from "../ArticleSummaryCard";

export async function Recent() {
  const { data: articles } = await articleApi.all({});

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">새로 적은</h2>
      {articles?.map(({ title, description, slug }, i) => (
        <ArticleSummaryCard
          key={i}
          title={title}
          description={description}
          slug={slug}
        />
      ))}
    </div>
  );
}
