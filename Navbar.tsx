import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Leadership", href: "#team" },
  { label: "Events", href: "#events" },
  { label: "Impact", href: "#stats" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-sans font-bold text-xs tracking-wider">
              CAS
            </span>
          </div>
          <div className="leading-tight hidden sm:block">
            <span
              className={`font-bold text-sm block transition-colors ${
                scrolled ? "text-foreground" : "text-white"
              }`}
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              IEEE CASS
            </span>
            <span
              className={`text-xs transition-colors ${
                scrolled ? "text-muted-foreground" : "text-white/60"
              }`}
            >
              Kerala Chapter
            </span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium px-4 py-2 transition-colors ${
                scrolled
                  ? "text-muted-foreground hover:text-primary"
                  : "text-white/70 hover:text-white"
              }`}
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {l.label}
            </a>
          ))}
        </div>

        <button
          className={`md:hidden transition-colors ${
            scrolled ? "text-foreground" : "text-white"
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-card border-b border-border px-5 pb-5 pt-2 space-y-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2.5 border-b border-border last:border-0"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
