import Link from "next/link"
import { LucideGithub } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold">DS Fundamentals</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              A university-level course on the principles and practice of distributed systems.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
              <li><Link href="/syllabus" className="hover:text-primary">Syllabus</Link></li>
              <li><Link href="/labs" className="hover:text-primary">Labs</Link></li>
              <li><Link href="/projects" className="hover:text-primary">Capstone Projects</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Connect</h4>
            <div className="mt-2 flex items-center gap-4">
              <a
                href="https://github.com/victordeman/distributed-systems"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <LucideGithub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Distributed Systems Fundamentals. MIT License.
        </div>
      </div>
    </footer>
  )
}
