import "dayjs/locale/ko";

import dayjs from "dayjs";
import Link from "next/link";

// Set Korean as default locale
dayjs.locale("ko");

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
  createdAt?: string;
};

export function ArticleSummaryCard({
  title,
  description,
  slug,
  createdAt,
}: ArticleSummaryCardProps) {
  return (
    <Link href={`/articles/${slug}`}>
      <Card className="group transition-all duration-300 ease-in-out hover:-translate-y-1 hover:opacity-90 hover:shadow-lg hover:shadow-gray-200/50">
        <CardHeader className="flex flex-col">
          <div className="flex-1">
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
          </div>
          {createdAt && (
            <div className="mt-4 text-sm text-gray-400">
              {dayjs(createdAt).format("YYYY년 M월 D일")}
            </div>
          )}
        </CardHeader>
      </Card>
    </Link>
  );
}
