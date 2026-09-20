"use client";

const FIELD_CLASS =
  "h-14 w-full rounded-[14px] border border-white/12 bg-white/4 px-[18px] text-base text-foreground outline-none focus-visible:ring-2 focus-visible:ring-accent-violet-light focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const LABEL_CLASS = "mb-2 block text-sm font-medium text-[#C9CDD6]";

function ChevronIcon() {
  return (
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
      className="pointer-events-none absolute top-1/2 right-[18px] block shrink-0 -translate-y-1/2 text-muted"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function ArrowIcon() {
  return (
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export default function ContactForm() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
      className="flex flex-col gap-6"
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div>
          <label htmlFor="c-name" className={LABEL_CLASS}>
            Name
          </label>
          <input
            id="c-name"
            name="name"
            type="text"
            placeholder="Your name"
            required
            className={FIELD_CLASS}
          />
        </div>
        <div>
          <label htmlFor="c-email" className={LABEL_CLASS}>
            Email
          </label>
          <input
            id="c-email"
            name="email"
            type="email"
            placeholder="you@company.com"
            required
            className={FIELD_CLASS}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div>
          <label htmlFor="c-company" className={LABEL_CLASS}>
            Company
          </label>
          <input
            id="c-company"
            name="company"
            type="text"
            placeholder="Company name"
            className={FIELD_CLASS}
          />
        </div>
        <div>
          <label htmlFor="c-type" className={LABEL_CLASS}>
            Project type
          </label>
          <div className="relative">
            <select
              id="c-type"
              name="projectType"
              defaultValue=""
              className={`${FIELD_CLASS} appearance-none pr-11 text-muted`}
            >
              <option value="" disabled>
                Select a project type
              </option>
              <option value="web">Web app</option>
              <option value="mobile">Mobile app</option>
              <option value="agentic-ai">Agentic AI</option>
              <option value="not-sure">Not sure yet</option>
            </select>
            <ChevronIcon />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="c-budget" className={LABEL_CLASS}>
          Budget range
        </label>
        <div className="relative">
          <select
            id="c-budget"
            name="budget"
            defaultValue=""
            className={`${FIELD_CLASS} appearance-none pr-11 text-muted`}
          >
            <option value="" disabled>
              Select a budget range
            </option>
            <option value="under-10k">Under $10k</option>
            <option value="10k-25k">$10k – $25k</option>
            <option value="25k-plus">$25k+</option>
          </select>
          <ChevronIcon />
        </div>
      </div>

      <div>
        <label htmlFor="c-msg" className={LABEL_CLASS}>
          Message
        </label>
        <textarea
          id="c-msg"
          name="message"
          placeholder="Tell us what you're building"
          required
          rows={5}
          className="w-full resize-none rounded-[14px] border border-white/12 bg-white/4 px-[18px] py-4 text-base text-foreground outline-none focus-visible:ring-2 focus-visible:ring-accent-violet-light focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        />
      </div>

      <div className="mt-1">
        <button
          type="submit"
          className="inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-linear-to-br from-cta-from to-cta-to px-8 text-[17px] font-medium tracking-[-0.01em] text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18),0_10px_36px_rgba(124,92,255,0.45),0_0_72px_rgba(34,211,238,0.14)]"
        >
          Start a Project
          <ArrowIcon />
        </button>
      </div>
    </form>
  );
}
