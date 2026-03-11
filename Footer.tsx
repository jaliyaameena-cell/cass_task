import { Linkedin, Instagram, Globe } from "lucide-react";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Leadership", href: "#team" },
  { label: "Events", href: "#events" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer style={{ background: "hsl(210, 45%, 8%)" }} className="text-white/70">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-14">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xs tracking-wider" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  CAS
                </span>
              </div>
              <span className="font-bold text-white text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                IEEE CASS Kerala
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/45">
              Advancing circuits and systems engineering through education,
              research, and professional community.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white text-xs font-semibold tracking-[0.15em] uppercase mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-white/45 hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white text-xs font-semibold tracking-[0.15em] uppercase mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Connect
            </h4>
            <div className="flex gap-3">
              {[Linkedin, Instagram, Globe].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 border border-white/15 flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-5 text-center">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} IEEE Circuits and Systems Society —
            Kerala Chapter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
