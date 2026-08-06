import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories } from "@/data/jobs";

export const Route = createFileRoute("/post-job")({
  head: () => ({
    meta: [
      { title: "Post a Vacancy for Students — ScholarHire" },
      {
        name: "description",
        content:
          "Companies can post fresher and student vacancies on ScholarHire and reach graduates by category, qualification and location.",
      },
      { property: "og:title", content: "Post a Vacancy for Students — ScholarHire" },
      {
        property: "og:description",
        content: "Reach unemployed graduates and students by category, qualification and location.",
      },
    ],
  }),
  component: PostJobPage,
});

function PostJobPage() {
  const [category, setCategory] = useState("");

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-10 md:py-12">
        <h1 className="text-3xl font-bold sm:text-4xl">Post a vacancy</h1>
        <p className="mt-2 text-muted-foreground">
          Tell us what you need and we&apos;ll list it under the right category for students and
          scholars to find.
        </p>

        <form
          className="mt-8 space-y-5 rounded-2xl border border-border bg-card p-5 sm:p-6 md:mt-10 md:p-8"
          onSubmit={(e) => {
            e.preventDefault();
            toast.success("Vacancy submitted", {
              description: "Our team will review and publish it within 24 hours.",
            });
            (e.target as HTMLFormElement).reset();
            setCategory("");
          }}
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field id="company" label="Company name" placeholder="Northwind Labs" />
            <Field id="email" label="Contact email" type="email" placeholder="hr@company.com" />
          </div>

          <Field id="title" label="Job title" placeholder="Junior Frontend Developer" />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select value={category} onValueChange={setCategory} required>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((c) => (
                    <SelectItem key={c.slug} value={c.slug}>
                      {c.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Field id="location" label="Location / work mode" placeholder="Pune · Hybrid" />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field id="pay" label="Salary or stipend" placeholder="₹4.5 – 6 LPA" />
            <Field
              id="qualification"
              label="Minimum qualification"
              placeholder="B.Tech / BCA — freshers welcome"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Role description</Label>
            <Textarea
              id="description"
              required
              rows={5}
              placeholder="What the student will do, training offered, working hours..."
            />
          </div>

          <Button type="submit" size="lg" className="w-full sm:w-auto">
            Submit vacancy
          </Button>
          <p className="text-xs text-muted-foreground">
            Listings are reviewed manually. We reject any posting that asks students for payment.
          </p>
        </form>
      </main>
      <SiteFooter />
    </div>
  );
}

function Field({
  id,
  label,
  placeholder,
  type = "text",
}: {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} name={id} type={type} placeholder={placeholder} required />
    </div>
  );
}
