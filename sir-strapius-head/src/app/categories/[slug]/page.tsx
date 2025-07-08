import { categoryApi } from "@/api/categories";
import { ArticleSummaryCard } from "@/components/_common/ArticleSummaryCard";
import { Header } from "@/components/_common/Header";

export async function generateStaticParams() {
  const { data: categories } = await categoryApi.all({});

  if (!categories) {
    return [];
  }

  return categories
    .filter((category) => category.slug)
    .map((category) => ({ slug: category.slug! }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const categorySummary = await categoryApi.bySlug(slug, {});
  const { data: category } = await categoryApi.byId({
    path: { documentId: categorySummary?.documentId ?? "" },
  });

  return (
    <article>
      <Header pathname="/categories" />
      <div className="animate-reveal container mx-auto px-4 py-12 sm:py-24">
        <div className="mb-8">
          <h1 className="mb-6 text-3xl font-extralight">
            <span className="font-extrabold">{category?.name}</span> 카테고리의
            글 {category?.articles?.length || 0}개
          </h1>
          <p className="text-gray-600">{category?.description}</p>
        </div>
        <div className="mt-8">
          <div className="grid gap-6">
            {category?.articles?.map((article, i) => (
              <ArticleSummaryCard
                key={i}
                title={article.title}
                description={article.description}
                slug={article.slug}
                createdAt={article.createdAt}
              />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
