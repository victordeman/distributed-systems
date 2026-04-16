import { assessmentWeighting } from "@/data/curriculum";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AssessmentsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Assessments & Policies</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          How your performance will be evaluated in this course.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        {/* Weighting */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Grading Weighting</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {assessmentWeighting.map((item) => (
                  <div key={item.item} className="flex items-center justify-between py-2 border-b last:border-0">
                    <span className="font-medium">{item.item}</span>
                    <Badge variant="secondary" className="text-lg px-3">{item.weight}%</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Policies */}
        <div className="lg:col-span-2 space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Course Philosophy</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                This course is designed to be practical. While we cover essential theory (CAP theorem, Paxos/Raft safety), the primary goal is for you to build intuition through coding.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>More Scaffolding:</strong> We provide starter code to bypass boilerplate.</li>
                <li><strong>Python Everywhere:</strong> We use Python to focus on system logic rather than memory management.</li>
                <li><strong>Visuals First:</strong> We prioritize diagrams and simulations over dense proofs.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Late Policy</h2>
            <p className="text-muted-foreground">
              Each student has 3 &quot;late days&quot; for the entire semester. Once exhausted, a 10% penalty per day applies. Labs are not accepted more than 5 days late.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Academic Integrity</h2>
            <p className="text-muted-foreground">
              Collaboration is encouraged, but all submitted code must be your own (or your team&apos;s for the capstone). Using AI tools is permitted as long as you can explain every line of code you submit.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
