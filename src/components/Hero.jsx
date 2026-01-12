import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero" id="top" aria-label="Hero">
      <div className="heroBg" aria-hidden="true" />
      <div className="heroImgOverlay" aria-hidden="true">
        <img src="/assets/hero-bg.jpg" alt="" />
      </div>

      <div className="heroInner">
        <motion.div
          className="heroCard"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="heroTop">
            <div className="avatarWrap">
              <img
                src="/assets/headshot.jpg"
                alt="Headshot of Yegun Shim"
                className="avatar"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>

            <div className="heroText">
              <h1>
                Yegun Shim <span className="pronounce">· UIUC Computer Engineering</span>
              </h1>
              <p className="heroSub">
                Undergraduate · Expected Graduation: <strong>May 2027</strong>
              </p>

              <p className="heroDesc">
                Interested in <strong>Embedded Systems</strong>, <strong>SoC Design</strong>, <strong>FPGA Development</strong>, and{" "}
                <strong>Deep Learning Hardware</strong>. I like shipping real systems from RTL and AXI-based IP to software
                integration and performance tuning on hardware.
              </p>

              <div className="pillRow" role="list" aria-label="Interest tags">
                {["Embedded", "SoC", "FPGA", "AXI", "Deep Learning HW"].map((t) => (
                  <span key={t} className="pill" role="listitem">
                    {t}
                  </span>
                ))}
              </div>

              <div className="heroCtas">
                <a className="cta" href="#projects">
                  View Projects <ArrowDown size={18} />
                </a>
                <a className="cta ghost" href="/assets/Yegun_Shim_Resume_f.pdf" target="_blank" rel="noreferrer">
                  Resume (PDF)
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
