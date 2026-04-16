import { capstoneProjects } from "@/data/curriculum";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideCheckCircle2, LucideRocket, LucideUsers } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Capstone Projects</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Apply your knowledge to build a significant distributed system in teams of 2-3.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {capstoneProjects.map((project, index) => (
          <Card key={index} className="overflow-hidden border-border/60 transition-all hover:shadow-lg">
            <div className="h-2 bg-primary" />
            <CardHeader>
              <div className="flex justify-between items-center mb-2">
                <Badge variant="secondary" className="font-semibold uppercase tracking-wider text-[10px]">
                  {project.difficulty}
                </Badge>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <LucideUsers className="h-3 w-3" />
                  Teams of 2-3
                </div>
              </div>
              <CardTitle className="text-2xl flex items-center gap-2">
                <LucideRocket className="h-6 w-6 text-primary" />
                {project.title}
              </CardTitle>
              <CardDescription className="text-base pt-2">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h4 className="font-bold text-sm uppercase tracking-wider">Deliverables</h4>
                <ul className="space-y-2">
                  {project.deliverables.map((del, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <LucideCheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
                      {del}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="p-6 rounded-lg border bg-card">
          <h4 className="font-bold mb-2">Team Size</h4>
          <p className="text-sm text-muted-foreground">Projects are completed in teams of 2 to 3 students. Individual projects are allowed with prior approval.</p>
        </div>
        <div className="p-6 rounded-lg border bg-card">
          <h4 className="font-bold mb-2">Assessment</h4>
          <p className="text-sm text-muted-foreground">Grading is based on functionality (50%), design/architecture (30%), and documentation/demo (20%).</p>
        </div>
        <div className="p-6 rounded-lg border bg-card">
          <h4 className="font-bold mb-2">Timeline</h4>
          <p className="text-sm text-muted-foreground">Proposals are due by Week 10. Final presentations and code submissions occur in Weeks 14 and 15.</p>
        </div>
      </div>
    </div>
  );
}
