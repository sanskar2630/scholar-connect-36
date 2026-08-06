import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, IndianRupee, MapPin, GraduationCap, Briefcase, Clock } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { categories, jobs } from "@/data/jobs";

export const Route = createFileRoute("/jobs/$jobId")({
  loader: ({ params }) => {
    const job = jobs.find((j) => j.id === params.jobId);
    if (!job) throw notFound();
    return { job };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Vacancy unavailable — ScholarHire" }, { name: "robots", content: "noindex" }],
      };
    }
    const { job } = loaderData;
    const title = `${job.title} at ${job.company} — ScholarHire`;
    const description = `${job.type} role in ${job.location}. ${job.qualification}. Apply free on ScholarHire.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: JobDetail,
});

function JobDetail() {
  const { job } = Route.useLoaderData();
  const category = categories.find((c) => c.slug === job.category);
  const related = jobs.filter((j) => j.category === job.category && j.id !== job.id).slice(0, 3);

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-12">
        <Link
          to="/jobs"
          search={{}}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-4" /> Back to all vacancies
        </Link>

        <div className="mt-6 rounded-2xl border border-border bg-card p-6 md:p-8">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h1 className="text-3xl font-bold md:text-4xl">{job.title}</h1>
              <p className="mt-2 text-muted-foreground">{job.company}</p>
            </div>
            <Badge variant="secondary">{job.type}</Badge>
          </div>

          <dl className="mt-6 grid gap-4 sm:grid-cols-2">
            <Detail icon={<MapPin className="size-4" />} label="Location" value={job.location} />
            <Detail
              icon={<IndianRupee className="size-4" />}
              label="Pay"
              value={job.stipend}
            />
            <Detail
              icon={<GraduationCap className="size-4" />}
              label="Eligibility"
              value={job.qualification}
            />
            <Detail
              icon={<Briefcase className="size-4" />}
              label="Category"
              value={category?.name ?? "General"}
            />
          </dl>

          <h2 className="mt-8 text-xl font-semibold">About this role</h2>
          <p className="mt-2 text-foreground/80">{job.description}</p>

          <h2 className="mt-6 text-xl font-semibold">Skills we look for</h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {job.skills.map((s: string) => (
              <span
                key={s}
                className="rounded-full border border-border px-3 py-1 text-sm text-muted-foreground"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-border pt-6">
            <Button size="lg" asChild>
              <a href={`mailto:hello@scholarhire.example?subject=Application: ${job.title}`}>
                Apply for free
              </a>
            </Button>
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Clock className="size-4" /> Posted {job.posted}
            </span>
          </div>
        </div>

        {related.length ? (
          <section className="mt-12">
            <h2 className="text-2xl font-bold">Similar vacancies</h2>
            <ul className="mt-4 divide-y divide-border rounded-xl border border-border bg-card">
              {related.map((r) => (
                <li key={r.id}>
                  <Link
                    to="/jobs/$jobId"
                    params={{ jobId: r.id }}
                    className="flex flex-wrap items-center justify-between gap-2 p-4 hover:bg-secondary/60"
                  >
                    <span className="font-medium">{r.title}</span>
                    <span className="text-sm text-muted-foreground">
                      {r.company} · {r.location}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </main>
      <SiteFooter />
    </div>
  );
}

function Detail({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-lg border border-border p-4">
      <dt className="flex items-center gap-2 text-xs uppercase tracking-wide text-muted-foreground">
        {icon} {label}
      </dt>
      <dd className="mt-1 font-medium">{value}</dd>
    </div>
  );
}
