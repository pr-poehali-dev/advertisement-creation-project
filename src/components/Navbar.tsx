import { useState } from "react";
import Icon from "@/components/ui/icon";

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navbar = ({ currentPage, onNavigate }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { id: "home", label: "Главная" },
    { id: "catalog", label: "Каталог" },
    { id: "about", label: "О магазине" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <button
          onClick={() => onNavigate("home")}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-full berry-gradient flex items-center justify-center shadow-lg">
            <span className="text-white text-sm font-bold">Н</span>
          </div>
          <div className="text-left">
            <div className="font-black text-lg leading-none text-[var(--berry)]" style={{ fontFamily: "Raleway" }}>
              неваренье
            </div>
            <div className="text-[10px] text-[var(--forest)] font-semibold tracking-widest uppercase leading-none">
              брусника
            </div>
          </div>
        </button>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                currentPage === link.id
                  ? "bg-[var(--berry)] text-white shadow-md"
                  : "text-foreground/70 hover:text-[var(--berry)] hover:bg-[rgba(192,22,62,0.06)]"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="relative p-2 rounded-xl hover:bg-secondary transition-colors">
            <Icon name="ShoppingCart" size={20} className="text-foreground/70" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-[var(--berry)] rounded-full text-white text-[10px] flex items-center justify-center font-bold">
              0
            </span>
          </button>
          <button
            className="md:hidden p-2 rounded-xl hover:bg-secondary transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={20} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-border px-4 py-3 flex flex-col gap-1">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => { onNavigate(link.id); setMenuOpen(false); }}
              className={`px-4 py-3 rounded-xl text-sm font-semibold text-left transition-all ${
                currentPage === link.id
                  ? "bg-[var(--berry)] text-white"
                  : "text-foreground/70 hover:bg-secondary"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
