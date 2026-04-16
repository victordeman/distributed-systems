import { curriculum } from "@/data/curriculum";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { LucideBookOpen, LucideCode, LucideLightbulb, LucideImage } from "lucide-react";
import Image from "next/image";

export default function SyllabusPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Course Syllabus</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A 15-week journey through the foundations and advanced topics of distributed systems.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
        <div className="lg:col-span-3">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {curriculum.map((week) => (
              <AccordionItem
                key={week.number}
                value={`week-${week.number}`}
                className="border rounded-lg px-4 bg-card"
              >
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-4 text-left">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                      {week.number}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Week {week.number}</div>
                        {(week.number === 7 || week.number === 9 || week.number === 10) && (
                          <Badge variant="secondary" className="text-[10px] h-4 px-1.5 flex items-center gap-1">
                            <LucideImage className="h-2.5 w-2.5" />
                            Visual Aid
                          </Badge>
                        )}
                      </div>
                      <div className="text-xl font-bold">{week.title}</div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pt-2">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 font-semibold text-primary">
                        <LucideLightbulb className="h-4 w-4" />
                        Topics
                      </div>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        {week.topics.map((topic, i) => (
                          <li key={i}>{topic}</li>
                        ))}
                      </ul>

                      {week.number === 7 && (
                        <div className="mt-8 p-4 border rounded-lg bg-muted/30">
                          <div className="flex items-center gap-2 mb-3 font-semibold text-xs uppercase text-muted-foreground">
                            <LucideImage className="h-3 w-3" />
                            Vector Clock Example
                          </div>
                          <div className="relative h-48 w-full bg-slate-200 dark:bg-slate-800 rounded flex items-center justify-center overflow-hidden">
                             <div className="absolute inset-0 flex flex-col justify-around p-4 opacity-50">
                                <div className="h-0.5 w-full bg-primary relative"><div className="absolute -left-1 -top-1 h-2.5 w-2.5 rounded-full bg-primary" /></div>
                                <div className="h-0.5 w-full bg-primary relative"><div className="absolute -left-1 -top-1 h-2.5 w-2.5 rounded-full bg-primary" /></div>
                             </div>
                             <span className="text-xs text-muted-foreground z-10 font-mono">[1, 0] → [1, 1]</span>
                          </div>
                        </div>
                      )}

                      {week.number === 9 && (
                        <div className="mt-8 p-4 border rounded-lg bg-muted/30">
                          <div className="flex items-center gap-2 mb-3 font-semibold text-xs uppercase text-muted-foreground">
                            <LucideImage className="h-3 w-3" />
                            CAP Theorem Triangle
                          </div>
                          <div className="relative h-48 w-full bg-slate-200 dark:bg-slate-800 rounded flex items-center justify-center overflow-hidden">
                             <Image
                                src="https://miro.medium.com/v2/resize:fit:1400/1*QJ5z2v8z4v4zqZfZfZfZfZfZfZfZfZfZf.png"
                                alt="CAP Theorem"
                                fill
                                className="object-contain p-2"
                                unoptimized
                             />
                          </div>
                        </div>
                      )}

                      {week.number === 10 && (
                        <div className="mt-8 p-4 border rounded-lg bg-muted/30">
                          <div className="flex items-center gap-2 mb-3 font-semibold text-xs uppercase text-muted-foreground">
                            <LucideImage className="h-3 w-3" />
                            Raft Leader Election & Log Replication (simplified)
                          </div>
                          <div className="relative h-48 w-full bg-slate-200 dark:bg-slate-800 rounded flex items-center justify-center overflow-hidden">
                             <Image
                                src="https://raft.github.io/raft-animated.gif"
                                alt="Raft Visualization"
                                fill
                                className="object-contain"
                                unoptimized
                             />
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 font-semibold text-blue-500">
                          <LucideBookOpen className="h-4 w-4" />
                          Readings
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {week.readings.length > 0 ? (
                            week.readings.map((reading, i) => (
                              <Badge key={i} variant="secondary">{reading}</Badge>
                            ))
                          ) : (
                            <span className="text-sm text-muted-foreground">No required readings this week.</span>
                          )}
                        </div>
                      </div>

                      {week.labDescription && (
                        <div className="space-y-4">
                          <div className="flex items-center gap-2 font-semibold text-green-600">
                            <LucideCode className="h-4 w-4" />
                            Lab Activity
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {week.labDescription}
                          </p>
                          {week.starterCodeNote && (
                            <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50 dark:bg-green-950/30">
                              {week.starterCodeNote}
                            </Badge>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="hidden lg:block">
          <Card className="sticky top-24">
            <CardContent className="p-6">
              <h3 className="font-bold mb-4">Course Progress</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm mb-1">
                  <span>Completion</span>
                  <span>0%</span>
                </div>
                <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-0 transition-all" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
