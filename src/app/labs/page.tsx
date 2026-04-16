import { labs } from "@/data/curriculum";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LucideClock, LucideExternalLink, LucideSignal } from "lucide-react";
import Link from "next/link";

export default function LabsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Hands-on Labs</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Practical exercises to reinforce distributed systems concepts. Focus on &quot;modify this working example&quot; philosophy.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {labs.map((lab) => (
          <Card key={lab.id} className="flex flex-col h-full border-border/60 transition-all hover:border-primary/40">
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5">
                  Week {lab.week}
                </Badge>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <LucideClock className="h-3 w-3" />
                  {lab.estimatedTime}
                </div>
              </div>
              <CardTitle className="text-xl">{lab.title}</CardTitle>
              <CardDescription className="flex items-center gap-2 mt-1">
                <LucideSignal className="h-3 w-3" />
                Difficulty: {lab.difficulty}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-sm text-muted-foreground">
                {lab.description}
              </p>
            </CardContent>
            <CardFooter className="border-t pt-6 bg-muted/20">
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                <Link href={lab.starterCodeUrl} target="_blank">
                  View Starter Code
                  <LucideExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-16 p-8 rounded-xl bg-blue-50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30">
        <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4">Laboratory Guidelines</h3>
        <ul className="space-y-3 text-blue-800 dark:text-blue-200 text-sm">
          <li className="flex items-start gap-3">
            <div className="h-5 w-5 rounded-full bg-blue-200 dark:bg-blue-800 flex items-center justify-center shrink-0 mt-0.5 text-blue-700 dark:text-blue-300 font-bold text-xs">1</div>
            <p><strong>Use the starter code:</strong> We provide scaffolded Python scripts. Your job is to implement the core logic, not the boilerplate.</p>
          </li>
          <li className="flex items-start gap-3">
            <div className="h-5 w-5 rounded-full bg-blue-200 dark:bg-blue-800 flex items-center justify-center shrink-0 mt-0.5 text-blue-700 dark:text-blue-300 font-bold text-xs">2</div>
            <p><strong>Think about failures:</strong> Every lab will ask &quot;What happens if this node fails?&quot; or &quot;What if the message is delayed?&quot;.</p>
          </li>
          <li className="flex items-start gap-3">
            <div className="h-5 w-5 rounded-full bg-blue-200 dark:bg-blue-800 flex items-center justify-center shrink-0 mt-0.5 text-blue-700 dark:text-blue-300 font-bold text-xs">3</div>
            <p><strong>Python standard library:</strong> Most labs only require the Python standard library (threading, socket, multiprocessing).</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
