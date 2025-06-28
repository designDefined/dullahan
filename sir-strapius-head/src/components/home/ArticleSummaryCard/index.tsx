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
      <Card className="">
        <CardHeader>
          {title && <CardTitle>{title}</CardTitle>}
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      </Card>
    </Link>
  );
}
