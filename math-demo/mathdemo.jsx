import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // includes Tailwind

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


const steps = [
  {
    id: 1,
    label: "Stage 1",
    system: "Sensory Memory",
    title: "Perception & Encoding",
    description:
      "You see the equation 2x + 5 = 9. The eyes and visual cortex recognize the symbols as numbers, letters, and an equals sign.",
    example: "Visual snapshot of “2x + 5 = 9”.",
  },
  {
    id: 2,
    label: "Stage 2",
    system: "Working Memory",
    title: "Holding the Equation",
    description:
      "Working memory keeps the pieces (2x, +, 5, =, 9) active so you can think about them. You might silently repeat it in your head.",
    example: "Inner voice: “Two x plus five equals nine.”",
  },
  {
    id: 3,
    label: "Stage 3",
    system: "Long-Term Memory",
    title: "Retrieving Rules & Facts",
    description:
      "Your brain pulls in stored algebra rules and number facts: move the 5 to the other side, and 9 − 5 = 4.",
    example: "Rule: “Subtract 5 from both sides.”",
  },
  {
    id: 4,
    label: "Stage 4",
    system: "Working + Procedural Memory",
    title: "Applying the Steps",
    description:
      "You use the rules to transform the equation: 2x = 4, then x = 2. If you’ve practiced a lot, this feels almost automatic.",
    example: "Doing 9 − 5 and 4 ÷ 2 without much effort.",
  },
  {
    id: 5,
    label: "Stage 5",
    system: "Encoding to Long-Term Memory",
    title: "Reinforcing the Pattern",
    description:
      "Solving similar problems strengthens the pathway, making it easier to solve the next equation you see.",
    example: "Next time you see ax + b = c, you solve it faster.",
  },
];

export default function MemoryPathway() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-5xl w-full">
        {/* Header */}
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            How Your Brain Uses Memory to Solve Algebra
          </h1>
        </header>

        {/* Pathway */}
        <div className="relative">
          {/* Vertical line (the main pathway) */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-slate-700/70 pointer-events-none" />

          <ul className="space-y-6">
            {steps.map((step, index) => (
              <li key={step.id} className="relative flex gap-4">
                {/* Node + connector line */}
                <div className="flex flex-col items-center">
                  {/* Connector line above node (except first) */}
                  {index !== 0 && (
                    <div className="hidden md:block w-px flex-1 bg-slate-700/70" />
                  )}

                  {/* Node circle */}
                  <div className="relative">
                    <div className="h-5 w-5 rounded-full bg-sky-400 shadow-[0_0_0_4px_rgba(56,189,248,0.25)] border border-sky-200" />
                    {/* Small glow ring */}
                    <div className="absolute inset-0 -m-1 rounded-full border border-sky-500/50 blur-[1px] opacity-60" />
                  </div>

                  {/* Connector line below node (except last) */}
                  {index !== steps.length - 1 && (
                    <div className="hidden md:block w-px flex-1 bg-slate-700/70" />
                  )}
                </div>

                {/* Card */}
                <div className="flex-1">
                  <div className="bg-slate-900/70 border border-slate-700/70 rounded-2xl px-4 py-4 md:px-6 md:py-5 shadow-lg shadow-slate-950/40 backdrop-blur">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-xs font-medium uppercase tracking-wide text-slate-400">
                        {step.label}
                      </span>
                      <span className="inline-flex items-center rounded-full border border-sky-400/70 bg-sky-500/10 px-2.5 py-0.5 text-[11px] font-medium text-sky-200">
                        {step.system}
                      </span>
                    </div>

                    <h2 className="text-lg md:text-xl font-semibold text-slate-50">
                      {step.title}
                    </h2>

                    <p className="mt-2 text-sm md:text-[15px] leading-relaxed text-slate-200">
                      {step.description}
                    </p>

                    <div className="mt-3 flex flex-wrap items-center gap-2 text-xs md:text-[13px]">
                      <span className="inline-flex items-center rounded-full bg-slate-800 px-2 py-0.5 text-slate-300">
                        <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        Example
                      </span>
                      <span className="text-slate-300 italic">
                        {step.example}
                      </span>
                    </div>

                    {/* Optional “brain region” hint line */}
                    <div className="mt-3 text-[11px] md:text-xs text-slate-400">
                      {step.id === 1 && (
                        <span>Brain focus: visual cortex (occipital lobe).</span>
                      )}
                      {step.id === 2 && (
                        <span>
                          Brain focus: prefrontal cortex & working memory
                          systems.
                        </span>
                      )}
                      {step.id === 3 && (
                        <span>
                          Brain focus: hippocampus & semantic memory networks.
                        </span>
                      )}
                      {step.id === 4 && (
                        <span>
                          Brain focus: prefrontal cortex + procedural circuits
                          (basal ganglia).
                        </span>
                      )}
                      {step.id === 5 && (
                        <span>
                          Brain focus: hippocampus consolidating repeated
                          patterns.
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Legend at the bottom */}
          <div className="mt-8 grid gap-3 md:grid-cols-3 text-xs md:text-[13px] text-slate-300">
            <div className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
              <p>
                <span className="font-semibold">Nodes</span> = major stages in
                solving an algebra problem.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1 h-2 w-6 bg-slate-600 rounded-full" />
              <p>
                <span className="font-semibold">Lines</span> = information
                flowing forward through time.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
              <p>
                <span className="font-semibold">Green dot</span> examples show
                what you’re consciously aware of at each step.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
