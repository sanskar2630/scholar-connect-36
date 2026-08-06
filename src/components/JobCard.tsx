import { Link } from "@tanstack/react-router";
import { Briefcase, IndianRupee, MapPin, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { categories, type Job } from "@/data/jobs";

export function JobCard({ job }: { job: Job }) {
  const category = categories.find((c) => c.slug === job.category);

  return (
    <article className="card-elevated hover:card-elevated-hover flex h-full flex-col rounded-xl border border-border bg-card p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold leading-snug">{job.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{job.company}</p>
        </div>
        <Badge variant="secondary" className="shrink-0">
          {job.type}
        </Badge>
      </div>

      <dl className="mt-4 space-y-2 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <MapPin className="size-4 shrink-0" aria-hidden="true" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <IndianRupee className="size-4 shrink-0" aria-hidden="true" />
          <span>{job.stipend}</span>
        </div>
        <div className="flex items-center gap-2">
          <GraduationCap className="size-4 shrink-0" aria-hidden="true" />
          <span>{job.qualification}</span>
        </div>
        {category ? (
          <div className="flex items-center gap-2">
            <Briefcase className="size-4 shrink-0" aria-hidden="true" />
            <span>{category.name}</span>
          </div>
        ) : null}
      </dl>

      <p className="mt-4 text-sm text-foreground/80">{job.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {job.skills.map((s) => (
          <span
            key={s}
            className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
        <span className="text-xs text-muted-foreground">Posted {job.posted}</span>
        <Button asChild size="sm" variant="secondary">
          <Link to="/jobs/$jobId" params={{ jobId: job.id }}>
            View details
          </Link>
        </Button>
      </div>
    </article>
  );
}
