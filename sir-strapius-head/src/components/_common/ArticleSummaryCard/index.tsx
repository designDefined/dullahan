import Link from "next/link";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/_ui/card";

type ArticleSummaryCardProps = {
  title?: string;
  description?: string;
  slug?: string;
};

export function ArticleSummaryCard({
  title,
  description,
  slug,
}: ArticleSummaryCardProps) {
  return (
    <Link href={`/articles/${slug}`}>
      <Card className="group transition-all duration-300 ease-in-out hover:-translate-y-1 hover:opacity-90 hover:shadow-lg hover:shadow-gray-200/50">
        <CardHeader>
          {title && (
            <CardTitle className="text-gray-700 transition-opacity duration-300 group-hover:opacity-80">
              {title}
            </CardTitle>
          )}
          {description && (
            <CardDescription className="text-gray-500 transition-opacity duration-300 group-hover:opacity-70">
              {description}
            </CardDescription>
          )}
        </CardHeader>
      </Card>
    </Link>
  );
}
