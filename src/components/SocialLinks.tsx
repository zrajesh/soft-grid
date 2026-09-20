const LINKS = [
  {
    label: "LinkedIn",
    href: "#",
    path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
    extra: (
      <>
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
  {
    label: "GitHub",
    href: "#",
    path: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
    extra: <path d="M9 18c-4.51 2-5-2-7-2" />,
  },
  {
    label: "X",
    href: "#",
    path: "M4 4l11.733 16h4.267l-11.733 -16z",
    extra: <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />,
  },
];

export default function SocialLinks() {
  return (
    <div className="flex gap-2.5">
      {LINKS.map(({ label, href, path, extra }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/14 text-foreground"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="block shrink-0"
          >
            <path d={path} />
            {extra}
          </svg>
        </a>
      ))}
    </div>
  );
}
