import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/_ui/breadcrumb";

type ArticleBreadcrumbProps = {
  categoryName?: string;
  categorySlug?: string;
  articleName?: string;
};

export function ArticleBreadcrumb({
  categoryName,
  categorySlug,
  articleName,
}: ArticleBreadcrumbProps) {
  return (
    <Breadcrumb className="mb-6">
      <BreadcrumbList>
        {categoryName && categorySlug && (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  href={`/categories/${categorySlug}`}
                  className="text-gray-600 hover:text-gray-900"
                >
                  {categoryName}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        )}
        <BreadcrumbItem>
          <span className="font-medium text-gray-900">{articleName}</span>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
