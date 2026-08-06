import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { JobCard } from "@/components/JobCard";
import { Input } from "@/components/ui/input";
import { categories, jobs } from "@/data/jobs";

type JobSearch = { category?: string | undefined };

export const Route = createFileRoute("/jobs/")({
  validateSearch: (search: Record<string, unknown>): JobSearch => ({
    category: typeof search["category"] === "string" ? search["category"] : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Find Jobs by Category — ScholarHire" },
      {
        name: "description",
        content:
          "Search fresher and student-friendly job vacancies by category, location and qualification on ScholarHire.",
      },
      { property: "og:title", content: "Find Jobs by Category — ScholarHire" },
      {
        property: "og:description",
        content: "Search fresher-friendly vacancies by category, location and qualification.",
      },
    ],
  }),
  component: JobsPage,
});

function JobsPage() {
  const { category } = Route.useSearch();
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return jobs.filter((j) => {
      const matchCategory = !category || j.category === category;
      const matchQuery =
        !q ||
        j.title.toLowerCase().includes(q) ||
        j.company.toLowerCase().includes(q) ||
        j.location.toLowerCase().includes(q) ||
        j.skills.some((s) => s.toLowerCase().includes(q));
      return matchCategory && matchQuery;
    });
  }, [category, query]);

  const activeName = categories.find((c) => c.slug === category)?.name;

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 py-10 md:py-12">
        <h1 className="text-3xl font-bold sm:text-4xl">
          {activeName ? `${activeName} jobs` : "All job vacancies"}
        </h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Every opening below is open to students, freshers and unemployed graduates. Applying is
          always free.
        </p>

        <div className="relative mt-8 w-full max-w-md">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search role, company, city or skill"
            className="pl-9"
            aria-label="Search jobs"
          />
        </div>

        <div className="-mx-4 mt-6 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
          <Link
            to="/jobs"
            search={{}}
            className={`shrink-0 rounded-full border px-3 py-1.5 text-sm transition-colors ${
              !category
                ? "border-transparent bg-primary text-primary-foreground"
                : "border-border text-muted-foreground hover:bg-secondary"
            }`}
          >
            All
          </Link>
          {categories.map((c) => (
            <Link
              key={c.slug}
              to="/jobs"
              search={{ category: c.slug }}
              className={`shrink-0 rounded-full border px-3 py-1.5 text-sm transition-colors ${
                category === c.slug
                  ? "border-transparent bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:bg-secondary"
              }`}
            >
              {c.name}
            </Link>
          ))}
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          Showing {results.length} {results.length === 1 ? "vacancy" : "vacancies"}
        </p>

        {results.length ? (
          <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <div className="mt-6 rounded-xl border border-dashed border-border p-6 text-center sm:p-10">
            <p className="font-medium">No vacancies match this search yet.</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Try another category or clear the search box.
            </p>
          </div>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
