import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/${project.slug}`}
      className="group flex flex-col gap-5 rounded-xl border border-line bg-bg p-5 transition-colors hover:border-accent sm:flex-row sm:items-start sm:gap-6 sm:p-6"
    >
      <div className="shrink-0 overflow-hidden rounded-lg bg-white sm:w-44">
        <Image
          src={project.thumbnail.src}
          alt={project.thumbnail.alt}
          width={project.thumbnail.width}
          height={project.thumbnail.height}
          sizes="(max-width: 640px) 100vw, 176px"
          className="h-36 w-full object-contain sm:h-24"
        />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-base font-semibold tracking-tight transition-colors group-hover:text-accent">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted">{project.summary}</p>

        <ul className="mt-1 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md bg-surface px-2 py-1 text-xs text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
