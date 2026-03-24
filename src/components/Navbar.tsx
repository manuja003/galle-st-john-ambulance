import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/volunteers", label: "Volunteers" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-white text-black shadow-sm border-b border-black/5">
      <div className="container px-4 md:px-8 flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative h-12 w-12 overflow-hidden rounded-lg bg-primary/5 p-1.5">
            <img 
              src="/download.jfif" 
              alt="St. John Ambulance Logo" 
              className="h-full w-full object-contain transition-transform group-hover:scale-110"
            />
          </div>
          <div className="hidden sm:block">
            <p className="text-xl font-black leading-tight uppercase tracking-tight text-primary italic">St. John Ambulance</p>
            <p className="text-xs font-bold text-black/40 uppercase tracking-[0.2em]">Galle District</p>
          </div>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`rounded-lg px-4 py-2 text-sm font-black uppercase tracking-widest transition-all italic ${
                pathname === link.to
                  ? "bg-black text-white shadow-md"
                  : "text-black/60 hover:bg-primary/5 hover:text-black"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-4 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-black text-white transition-all hover:bg-black shadow-md uppercase tracking-widest italic"
          >
            <Heart className="h-4 w-4 fill-current" /> Donate
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-black lg:hidden hover:bg-primary/5"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-white lg:hidden border-t border-black/5"
          >
            <div className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-5 py-3 text-lg font-black uppercase tracking-widest transition-all italic ${
                    pathname === link.to
                      ? "bg-black text-white"
                      : "text-black/60"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-lg font-black text-white shadow-md uppercase tracking-widest italic"
              >
                <Heart className="h-5 w-5 fill-current" /> Donate
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
