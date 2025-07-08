import { articleApi } from "@/api/articles";

import { ArticleSummaryCard } from "../../_common/ArticleSummaryCard";

export async function Recent() {
  const { data: articles } = await articleApi.all({});

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">새로 적었습니다</h2>
      {articles?.map(({ title, description, slug, createdAt }, i) => (
        <ArticleSummaryCard
          key={i}
          title={title}
          description={description}
          slug={slug}
          createdAt={createdAt}
        />
      ))}
    </div>
  );
}
