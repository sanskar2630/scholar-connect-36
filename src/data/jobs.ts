export type Category = {
  slug: string;
  name: string;
  blurb: string;
  icon: string;
};

export const categories: Category[] = [
  { slug: "it-software", name: "IT & Software", blurb: "Developers, QA, support", icon: "Code2" },
  { slug: "teaching", name: "Teaching & Faculty", blurb: "Lecturers, tutors, TAs", icon: "GraduationCap" },
  { slug: "research", name: "Research & Labs", blurb: "Assistants, fellowships", icon: "FlaskConical" },
  { slug: "marketing", name: "Marketing & Sales", blurb: "Digital, field, content", icon: "Megaphone" },
  { slug: "finance", name: "Finance & Accounts", blurb: "Analysts, audit, tax", icon: "Landmark" },
  { slug: "design", name: "Design & Media", blurb: "UI/UX, graphics, video", icon: "PenTool" },
  { slug: "healthcare", name: "Healthcare", blurb: "Nursing, pharma, lab", icon: "HeartPulse" },
  { slug: "government", name: "Government Exams", blurb: "SSC, banking, railways", icon: "Building2" },
];

export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  type: "Full-time" | "Internship" | "Part-time" | "Contract";
  stipend: string;
  category: string;
  qualification: string;
  posted: string;
  skills: string[];
  description: string;
};

export const jobs: Job[] = [
  {
    id: "junior-frontend-developer",
    title: "Junior Frontend Developer",
    company: "Northwind Labs",
    location: "Bengaluru · Hybrid",
    type: "Full-time",
    stipend: "₹4.5 – 6 LPA",
    category: "it-software",
    qualification: "B.Tech / BCA / MCA — fresher friendly",
    posted: "2 days ago",
    skills: ["React", "TypeScript", "CSS"],
    description:
      "Build and ship user interfaces alongside a senior mentor. No prior industry experience required — we train on the job for the first three months.",
  },
  {
    id: "assistant-professor-physics",
    title: "Assistant Professor — Physics",
    company: "Sardar Institute of Science",
    location: "Pune · On-site",
    type: "Full-time",
    stipend: "₹5.4 – 7.2 LPA",
    category: "teaching",
    qualification: "M.Sc. Physics with NET/SET preferred",
    posted: "4 days ago",
    skills: ["Lecturing", "Curriculum", "Mentoring"],
    description:
      "Teach undergraduate physics, guide lab sessions and support scholars preparing for competitive examinations.",
  },
  {
    id: "research-assistant-climate",
    title: "Research Assistant — Climate Data",
    company: "Indus Policy Centre",
    location: "New Delhi · On-site",
    type: "Contract",
    stipend: "₹32,000 / month",
    category: "research",
    qualification: "M.A. / M.Sc. in Economics, Geography or Environmental Science",
    posted: "1 day ago",
    skills: ["Python", "Statistics", "Report writing"],
    description:
      "Support a two-year study on regional climate adaptation. Ideal for scholars planning a PhD — co-authorship offered.",
  },
  {
    id: "digital-marketing-intern",
    title: "Digital Marketing Intern",
    company: "Bloomrise Media",
    location: "Remote",
    type: "Internship",
    stipend: "₹15,000 / month",
    category: "marketing",
    qualification: "Any graduate or final-year student",
    posted: "Today",
    skills: ["SEO", "Copywriting", "Analytics"],
    description:
      "Run campaigns for early-stage brands. Six-month internship with a pre-placement offer for top performers.",
  },
  {
    id: "accounts-executive",
    title: "Accounts Executive",
    company: "Vermilion Advisory",
    location: "Ahmedabad · On-site",
    type: "Full-time",
    stipend: "₹3.6 – 4.8 LPA",
    category: "finance",
    qualification: "B.Com / M.Com, CA Inter welcome",
    posted: "5 days ago",
    skills: ["Tally", "GST", "Excel"],
    description:
      "Handle books, GST filings and client reconciliations for a growing advisory practice.",
  },
  {
    id: "ui-ux-designer-trainee",
    title: "UI/UX Designer (Trainee)",
    company: "Halcyon Studio",
    location: "Remote",
    type: "Part-time",
    stipend: "₹20,000 / month",
    category: "design",
    qualification: "Portfolio matters more than degree",
    posted: "3 days ago",
    skills: ["Figma", "Wireframing", "Prototyping"],
    description:
      "Work 20 hours a week on real product screens with weekly critique from a design lead.",
  },
  {
    id: "lab-technician",
    title: "Lab Technician — Pathology",
    company: "Meridian Diagnostics",
    location: "Lucknow · On-site",
    type: "Full-time",
    stipend: "₹2.8 – 3.6 LPA",
    category: "healthcare",
    qualification: "DMLT / B.Sc. MLT",
    posted: "6 days ago",
    skills: ["Sample handling", "Microscopy", "Reporting"],
    description:
      "Process diagnostic samples and maintain lab records in a NABL-accredited facility.",
  },
  {
    id: "junior-data-analyst",
    title: "Junior Data Analyst",
    company: "Kestrel Analytics",
    location: "Hyderabad · Hybrid",
    type: "Full-time",
    stipend: "₹5 – 6.5 LPA",
    category: "it-software",
    qualification: "Any graduate with SQL knowledge",
    posted: "1 week ago",
    skills: ["SQL", "Power BI", "Excel"],
    description:
      "Turn raw operational data into dashboards that leadership actually reads. Structured 8-week onboarding.",
  },
  {
    id: "ssc-coaching-faculty",
    title: "Quantitative Aptitude Faculty",
    company: "Pathfinder Academy",
    location: "Patna · On-site",
    type: "Part-time",
    stipend: "₹800 / hour",
    category: "government",
    qualification: "Graduate with strong maths background",
    posted: "2 days ago",
    skills: ["Maths", "Teaching", "Test design"],
    description:
      "Teach evening batches of SSC and banking aspirants. Flexible hours suited to scholars preparing themselves.",
  },
  {
    id: "content-writer",
    title: "Academic Content Writer",
    company: "Scriptorium Learning",
    location: "Remote",
    type: "Contract",
    stipend: "₹25,000 / month",
    category: "teaching",
    qualification: "Post-graduate in any discipline",
    posted: "3 days ago",
    skills: ["Writing", "Research", "Editing"],
    description:
      "Write study notes and question banks for university-level courses. Paid per module, work on your own schedule.",
  },
];
