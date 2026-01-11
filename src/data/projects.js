export const projects = [
  {
    title: "School Run FPGA — 2.5D Endless Runner Game",
    subtitle: "ECE 385 Final Project · Individual",
    description:
      "Real-time 2.5D endless runner on the Urbana FPGA board using a MicroBlaze SoC and a custom AXI-based HDMI renderer IP.",
    highlights: [
      "Custom HDMI renderer IP (AXI-controlled, DDR-backed framebuffer)",
      "Double buffering + BRAM line buffers for smooth output",
      "Keyboard input, audio output, sprites/UI overlays",
    ],
    badges: ["SystemVerilog", "MicroBlaze SoC", "AXI4", "DDR/BRAM", "HDMI"],
    image: "/assets/schoolrun.gif",
    repoUrl: "https://github.com/yeguns2/School_Run_FPGA",
    mediaClass: "mediaSchoolRun",
    
},
  {
    title: "FPGA MNIST CNN Accelerator",
    subtitle: "Independent Project · SystemVerilog",
    description:
      "CNN inference accelerator for MNIST on Urbana FPGA board at 100 MHz. Achieved ~3339× speedup vs MicroBlaze C baseline under limited resources.",
    highlights: [
      "Streaming conv pipeline with line buffers + MAC arrays",
      "Convolution / activation / pooling hardware pipeline",
      "HW/SW comparison vs MicroBlaze C baseline",
    ],
    badges: ["SystemVerilog", "CNN Inference", "100 MHz", "AXI", "HW/SW Co-Design"],
    image: "/assets/mnist.gif",
    repoUrl: "https://github.com/yeguns2/FPGA_MNIST_Accelerator",
    kpis: [
      { label: "Clock", value: "100 MHz" },
      { label: "Speedup", value: "~3339×" },
      { label: "Baseline", value: "MicroBlaze (C)" },
    ],
  },
];
