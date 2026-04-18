import { curriculum, Week } from "@/data/curriculum";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  LucideBookOpen,
  LucideCode,
  LucideLightbulb,
  LucideImage,
  LucideLayers,
  LucideNetwork,
  LucideClock,
  LucideCheckCircle,
  LucideDatabase,
  LucideInfo
} from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Block {
  title: string;
  weeks: Week[];
  icon: React.ReactNode;
  color: string;
}

export default function SyllabusPage() {
  const blocks: Block[] = [
    {
      title: "Foundations",
      weeks: curriculum.filter(w => w.number >= 1 && w.number <= 3),
      icon: <LucideLayers className="h-6 w-6" />,
      color: "text-blue-500 bg-blue-500/10"
    },
    {
      title: "Communication & Naming",
      weeks: curriculum.filter(w => w.number >= 4 && w.number <= 6),
      icon: <LucideNetwork className="h-6 w-6" />,
      color: "text-purple-500 bg-purple-500/10"
    },
    {
      title: "Time & Coordination",
      weeks: curriculum.filter(w => w.number >= 7 && w.number <= 8),
      icon: <LucideClock className="h-6 w-6" />,
      color: "text-orange-500 bg-orange-500/10"
    },
    {
      title: "Consistency & Consensus",
      weeks: curriculum.filter(w => w.number >= 9 && w.number <= 10),
      icon: <LucideCheckCircle className="h-6 w-6" />,
      color: "text-green-500 bg-green-500/10"
    },
    {
      title: "Advanced Topics & Case Studies",
      weeks: curriculum.filter(w => w.number >= 11 && w.number <= 15),
      icon: <LucideDatabase className="h-6 w-6" />,
      color: "text-rose-500 bg-rose-500/10"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Course Syllabus</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A comprehensive 15-week journey through the foundations and advanced topics of distributed systems.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
        <div className="lg:col-span-3 space-y-12">
          {blocks.map((block) => (
            <section key={block.title} className="space-y-6">
              <div className="flex items-center gap-3">
                <div className={cn("p-2 rounded-lg", block.color)}>
                  {block.icon}
                </div>
                <h2 className="text-2xl font-bold tracking-tight">{block.title}</h2>
              </div>

              <Accordion type="single" collapsible className="w-full space-y-4">
                {block.weeks.map((week) => (
                  <AccordionItem
                    key={week.number}
                    value={`week-${week.number}`}
                    className="border rounded-lg px-4 bg-card shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <AccordionTrigger className="hover:no-underline py-6">
                      <div className="flex items-center gap-4 text-left">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                          {week.number}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Week {week.number}</div>
                            {(week.number >= 7 && week.number <= 10) && (
                              <Badge variant="secondary" className="text-[10px] h-4 px-1.5 flex items-center gap-1 bg-yellow-100 text-yellow-800 border-yellow-200">
                                <LucideImage className="h-2.5 w-2.5" />
                                Visual Aid
                              </Badge>
                            )}
                          </div>
                          <div className="text-lg font-bold">{week.title}</div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 pt-2">
                      <div className="grid gap-8 md:grid-cols-2">
                        <div className="space-y-6">
                          <div>
                            <div className="flex items-center gap-2 font-semibold text-primary mb-3">
                              <LucideLightbulb className="h-4 w-4" />
                              Topics Covered
                            </div>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
                              {week.topics.map((topic, i) => (
                                <li key={i}>{topic}</li>
                              ))}
                            </ul>
                          </div>

                          {(week.number === 7 || week.number === 8) && (
                            <div className="p-4 border rounded-lg bg-muted/30">
                              <div className="flex items-center gap-2 mb-3 font-semibold text-xs uppercase text-muted-foreground">
                                <LucideImage className="h-3 w-3" />
                                Vector Clock Causality
                              </div>
                              <div className="relative h-48 w-full bg-slate-100 dark:bg-slate-800 rounded flex items-center justify-center overflow-hidden border">
                                 <svg viewBox="0 0 400 200" className="w-full h-full p-4">
                                    <line x1="20" y1="50" x2="380" y2="50" stroke="currentColor" strokeWidth="2" strokeDasharray="4" />
                                    <line x1="20" y1="150" x2="380" y2="150" stroke="currentColor" strokeWidth="2" strokeDasharray="4" />
                                    <circle cx="50" cy="50" r="5" fill="#3b82f6" />
                                    <text x="45" y="40" className="text-[10px] fill-current" textAnchor="middle">[1,0]</text>
                                    <circle cx="150" cy="150" r="5" fill="#10b981" />
                                    <text x="145" y="170" className="text-[10px] fill-current" textAnchor="middle">[1,1]</text>
                                    <path d="M 50 50 L 150 150" stroke="#3b82f6" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
                                    <defs>
                                      <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                                        <path d="M0,0 L0,6 L9,3 z" fill="#3b82f6" />
                                      </marker>
                                    </defs>
                                 </svg>
                                 <div className="absolute bottom-2 right-2 text-[10px] bg-background/80 px-1 rounded">Visual representation of event ordering</div>
                              </div>
                            </div>
                          )}

                          {week.number === 9 && (
                            <div className="p-4 border rounded-lg bg-muted/30">
                              <div className="flex items-center gap-2 mb-3 font-semibold text-xs uppercase text-muted-foreground">
                                <LucideImage className="h-3 w-3" />
                                CAP Theorem Triangle
                              </div>
                              <div className="relative h-48 w-full bg-slate-100 dark:bg-slate-800 rounded flex items-center justify-center overflow-hidden border">
                                 <svg viewBox="0 0 200 200" className="w-full h-full p-8">
                                    <polygon points="100,20 180,160 20,160" fill="none" stroke="currentColor" strokeWidth="2" />
                                    <circle cx="100" cy="20" r="4" fill="#ef4444" />
                                    <text x="100" y="15" className="text-[10px] font-bold fill-current" textAnchor="middle">Consistency</text>
                                    <circle cx="180" cy="160" r="4" fill="#3b82f6" />
                                    <text x="180" y="175" className="text-[10px] font-bold fill-current" textAnchor="middle">Availability</text>
                                    <circle cx="20" cy="160" r="4" fill="#10b981" />
                                    <text x="20" y="175" className="text-[10px] font-bold fill-current" textAnchor="middle">Partition Tolerance</text>
                                 </svg>
                              </div>
                            </div>
                          )}

                          {week.number === 10 && (
                            <div className="p-4 border rounded-lg bg-muted/30">
                              <div className="flex items-center gap-2 mb-3 font-semibold text-xs uppercase text-muted-foreground">
                                <LucideImage className="h-3 w-3" />
                                Raft Leader Election (Animated)
                              </div>
                              <div className="relative h-48 w-full bg-slate-100 dark:bg-slate-800 rounded flex items-center justify-center overflow-hidden border">
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

                        <div className="space-y-8">
                          <div className="space-y-4">
                            <div className="flex items-center gap-2 font-semibold text-blue-500">
                              <LucideBookOpen className="h-4 w-4" />
                              Required Readings
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {week.readings.length > 0 ? (
                                week.readings.map((reading, i) => (
                                  <Badge key={i} variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200">{reading}</Badge>
                                ))
                              ) : (
                                <span className="text-sm text-muted-foreground">No required readings this week.</span>
                              )}
                            </div>
                          </div>

                          <div className="space-y-4 p-5 rounded-xl border-2 border-dashed bg-green-50/30 border-green-100 dark:bg-green-950/10 dark:border-green-900/30">
                            <div className="flex items-center gap-2 font-bold text-green-700 dark:text-green-400">
                              <LucideCode className="h-5 w-5" />
                              Lab Activity
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {week.labDescription}
                            </p>
                            <div className="flex items-center gap-2 pt-2">
                              <Badge variant="outline" className="text-green-600 border-green-200 bg-white dark:bg-slate-900">
                                <LucideInfo className="h-3 w-3 mr-1" />
                                Starter code provided on GitHub
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          ))}
        </div>

        <div className="hidden lg:block">
          <Card className="sticky top-24 border-primary/20 shadow-lg">
            <CardContent className="p-6">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <LucideCheckCircle className="h-5 w-5 text-primary" />
                Course Progress
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Completion</span>
                  <span className="font-bold">0%</span>
                </div>
                <div className="h-3 w-full bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-0 transition-all duration-500" />
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Track your journey through 15 weeks of distributed systems mastery.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
