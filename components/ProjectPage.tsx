import Link from "next/link";
import type { ReactNode } from "react";

import type { Project } from "@/lib/projects";

export default function ProjectPage({
  project,
  children,
}: {
  project: Project;
  children: ReactNode;
}) {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-12 sm:py-16">
      <nav aria-label="Breadcrumb" className="mb-10 text-sm text-muted">
        <Link href="/" className="transition-colors hover:text-accent">
          Home
        </Link>
        <span className="mx-2 select-none" aria-hidden="true">
          /
        </span>
        <span className="text-ink">{project.shortTitle}</span>
      </nav>

      <header className="mb-10 border-b border-line pb-8">
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {project.title}
        </h1>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md bg-surface px-2 py-1 text-xs text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>
      </header>

      <article className="article">{children}</article>
    </main>
  );
}
