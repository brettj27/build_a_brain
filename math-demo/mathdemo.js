// mathdemo.js


const steps = [
  {
    id: 1,
    label: "Stage 1",
    system: "Sensory Memory",
    title: "Perception & Encoding",
    description: [
      "You see the problem 5x - 2 = 8. Your eyes and visual cortex register the symbols on the page or screen.",
      "Your brain recognizes the digits 2, 5, 8 as meaningful symbols (numbers representing quantities).",
      "Your brain recognizes x and the operators - and = as mathematical symbols with functions.",
      "Your brain encodes the symbols into mental representations, which then enter working memory.",
    ],
  },
  {
    id: 2,
    label: "Stage 2",
    system: "Working Memory",
    title: "Holding the Equation",
    description: [
      "Working memory keeps the components of the equation active so you can think about them.",
      "Attention allows the problem to stay active in working memory. Unattended stimuli are forgotten!",
      "You might use rehearsal (silently repeating the equation) to keep it in working memory.",
      
    ],
  },
  {
    id: 3,
    label: "Stage 3",
    system: "Long-Term Memory",
    title: "Retrieving Rules & Facts",
    description: [
      "Your brain retrieves stored (previously learned) algebra rules from your long-term memory.",
      "Rules such as operations have to be done to both sides, you can't divide by 0.",
    ],
  },
  {
    id: 4,
    label: "Stage 4",
    system: "Working + Procedural Memory",
    title: "Applying the Steps",
    description: [
      "Working memory uses the retrieved rules to actively solve equation step-by-step.",
      "You remember from previous problems you need to add 2 to both sides, and then divide by 5 on both sides.",
      "The more practice you have, the more these procedures become easier and faster.",
    ],
  },
  {
    id: 5,
    label: "Stage 5",
    system: "Encoding to Long-Term Memory",
    title: "Reinforcing the Pattern",
    description: [
      "Each time you solve similar problems, your brain strengthens the long-term memory's ability to quickly retrieve the rules and procedures needed.",
      "Through repeated practice, these steps become more efficient and easier to retrieve the next time you need to solve a similar problem.",
    ],
  },
  {
    id: 6,
    label: "Stage 6",
    system: "Working Memory and Long-Term Memory",
    title: "Reinforcing the Pattern (Continued)",
    description: [
      "The more practice you get going through these steps, the easier and more accurately you are able to solve problems.",
      "You might solve 10, 20, or 50 more problems to feel confident for an upcoming test",
      "Once you are actually taking the test, you are more likely to be able to solve the problems since you are familiar with the procedures and have solved different types of problems.",
    ],
  },
  {
    id: 7,
    label: "References (Citations)",
    system: "Research Links",
    title: "Works Cited",
    description: [
      "Raghubar, K. P., Barnes, M. A., & Hecht, S. A. (2010). Working memory and mathematics: A review of developmental, individual difference, and cognitive approaches. Learning and Individual Differences, 20(2), 110–122.",
    ],
  },
];

// node positions as % of container
const nodeLayout = [
  { id: 1, x: 7, y: 45 },
  { id: 2, x: 21.3, y: 43 },
  { id: 3, x: 35.6, y: 46 },
  { id: 4, x: 50, y: 44 },
  { id: 5, x: 64.3, y: 45 },
  { id: 6, x: 78.6, y: 43 },
  { id: 7, x: 93, y: 47 },
];

function MemoryNetwork() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const activeStep = steps[activeIndex];

  // Build base (gray) path from nodeLayout (0–100 space)
  const basePath = nodeLayout
    .map((n, idx) => `${idx === 0 ? "M" : "L"} ${n.x} ${n.y}`)
    .join(" ");

  // Build blue progress path only AFTER stage 1
  const progressPath =
    activeIndex > 0
      ? nodeLayout
          .slice(0, activeIndex + 1)
          .map((n, idx) => `${idx === 0 ? "M" : "L"} ${n.x} ${n.y}`)
          .join(" ")
      : "";

  function handleNext() {
    setActiveIndex((prev) => (prev + 1) % steps.length);
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 relative overflow-hidden flex flex-col justify-between">
      {/* Header */}
      <header className="z-20 text-center pt-10 pb-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Problem Solving &amp; Memory: Psychology
        </h1>

        {/* 👇 Add this caption */}
        <p className="max-w-2xl mx-auto mt-3 text-slate-400 text-sm md:text-base leading-relaxed px-4">
          This interactive demo walks you through how your brain solves a simple
          algebra equation step-by-step. Click through each stage to explore how
          your brain processes work together when solving math problems.
        </p>
        <p className="mt-4 text-center text-slate-300 text-lg font-medium tracking-wide">
          <span className="text-sky-300 font-semibold">The Problem:</span> 5x − 2 = 8
        </p>

      </header>



      {/* SVG + nodes overlay */}
      <div className="absolute inset-0 z-10">
        <svg
          className="absolute inset-0 pointer-events-none"
          width="100%"
          height="100%"
          viewBox="0 0 100 100"          // match our 0–100 coords
          preserveAspectRatio="none"
        >
          {/* full gray line, always visible */}
          <path
            d={basePath}
            fill="none"
            stroke="rgba(148,163,184,0.35)"
            strokeWidth=".5"
            strokeLinecap="round"
          />

          {/* blue progress line, only after stage 1 */}
          {progressPath && (
            <path
              d={progressPath}
              fill="none"
              stroke="rgba(56,189,248,0.85)"
              strokeWidth=".6"
              strokeLinecap="round"
            />
          )}
        </svg>

        {/* Nodes */}
        {nodeLayout.map((node, idx) => {
          const isActive = idx === activeIndex;
          const isVisited = idx < activeIndex;

          return (
            <button
              key={node.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className="absolute outline-none group"
              style={{
                left: node.x + "%",
                top: node.y + "%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div
                className={[
                  "h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300",
                  isActive
                    ? "bg-sky-500/35 shadow-[0_0_40px_rgba(56,189,248,0.9)]"
                    : isVisited
                    ? "bg-emerald-500/20"
                    : "bg-slate-700/40",
                ].join(" ")}
              >
                <div
                  className={[
                    "h-3.5 w-3.5 rounded-full border transition-transform duration-300",
                    isActive
                      ? "bg-sky-400 border-sky-100 scale-125"
                      : isVisited
                      ? "bg-emerald-400 border-emerald-100"
                      : "bg-slate-300 border-slate-50",
                  ].join(" ")}
                />
              </div>
              <span className="mt-1 block text-[10px] font-medium tracking-wide text-slate-300 group-hover:text-sky-200">
                {node.id}
              </span>
            </button>
          );
        })}
      </div>

      {/* Bottom card */}
      <div className="relative z-20 w-full flex flex-col items-center text-center pb-10">
        <div className="w-full max-w-md bg-slate-900/85 border border-slate-700/80 rounded-3xl px-5 py-5 md:px-6 md:py-6 shadow-xl shadow-slate-950/70 backdrop-blur mb-6">
          <div className="flex items-center justify-between gap-3 mb-3">
            <div className="text-left">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                {activeStep.label}
              </p>
              <h2 className="text-xl font-semibold text-slate-50">
                {activeStep.title}
              </h2>
            </div>
            {activeStep.system && (
              <span className="inline-flex items-center rounded-full border border-sky-400/70 bg-sky-500/10 px-3 py-1 text-[11px] font-semibold text-sky-200">
                {activeStep.system}
              </span>
            )}
          </div>

          <div className="text-sm md:text-[15px] leading-relaxed text-slate-200 text-left">
            {Array.isArray(activeStep.description)
              ? activeStep.description.map((line, i) => (
                <p key={i} className="mb-1 whitespace-pre-line">
                  {line}
                </p>
              ))
              : <p className="whitespace-pre-line">{activeStep.description}</p>
            }
          </div>






          <div className="mt-4 flex items-center justify-between gap-2 text-xs text-slate-400">
            <p>
              Stage{" "}
              <span className="font-semibold text-slate-200">
                {activeIndex + 1} / {steps.length}
              </span>
            </p>
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center gap-1 rounded-full bg-sky-500 hover:bg-sky-400 px-3 py-1.5 text-[11px] font-semibold text-slate-950 transition-colors"
            >
              Next stage →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return <MemoryNetwork />;
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
