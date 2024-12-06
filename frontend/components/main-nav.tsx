import Link from "next/link";

import { cn } from "@/lib/utils";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav className={cn("flex flex-col space-y-4 py-4", className)} {...props}>
      <Link
        href="/dashboard"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Dashboard
      </Link>
      <Link
        href="/feeds"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Feeds
      </Link>
      <Link
        href="/api-docs"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        API Docs
      </Link>
      <Link
        href="/settings"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Settings
      </Link>
    </nav>
  );
}
