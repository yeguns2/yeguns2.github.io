export const experience = [
  {
    role: "Undergraduate Research Assistant",
    org: "UIUC — Dafny-HLS Verification Research",
    dates: "May 2025 – Dec 2025",
    tags: ["Dafny", "Formal Verification", "Benchmarks", "Python"],
    bullets: [
      "Designed Dafny verification methodologies to reliably detect HLS-relevant bug classes in numerical kernels.",
      "Produced and annotated ~1,300 bug-injected Dafny benchmarks; benchmarked numeric behavior via Python analysis to support controlled LLM-based repair evaluation.",
      "Curated benchmark pool and bug taxonomy; automated numeric comparison across problem sizes for systematic evaluation."
    ],
  },
  {
    role: "Undergraduate Research Assistant",
    org: "UIUC — OpenRTLSet V2",
    dates: "Dec 2025 – Present",
    tags: ["RTL", "Dataset Pipeline", "Verilator", "Verilog-Perl", "JSONL", "Verification"],
    bullets: [
      "Designed and implemented an end-to-end preprocessing pipeline for OpenRTLSet V2 (~470K Verilog RTL modules), converting raw multi-repo HDL into LLM-trainable, hierarchy-aware dataset artifacts.",
      "Integrated Verilator and Verilog-Perl to perform dependency-aware preprocessing: include resolution, module/header separation, module splitting, lint/elaboration checks, and hierarchy extraction for scalable dataset generation.",
      "Packaged outputs with extracted module I/O + hierarchy metadata to support VerilogTypeEval module-type classification/verification and dependency-aware LLM labeling experiments."
    ],
  },
];
