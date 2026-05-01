import Image from "next/image";
import { staff } from "@/data/staff";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideGraduationCap, LucideUser } from "lucide-react";

export default function StaffPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Teaching Staff</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Meet the instructors for the Distributed Systems Fundamentals course.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
        {staff.map((member) => (
          <Card key={member.name} className="overflow-hidden border-2 transition-all hover:border-primary/50">
            <div className="flex flex-col md:flex-row">
              <div className="flex-1 flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-2 text-primary font-semibold mb-1">
                    <LucideUser className="h-4 w-4" />
                    {member.role}
                  </div>
                  <CardTitle className="text-2xl">{member.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  {member.education && member.education.length > 0 && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 font-semibold text-sm text-muted-foreground uppercase tracking-wider">
                        <LucideGraduationCap className="h-4 w-4" />
                        Education
                      </div>
                      <ul className="space-y-1 text-muted-foreground">
                        {member.education.map((edu, i) => (
                          <li key={i} className="text-sm">{edu}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </div>
              <div className="relative md:w-1/4 aspect-[4/5] md:aspect-auto min-h-[250px] md:min-h-0">
                <Image
                  src={member.imageUrl}
                  alt={member.title}
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-16 p-8 rounded-2xl bg-muted/50 border text-center">
        <h2 className="text-xl font-bold mb-2">Teaching Assistants</h2>
        <p className="text-muted-foreground">
          There are no Teaching Assistants for this course session.
        </p>
      </div>
    </div>
  );
}
