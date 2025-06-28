import { articleApi } from "@/api/articles";
import { Header } from "@/components/_common/Header";
import { ArticleSummaryCard } from "@/components/home/ArticleSummaryCard";

export default async function Home() {
  const { data: articles } = await articleApi.all({});

  return (
    <div>
      <Header />
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
