import { socialLinks } from "@/lib/social";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-4 px-6 py-10 sm:flex-row sm:justify-between">
        <span className="text-sm text-muted">
          © {new Date().getFullYear()} Run Zhang
        </span>

        <ul className="flex items-center gap-1">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={link.label}
                className="flex size-9 items-center justify-center rounded-lg text-muted transition-colors hover:bg-surface hover:text-accent"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path d={link.path} />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
