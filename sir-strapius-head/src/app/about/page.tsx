import { aboutApi } from "@/api/about";
import { Header } from "@/components/_common/Header";
import { MarkdownRenderer } from "@/components/_common/MarkoutReader";

export default async function AboutPage() {
  const { data: about } = await aboutApi.content({});

  return (
    <article>
      <Header pathname="/about" />
      <div className="animate-reveal container mx-auto px-4 py-8">
        {about?.title && (
          <h1 className="mb-4 text-3xl font-bold">{about.title}</h1>
        )}
        {about?.blocks?.map((block) => {
          if (block.__component !== "shared.rich-text") return null;
          if (!block.body) return null;
          return <MarkdownRenderer key={block.id} markdown={block.body} />;
        })}
      </div>
    </article>
  );
}
