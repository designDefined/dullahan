import Link from "next/link";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/_ui/card";

type CategorySummaryCardProps = {
  name?: string;
  description?: string;
  slug?: string;
};

export function CategorySummaryCard({
  name,
  description,
  slug,
}: CategorySummaryCardProps) {
  return (
    <Link href={`/categories/${slug}`}>
      <Card className="group h-32 w-48 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:opacity-90 hover:shadow-lg hover:shadow-gray-200/50">
        <CardHeader className="flex h-full flex-col justify-center p-4">
          {name && (
            <CardTitle className="text-center text-lg text-gray-700 transition-opacity duration-300 group-hover:opacity-80">
              {name}
            </CardTitle>
          )}
          {description && (
            <CardDescription className="line-clamp-2 text-center text-sm text-gray-500 transition-opacity duration-300 group-hover:opacity-70">
              {description}
            </CardDescription>
          )}
        </CardHeader>
      </Card>
    </Link>
  );
}
