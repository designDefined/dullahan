import { articleApi } from "@/api/articles";
import { Header } from "@/components/_common/Header";
import { ArticleSummaryCard } from "@/components/home/ArticleSummaryCard";

export default async function ArticlesPage() {
  const { data: articles } = await articleApi.all({});

  return (
    <div>
      <Header pathname="/articles" />
      <div className="container mx-auto px-4 py-8 animate-reveal">
        <h1 className="text-3xl font-bold mb-8">All Articles</h1>
        <div className="grid gap-6">
          {articles?.map(({ title, description, slug }, i) => (
            <ArticleSummaryCard
              key={i}
              title={title}
              description={description}
              slug={slug}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
