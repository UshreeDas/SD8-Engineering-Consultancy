// ✅ src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/sd8-logo.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Clients", path: "/clients" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Main nav */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-card/95 backdrop-blur-md shadow-md border-b border-border/50"
            : "bg-card/80 backdrop-blur-sm"
        }`}
      >
        {/* ✅ IMPORTANT: removed justify-between, use gap + flex rules */}
        <div className="container-wide px-4 sm:px-6 lg:px-8 flex items-center gap-4 h-16 lg:h-20">
          {/* ✅ Logo + Company Name (shrink + truncate safe) */}
          <Link to="/" className="flex items-center gap-3 min-w-0 flex-1">
            <img
              src={logo}
              alt="SD8 Engineering Consultancy"
              className="h-12 lg:h-12 w-auto flex-none"
            />

            <div className="leading-tight min-w-0">
              <p className="text-base lg:text-lg font-serif text-foreground truncate">
                SD8 Engineering Consultancy
              </p>
              <p className="text-[13px] lg:text-xs font-sans text-muted-foreground tracking-wide truncate">
                Infrastructure • Industrial • Residential
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8 flex-none">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${
                  location.pathname === item.path ? "active" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* ✅ Desktop CTA (no shrink) */}
          <div className="hidden lg:flex items-center gap-4 flex-none">
            <Link
              to="/contact"
              className="
                inline-flex items-center gap-2 px-5 py-2.5
                text-sm font-semibold font-sans rounded-lg
                text-white

                bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-700
                bg-[length:200%_200%]

                transition-all duration-500 ease-in-out
                hover:bg-[position:right_center]
                hover:shadow-lg hover:shadow-cyan-900/30

                active:scale-95
              "
            >
              Contact us
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileOpen((v) => !v)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors flex-none"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-card border-t border-border overflow-hidden"
            >
              <nav className="container-wide px-4 py-4 flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-4 py-3 rounded-lg text-sm font-medium font-sans transition-colors ${
                      location.pathname === item.path
                        ? "bg-primary/10 text-primary"
                        : "text-foreground/70 hover:bg-muted"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}

                {/* ✅ Mobile CTA matches desktop style */}
                <Link
                  to="/contact"
                  className="
                    mt-2 px-4 py-3 text-center text-sm font-semibold font-sans rounded-lg text-white
                    bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-700
                    bg-[length:200%_200%]
                    transition-all duration-500 ease-in-out
                    hover:bg-[position:right_center]
                    active:scale-[0.98]
                  "
                >
                  Contact us
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;
