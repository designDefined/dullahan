import { articleApi } from "@/api/articles";
import { Header } from "@/components/_common/Header";
import { MarkdownRenderer } from "@/components/_common/MarkoutReader";

export async function generateStaticParams() {
  const { data: articles } = await articleApi.all({});

  if (!articles) {
    return [];
  }

  return articles
    .filter((article) => article.slug)
    .map((article) => ({ slug: article.slug! }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const articleSummary = await articleApi.bySlug(slug, {});
  const { data: article } = await articleApi.byId({
    path: { documentId: articleSummary?.documentId ?? "" },
  });

  return (
    <article>
      <Header pathname="/articles" />
      <div className="animate-reveal container mx-auto px-4 py-8">
        <h1 className="mb-4 text-3xl font-bold">{article?.title}</h1>
        {article?.blocks?.map((block) => {
          if (block.__component !== "shared.rich-text") return null;
          if (!block.body) return null;
          return <MarkdownRenderer key={block.id} markdown={block.body} />;
        })}
      </div>
    </article>
  );
}
