import { CONTACT_LINKS } from "@/content/contact";

export function SiteFooter() {
  return (
    <footer className="w-full bg-violet-50 px-6 py-8 md:px-10 lg:px-16 xl:px-24 dark:bg-violet-950/20">
      <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <span className="text-xl font-bold tracking-tight text-accent">RM</span>
          <span className="text-xs text-muted-foreground">
            © 2026 Ravi M. All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-4">
          {CONTACT_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              aria-label={link.label}
              className="text-muted-foreground transition-colors hover:text-accent"
            >
              <link.icon className="size-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
