import { Link } from "@tanstack/react-router";
import {
  Building2,
  Code2,
  FlaskConical,
  GraduationCap,
  HeartPulse,
  Landmark,
  Megaphone,
  PenTool,
  type LucideIcon,
} from "lucide-react";
import { categories, jobs } from "@/data/jobs";

const icons: Record<string, LucideIcon> = {
  Code2,
  GraduationCap,
  FlaskConical,
  Megaphone,
  Landmark,
  PenTool,
  HeartPulse,
  Building2,
};

export function CategoryGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {categories.map((c) => {
        const Icon = icons[c.icon] ?? Building2;
        const count = jobs.filter((j) => j.category === c.slug).length;
        return (
          <Link
            key={c.slug}
            to="/jobs"
            search={{ category: c.slug }}
            className="card-elevated hover:card-elevated-hover group rounded-xl border border-border bg-card p-5"
          >
            <span className="flex size-10 items-center justify-center rounded-lg bg-secondary text-secondary-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
              <Icon className="size-5" />
            </span>
            <h3 className="mt-4 font-semibold">{c.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{c.blurb}</p>
            <p className="mt-3 text-xs font-medium text-accent">
              {count} open {count === 1 ? "role" : "roles"}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
