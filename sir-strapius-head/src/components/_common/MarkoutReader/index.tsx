// app/components/MarkdownRenderer.tsx (Server Component)
import { remark } from "remark";
import html from "remark-html";

type MarkdownRendererProps = {
  markdown: string;
};

export async function MarkdownRenderer({ markdown }: MarkdownRendererProps) {
  const processed = await remark().use(html).process(markdown);
  const contentHtml = processed.toString();

  return (
    <div className="prose" dangerouslySetInnerHTML={{ __html: contentHtml }} />
  );
}
