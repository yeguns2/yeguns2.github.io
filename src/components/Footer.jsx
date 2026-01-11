import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerInner">
        <div className="footerLeft">
          <div className="footerName">Yegun Shim</div>
          <div className="footerMeta">UIUC Computer Engineering · May 2027</div>
        </div>
        <div className="footerRight">
          <a href="mailto:yeguns2@illinois.edu">yeguns2@illinois.edu</a>
          <span className="dot">·</span>
          <a href="https://www.linkedin.com/in/yegun-shim-0a659433b/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <span className="dot">·</span>
          <a href="https://github.com/yeguns2" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
