import type { TopicDetail } from "../content";

function withoutFinalPeriod(text: string) {
  return text.replace(/\.\s*$/, "");
}

export function TopicTooltips({ topics }: { topics: TopicDetail[] }) {
  if (topics.length === 0) {
    return null;
  }

  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {topics.map((topic) => {
        const tooltipId = `topic-tooltip-${topic.slug}`;

        return (
          <div className="group relative inline-flex" key={topic.slug}>
            <button
              aria-describedby={tooltipId}
              className="inline-flex min-h-10 cursor-help appearance-none items-center gap-2 rounded-lg border border-[#B9CFDD] bg-[#B9CFDD]/35 px-3.5 py-2 text-left text-sm font-medium text-[#0D2744] shadow-[0_10px_24px_rgba(13,39,68,0.06)]"
              type="button"
            >
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF929A]"
              />
              {topic.title}
            </button>
            <div
              className="pointer-events-none invisible absolute left-0 top-full z-50 mt-3 w-[min(82vw,24rem)] rounded-lg border border-[#B9CFDD] bg-white p-4 text-left text-sm font-normal leading-7 text-[#53728A] opacity-0 shadow-[0_18px_48px_rgba(13,39,68,0.16)] transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"
              id={tooltipId}
              role="tooltip"
            >
              <p className="text-[#0D2744]">
                {withoutFinalPeriod(topic.summary)}
              </p>
              {topic.examples ? (
                <div className="mt-3">
                  <p>{topic.examplesLabel || "Beispiele:"}</p>
                  <ul className="mt-2 grid list-disc gap-1 pl-5">
                    {topic.examples.map((example) => (
                      <li key={example}>{withoutFinalPeriod(example)}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}
