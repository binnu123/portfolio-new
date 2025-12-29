import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles, Sun, Moon } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(() => "light");

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved === "dark" || saved === "light") {
        setTheme(saved as "light" | "dark");
        document.documentElement.classList.toggle("dark", saved === "dark");
        return;
      }
    } catch (e) {
      // ignore
    }

    // fallback to system preference
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", prefersDark);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  // Liquid hover: set CSS variables for cursor position inside the link
  const handleNavMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget as HTMLElement;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--x", `${x}px`);
    el.style.setProperty("--y", `${y}px`);
  };

  const handleNavMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget as HTMLElement;
    // center fallback
    el.style.setProperty("--x", `50%`);
    el.style.setProperty("--y", `50%`);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "navbar-glass py-3 shadow-md" : "navbar-glass py-5"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-display font-bold text-xl transition-transform group-hover:scale-110">
                S
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-accent blur-xl opacity-50 group-hover:opacity-80 transition-opacity" />
            </div>
            <span className="text-foreground font-display font-semibold text-xl hidden sm:block">
              SampathDev<span className="text-primary">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 glass rounded-full px-2 py-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link text-muted-foreground hover:text-foreground px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium"
                onMouseMove={handleNavMouseMove}
                onMouseLeave={handleNavMouseLeave}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button & Theme Toggle */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label={`Toggle theme, current ${theme}`}
              className="nav-link btn-glass flex items-center gap-2 px-3 sm:px-4 py-2 rounded-md min-w-[96px] text-foreground"
              onMouseMove={handleNavMouseMove}
              onMouseLeave={handleNavMouseLeave}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              <span className="ml-2 hidden sm:inline-block text-sm font-medium">
                {theme === "dark" ? "Dark" : "Light"}
              </span>
            </button>

            <div className="hidden md:block">
              <Button variant="hero" asChild className="rounded-full">
                <a href="#contact">
                  <Sparkles size={16} />
                  Let's Talk
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2 glass rounded-xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 glass rounded-2xl p-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="nav-link text-muted-foreground hover:text-foreground px-4 py-3 rounded-xl transition-all duration-300 text-sm font-medium"
                  onMouseMove={handleNavMouseMove}
                  onMouseLeave={handleNavMouseLeave}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    toggleTheme();
                    setIsMobileMenuOpen(false);
                  }}
                  aria-label={`Toggle theme, current ${theme}`}
                  className="nav-link btn-glass flex items-center gap-2 px-3 py-2 rounded-md min-w-[84px] text-foreground"
                  onMouseMove={handleNavMouseMove}
                  onMouseLeave={handleNavMouseLeave}
                >
                  {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                  <span className="ml-2 text-sm font-medium">
                    {theme === "dark" ? "Dark" : "Light"}
                  </span>
                </button>
                <Button variant="hero" asChild className="mt-2 rounded-full">
                  <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <Sparkles size={16} />
                    Let's Talk
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
