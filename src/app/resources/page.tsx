import { resources } from "@/data/curriculum";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideBook, LucideExternalLink, LucideHammer, LucideLink2 } from "lucide-react";
import Link from "next/link";

export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Resources</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Supplementary materials, tools, and readings to help you succeed in the course.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Readings */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <LucideBook className="h-6 w-6 text-blue-500" />
            <h2 className="text-2xl font-bold">Readings</h2>
          </div>
          <div className="grid gap-4">
            {resources.readings.map((reading, i) => (
              <Card key={i}>
                <CardContent className="p-4 flex items-center justify-between">
                  <span className="text-sm font-medium">{reading.title}</span>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={reading.url}>
                      <LucideLink2 className="h-4 w-4 mr-2" />
                      Link
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Tools */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <LucideHammer className="h-6 w-6 text-orange-500" />
            <h2 className="text-2xl font-bold">Tools & Setup</h2>
          </div>
          <div className="grid gap-4">
            {resources.tools.map((tool, i) => (
              <Card key={i}>
                <CardContent className="p-4 flex items-center justify-between">
                  <span className="text-sm font-medium">{tool.name}</span>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={tool.url} target="_blank">
                      <LucideExternalLink className="h-4 w-4 mr-2" />
                      Website
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      {/* External Case Studies */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Real-World Case Studies</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {["Dynamo", "Cassandra", "Netflix", "Google Spanner"].map((item) => (
            <Card key={item} className="bg-muted/30 border-dashed">
              <CardHeader className="p-6">
                <CardTitle className="text-lg">{item}</CardTitle>
                <p className="text-xs text-muted-foreground mt-2">Architecture analysis and deep dive.</p>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
