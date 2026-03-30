import {
  Users,
  Clock,
  Handshake,
  ScanSearch,
  BrainCog,
  PersonStanding,
  Shuffle,
  MessageCircle,
} from "lucide-react";

const skills = [
  { label: "Leadership", icon: Users },
  { label: "Time Management", icon: Clock },
  { label: "Relationship Building", icon: Handshake },
  { label: "Detail Oriented", icon: ScanSearch },
  { label: "Problem Solving", icon: BrainCog },
  { label: "Teamwork", icon: PersonStanding },
  { label: "Adaptability", icon: Shuffle },
  { label: "Interpersonal Communication", icon: MessageCircle },
];

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">Sebastian Aedo</h1>
        <p className="text-muted-foreground max-w-2xl">
          Current IT Web and Software Developer student at Milwaukee Area
          Technical College.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Skills</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="group flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/40"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-muted">
                <Icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
              </div>
              <span className="text-sm font-medium leading-snug">{label}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
