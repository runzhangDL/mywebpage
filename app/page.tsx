import Image from "next/image";

import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

const education = [
  {
    degree: "MS Information Systems",
    institution: "New York University",
    period: "September 2023 – May 2025",
  },
  {
    degree: "MSc Artificial Intelligence",
    institution: "University of Southampton",
    period: "September 2019 – October 2020",
  },
  {
    degree: "BEng Software Engineering",
    institution: "Guangzhou University",
    period: "September 2015 – July 2019",
  },
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16 sm:py-24">
      <section className="flex flex-col-reverse items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <p className="typewriter text-2xl font-semibold tracking-tight sm:text-3xl">
            Hi, my name is Run Zhang.
          </p>
          <p className="mt-3 text-base text-muted">
            你好，我是张润 — welcome to my page.
          </p>
        </div>

        <Image
          src="/profile.jpg"
          alt="Portrait of Run Zhang"
          width={1464}
          height={1436}
          priority
          sizes="128px"
          className="size-28 shrink-0 rounded-2xl object-cover sm:size-32"
        />
      </section>

      <section className="mt-16" aria-labelledby="about">
        <h2
          id="about"
          className="text-xs font-medium uppercase tracking-[0.14em] text-muted"
        >
          About
        </h2>
        <div className="mt-4 space-y-4 text-base leading-relaxed">
          <p>
            I&apos;m a software engineer working on AI. Most of what I do sits
            where machine learning meets real systems — training and evaluating
            models in Python and PyTorch, then making them run reliably and fast
            once they leave the notebook.
          </p>
          <p>
            I&apos;ve built perception for autonomous vehicles, researched graph
            neural networks for text, and worked on video prediction. Lately
            I&apos;ve been going deeper on large language models and the
            engineering around them: retrieval, agents, evaluation, and CUDA for
            squeezing more out of the hardware. I&apos;m drawn to problems that
            are both useful and genuinely hard.
          </p>
        </div>
      </section>

      <section className="mt-16" aria-labelledby="education">
        <h2
          id="education"
          className="text-xs font-medium uppercase tracking-[0.14em] text-muted"
        >
          Education
        </h2>
        <ul className="mt-4 divide-y divide-line border-y border-line">
          {education.map((item) => (
            <li
              key={item.institution}
              className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <div>
                <div className="font-medium">{item.degree}</div>
                <div className="text-sm text-muted">{item.institution}</div>
              </div>
              <div className="shrink-0 text-sm text-muted tabular-nums">
                {item.period}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16" aria-labelledby="projects">
        <h2
          id="projects"
          className="text-xs font-medium uppercase tracking-[0.14em] text-muted"
        >
          Projects
        </h2>
        <div className="mt-4 flex flex-col gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
