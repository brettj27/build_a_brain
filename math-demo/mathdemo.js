// mathdemo.js

const steps = [
    {
      id: 1,
      label: "Stage 1",
      system: "Sensory Memory",
      title: "Perception & Encoding",
      description:
        "You see the equation 2x + 5 = 9. The eyes and visual cortex recognize the symbols as numbers, letters, and an equals sign.",
      example: "Visual snapshot of “2x + 5 = 9”.",
      brain: "visual cortex (occipital lobe)",
    },
    {
      id: 2,
      label: "Stage 2",
      system: "Working Memory",
      title: "Holding the Equation",
      description:
        "Working memory keeps the pieces (2x, +, 5, =, 9) active so you can think about them. You might silently repeat it in your head.",
      example: "Inner voice: “Two x plus five equals nine.”",
      brain: "prefrontal cortex & working memory systems",
    },
    {
      id: 3,
      label: "Stage 3",
      system: "Long-Term Memory",
      title: "Retrieving Rules & Facts",
      description:
        "Your brain pulls in stored algebra rules and number facts: move the 5 to the other side, and 9 − 5 = 4.",
      example: "Rule: “Subtract 5 from both sides.”",
      brain: "hippocampus & semantic memory networks",
    },
    {
      id: 4,
      label: "Stage 4",
      system: "Working + Procedural Memory",
      title: "Applying the Steps",
      description:
        "You use the rules to transform the equation: 2x = 4, then x = 2. If you’ve practiced a lot, this feels almost automatic.",
      example: "Doing 9 − 5 and 4 ÷ 2 without much effort.",
      brain: "prefrontal cortex + procedural circuits (basal ganglia)",
    },
    {
      id: 5,
      label: "Stage 5",
      system: "Encoding to Long-Term Memory",
      title: "Reinforcing the Pattern",
      description:
        "Solving similar problems strengthens the pathway, making it easier to solve the next equation you see.",
      example: "Next time you see ax + b = c, you solve it faster.",
      brain: "hippocampus consolidating repeated patterns",
    },
  ];
  
  // Dot layout (horizontal line)
  const nodeLayout = [
    { id: 1, x: 10, y: 45 },
    { id: 2, x: 30, y: 43 },
    { id: 3, x: 50, y: 48 },
    { id: 4, x: 70, y: 44 },
    { id: 5, x: 90, y: 47 },
  ];
  
  function MemoryNetwork() {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const activeStep = steps[activeIndex];
  
    function handleNext() {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }
  
    return (
      <div className="min-h-screen bg-slate-950 text-slate-50 relative overflow-hidden flex flex-col justify-between">
        {/* Header at top */}
        <header className="z-20 text-center pt-10 pb-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Problem Solving & Memory: Psychology
          </h1>
        </header>
  
        {/* Dots in middle */}
        <div className="absolute inset-0 z-10">
          {nodeLayout.map((node, idx) => {
            const isActive = idx === activeIndex;
            const isVisited = idx < activeIndex;
            return (
              <button
                key={node.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                style={{ left: node.x + "%", top: node.y + "%" }}
                className="absolute -translate-x-1/2 -translate-y-1/2 outline-none group"
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
  
        {/* Stage card at bottom center */}
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
              <span className="inline-flex items-center rounded-full border border-sky-400/70 bg-sky-500/10 px-3 py-1 text-[11px] font-semibold text-sky-200">
                {activeStep.system}
              </span>
            </div>
  
            <p className="text-sm md:text-[15px] leading-relaxed text-slate-200 text-left">
              {activeStep.description}
            </p>
  
            <div className="mt-3 flex flex-wrap items-center gap-2 text-xs md:text-[13px] text-left">
              <span className="inline-flex items-center rounded-full bg-slate-800 px-2 py-0.5 text-slate-300">
                <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Example
              </span>
              <span className="text-slate-300 italic">{activeStep.example}</span>
            </div>
  
            <p className="mt-3 text-[11px] md:text-xs text-slate-400 text-left">
              Brain focus: {activeStep.brain}.
            </p>
  
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
  