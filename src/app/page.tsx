import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideArrowRight } from "lucide-react";
import { LucideCode2 } from "lucide-react";
import { LucideDatabase } from "lucide-react";
import { LucideLayers } from "lucide-react";
import { LucideNetwork } from "lucide-react";
import { LucideShieldCheck } from "lucide-react";
import { LucideZap } from "lucide-react";
import { LucideGithub } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 py-24 text-white lg:py-32">
        {/* Abstract Distributed Background Pattern */}
        <div className="absolute inset-0 opacity-40">
          <Image
            src="https://picsum.photos/id/1015/1200/800"
            alt="Distributed background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-950/80" />
          <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-blue-500 blur-[120px]" />
          <div className="absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-purple-500 blur-[120px]" />
        </div>

        <div className="container relative mx-auto px-4 text-center">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-6xl">
            Distributed Systems <span className="text-blue-400">Fundamentals</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-300 md:text-xl">
            A practical, hands-on introduction to building scalable, reliable, and fault-tolerant systems using Python.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/syllabus">View Syllabus</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-white border-white/20 hover:bg-white/10">
              <Link href="/labs">Browse Labs</Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-slate-300 hover:text-white">
              <Link href="https://github.com/victordeman/distributed-systems" target="_blank">
                <LucideGithub className="mr-2 h-5 w-5" />
                GitHub Repo
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Course Highlights</h2>
            <p className="mt-4 text-muted-foreground">Everything you need to master the core concepts of distributed computing.</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-border/50 bg-card/50 transition-all hover:border-primary/50">
              <CardHeader>
                <LucideCode2 className="h-10 w-10 text-blue-500" />
                <CardTitle className="mt-4">Python-Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Learn with Python—much gentler than Go or C++, allowing you to focus on high-level system concepts without the pain of low-level memory management.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 transition-all hover:border-primary/50">
              <CardHeader>
                <LucideZap className="h-10 w-10 text-yellow-500" />
                <CardTitle className="mt-4">Hands-on Labs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Guided starter code for every lab. We follow a &quot;modify this working example&quot; philosophy to ensure you spend time solving interesting problems.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 transition-all hover:border-primary/50">
              <CardHeader>
                <LucideLayers className="h-10 w-10 text-purple-500" />
                <CardTitle className="mt-4">Raft Consensus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Implement a practical Raft-inspired consensus protocol. Skip the deep Paxos math and build something that actually works.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 transition-all hover:border-primary/50">
              <CardHeader>
                <LucideNetwork className="h-10 w-10 text-green-500" />
                <CardTitle className="mt-4">Real-World Cases</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Analyze how Google, Netflix, and Amazon build their infrastructure. Study Dynamo, Cassandra, Spanner, and GFS.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 transition-all hover:border-primary/50">
              <CardHeader>
                <LucideDatabase className="h-10 w-10 text-red-500" />
                <CardTitle className="mt-4">Practical Storage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  From NFS to S3, understand how data is stored, cached, and kept consistent across hundreds of machines.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 transition-all hover:border-primary/50">
              <CardHeader>
                <LucideShieldCheck className="h-10 w-10 text-indigo-500" />
                <CardTitle className="mt-4">Fault Tolerance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Learn how to build systems that keep working even when nodes crash, networks partition, and messages are lost.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Links CTA */}
      <section className="border-t bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div>
              <h2 className="text-2xl font-bold">Ready to dive in?</h2>
              <p className="text-muted-foreground">Check out the syllabus or jump straight into the first lab.</p>
            </div>
            <div className="flex gap-4">
              <Button asChild variant="default">
                <Link href="/syllabus">Syllabus <LucideArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/labs">Labs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
