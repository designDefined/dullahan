import { categoryApi } from "@/api/categories";
import { CategorySummaryCard } from "@/components/_common/CategorySummaryCard";
import { Header } from "@/components/_common/Header";

export default async function CategoriesPage() {
  const { data: categories } = await categoryApi.all({});

  return (
    <div>
      <Header pathname="/categories" />
      <div className="animate-reveal container mx-auto px-4 py-8">
        <h1 className="mb-8 text-3xl font-bold">All Categories</h1>
        <div className="flex flex-wrap gap-4">
          {categories?.map((category, i) => (
            <CategorySummaryCard
              key={i}
              name={category.name}
              description={category.description}
              slug={category.slug}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
