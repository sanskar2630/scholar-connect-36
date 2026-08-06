import { Link } from "@tanstack/react-router";
import { GraduationCap } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <GraduationCap className="size-4" />
            </span>
            <span className="font-display font-bold">ScholarHire</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            A free job platform built for unemployed students, graduates and scholars.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold">For students</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/jobs" className="hover:text-foreground">
                Browse jobs
              </Link>
            </li>
            <li>
              <Link to="/categories" className="hover:text-foreground">
                Job categories
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold">For companies</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/post-job" className="hover:text-foreground">
                Post a vacancy
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-foreground">
                Why hire freshers
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Contact</h3>
          <p className="mt-3 text-sm text-muted-foreground">hello@scholarhire.example</p>
          <p className="text-sm text-muted-foreground">Mon–Sat, 10:00–18:00 IST</p>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} ScholarHire. Built for scholars looking for their first break.
      </div>
    </footer>
  );
}
