import { LucideGithub, LucideMail, LucideTwitter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-8">About the Course</h1>
        <div className="prose dark:prose-invert max-w-none space-y-6 text-muted-foreground">
          <p className="text-xl text-foreground font-medium">
            &quot;Distributed Systems Fundamentals&quot; is designed to demystify how large-scale computer systems are built.
          </p>
          <p>
            The course focuses on practical implementation and intuition over abstract proofs. We use Python to allow students to focus on high-level system logic—concurrency, message passing, and failure handling—without being bogged down by low-level memory management.
          </p>
          <p>
            By the end of this course, you will have built a replicated key-value store, implemented vector clocks for causality, and understood the inner workings of modern consensus protocols like Raft.
          </p>
        </div>

        <div className="mt-16 border-t pt-12">
          <h2 className="text-2xl font-bold mb-8">Instructional Staff</h2>
          <Card className="max-w-md">
            <CardContent className="p-6 flex items-center gap-6">
              <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary shrink-0">
                VD
              </div>
              <div>
                <h3 className="text-xl font-bold">Victor DeMan</h3>
                <p className="text-sm text-muted-foreground mb-4">Lead Instructor</p>
                <div className="flex gap-3">
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    <LucideGithub className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    <LucideTwitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    <LucideMail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
