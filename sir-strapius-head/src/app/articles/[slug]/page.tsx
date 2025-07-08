import "dayjs/locale/ko";

import dayjs from "dayjs";

import { articleApi } from "@/api/articles";
import { ArticleBreadcrumb } from "@/components/_common/ArticleBreadcrumb";
import { Header } from "@/components/_common/Header";
import { MarkdownRenderer } from "@/components/_common/MarkoutReader";

// Set Korean as default locale
dayjs.locale("ko");

export async function generateStaticParams() {
  const { data: articles } = await articleApi.all({});

  if (!articles) {
    return [];
  }

  return articles
    .filter((article) => article.slug)
    .map((article) => ({ slug: article.slug! }));
}

export default async function ArticlePage({
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
      <div className="animate-reveal container mx-auto px-4 py-12 sm:py-24">
        <ArticleBreadcrumb
          categoryName={
            (article?.category as { name?: string; slug?: string })?.name
          }
          categorySlug={
            (article?.category as { name?: string; slug?: string })?.slug
          }
          articleName={article?.title}
        />
        <div className="mb-8">
          <h1 className="mb-6 text-3xl font-bold">{article?.title}</h1>
          {article?.createdAt && (
            <div className="mb-8 text-right text-sm text-gray-500">
              {dayjs(article.createdAt).format("YYYY년 M월 D일")}
            </div>
          )}
        </div>
        <div className="mt-8">
          {article?.blocks?.map((block) => {
            if (block.__component !== "shared.rich-text") return null;
            if (!block.body) return null;
            return <MarkdownRenderer key={block.id} markdown={block.body} />;
          })}
        </div>
      </div>
    </article>
  );
}
