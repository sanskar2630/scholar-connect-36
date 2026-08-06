import { createFileRoute, Link } from "@tanstack/react-router";
import { HandCoins, ShieldCheck, Users } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ScholarHire — A Free Job Platform for Scholars" },
      {
        name: "description",
        content:
          "ScholarHire exists to help unemployed students and scholars find honest, fresher-friendly work without agency fees or middlemen.",
      },
      { property: "og:title", content: "About ScholarHire — A Free Job Platform for Scholars" },
      {
        property: "og:description",
        content: "Helping unemployed students and scholars find honest work, with no fees.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: HandCoins,
    title: "Always free for students",
    body: "No registration fee, no application fee, no premium tier. Companies fund the platform, never candidates.",
  },
  {
    icon: ShieldCheck,
    title: "Verified vacancies only",
    body: "Every listing is reviewed by hand. Anything that asks a student for money is removed immediately.",
  },
  {
    icon: Users,
    title: "Built around qualifications",
    body: "Listings state the degree, pay and work mode up front so scholars don't waste weeks on roles they can't get.",
  },
];

function AboutPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-10 md:py-12">
        <h1 className="text-3xl font-bold sm:text-4xl">Why ScholarHire exists</h1>
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">
          Millions of students finish their degree and then hit a wall: every opening wants
          experience, every portal wants a subscription, and the listings that do fit are buried.
          ScholarHire is a simple, category-first noticeboard for scholars who are out of college
          and out of work.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:mt-12 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="card-elevated rounded-xl border border-border bg-card p-6">
              <v.icon className="size-6 text-accent" />
              <h2 className="mt-4 text-lg font-semibold">{v.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>

        <section className="surface-panel mt-12 rounded-2xl p-6 sm:p-8 md:mt-14 md:p-12">
          <h2 className="text-xl font-bold sm:text-2xl">For companies</h2>
          <p className="mt-3 max-w-2xl opacity-85">
            Fresh graduates are trainable, motivated and often overlooked. Post your vacancy with a
            clear qualification bar and reach scholars who are actively searching today.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-6 w-full sm:w-auto">
            <Link to="/post-job">Post a vacancy</Link>
          </Button>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
