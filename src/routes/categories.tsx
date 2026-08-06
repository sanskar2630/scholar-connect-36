import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CategoryGrid } from "@/components/CategoryGrid";

export const Route = createFileRoute("/categories")({
  head: () => ({
    meta: [
      { title: "Job Categories for Students — ScholarHire" },
      {
        name: "description",
        content:
          "Explore student job categories: IT, teaching and faculty, research, marketing, finance, design, healthcare and government exam coaching.",
      },
      { property: "og:title", content: "Job Categories for Students — ScholarHire" },
      {
        property: "og:description",
        content: "Explore fresher job categories from IT and teaching to research and healthcare.",
      },
    ],
  }),
  component: CategoriesPage,
});

function CategoriesPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 py-10 md:py-12">
        <h1 className="text-3xl font-bold sm:text-4xl">Job categories</h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Pick the field that matches your degree. Each category collects vacancies that accept
          students, freshers and unemployed graduates.
        </p>
        <div className="mt-10">
          <CategoryGrid />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
