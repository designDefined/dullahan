import { articleApi } from "@/api/articles";
import { Header } from "@/components/_common/Header";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await articleApi.bySlug(slug, {});

  return (
    <div>
      <Header pathname="/articles" />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">{article?.title}</h1>
        <p className="text-muted-foreground">{article?.description}</p>
      </div>
    </div>
  );
}
