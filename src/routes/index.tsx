import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Search, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { JobCard } from "@/components/JobCard";
import { CategoryGrid } from "@/components/CategoryGrid";
import { jobs } from "@/data/jobs";
import heroImage from "@/assets/hero-students.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ScholarHire — Jobs for Unemployed Students & Scholars" },
      {
        name: "description",
        content:
          "Free job portal for unemployed students, graduates and scholars. Browse vacancies by category and apply to companies hiring freshers.",
      },
      { property: "og:title", content: "ScholarHire — Jobs for Unemployed Students & Scholars" },
      {
        property: "og:description",
        content:
          "Browse fresher-friendly vacancies by category — IT, teaching, research, finance, design and more.",
      },
    ],
  }),
  component: Index,
});

const stats = [
  { value: "1,240+", label: "Active vacancies" },
  { value: "8", label: "Job categories" },
  { value: "310", label: "Hiring companies" },
  { value: "₹0", label: "Cost for students" },
];

function Index() {
  const featured = jobs.slice(0, 6);

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        <section className="surface-panel">
          <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 sm:gap-10 sm:py-16 md:grid-cols-2 md:py-24">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 px-3 py-1 text-xs font-medium text-accent">
                <Sparkles className="size-3.5" /> Built for scholars, not recruiters
              </span>
              <h1 className="mt-5 text-3xl font-bold leading-[1.1] sm:text-4xl md:text-6xl">
                Your degree is done. Now find the job that fits it.
              </h1>
              <p className="mt-5 max-w-xl text-base opacity-85 md:text-lg">
                ScholarHire connects unemployed students and graduates with companies posting
                fresher-friendly vacancies — sorted by category, qualification and location.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
                  <Link to="/jobs">
                    <Search className="size-4" /> Find jobs by category
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full border-accent/50 bg-transparent text-accent hover:bg-accent hover:text-accent-foreground sm:w-auto"
                >
                  <Link to="/post-job">
                    <Building2 className="size-4" /> Post a vacancy
                  </Link>
                </Button>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-accent/20">
              <img
                src={heroImage}
                alt="Students and recent graduates working on laptops in a shared study space"
                width={1600}
                height={1104}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="border-t border-accent/15">
            <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-5 px-4 py-8 sm:gap-6 md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="text-xl font-bold sm:text-2xl md:text-3xl">{s.value}</dt>
                  <dd className="mt-1 text-sm opacity-75">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">Browse by category</h2>
              <p className="mt-2 text-muted-foreground">
                Pick the field you studied for — every listing states the qualification required.
              </p>
            </div>
            <Button asChild variant="ghost">
              <Link to="/categories">
                All categories <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-8">
            <CategoryGrid />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-12 md:pb-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">Latest vacancies</h2>
              <p className="mt-2 text-muted-foreground">
                Openings posted by companies actively hiring freshers this month.
              </p>
            </div>
            <Button asChild variant="ghost">
              <Link to="/jobs">
                See all jobs <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-4">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 md:p-12">
            <h2 className="text-2xl font-bold sm:text-3xl">How it works</h2>
            <div className="mt-8 grid gap-8 md:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "Choose your category",
                  body: "Filter openings by the field you studied — teaching, research, IT, finance and more.",
                },
                {
                  step: "02",
                  title: "Check the eligibility",
                  body: "Every vacancy lists the qualification, pay and work mode up front. No guesswork.",
                },
                {
                  step: "03",
                  title: "Apply directly",
                  body: "Send your application to the company. No agency fees, no middlemen, no charges.",
                },
              ].map((s) => (
                <div key={s.step}>
                  <span className="font-display text-sm font-bold text-accent">{s.step}</span>
                  <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
              <ShieldCheck className="size-4 text-accent" /> Students never pay to apply on
              ScholarHire.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
