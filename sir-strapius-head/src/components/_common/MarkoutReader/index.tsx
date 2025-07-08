// app/components/MarkdownRenderer.tsx (Server Component)
import rehypeExternalLinks from "rehype-external-links";
import rehypeStringify from "rehype-stringify";
import { remark } from "remark";
import remarkRehype from "remark-rehype";

type MarkdownRendererProps = {
  markdown: string;
};

export async function MarkdownRenderer({ markdown }: MarkdownRendererProps) {
  const processed = await remark()
    .use(remarkRehype)
    .use(rehypeExternalLinks, {
      target: "_blank",
      rel: ["noopener", "noreferrer"],
    })
    .use(rehypeStringify)
    .process(markdown);
  const contentHtml = processed.toString();

  return (
    <div
      className="markdown"
      dangerouslySetInnerHTML={{ __html: contentHtml }}
    />
  );
}
