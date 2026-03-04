"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../icons/Logo";
import { SectionDiv } from "./SectionDiv";
import { TbMoon, TbSun } from "react-icons/tb";
import { useDarkTheme } from "@/context/DarkThemeContext";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { theme, toggleTheme } = useDarkTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const sections = ["about", "tech", "projects", "skills", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#tech", label: "Tech Stack" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent  ${
        isScrolled
          ? "bg-grey-0/80 backdrop-blur-md border-grey-200!"
          : "backdrop-blur-md"
      }`}
    >
      <SectionDiv>
        <div className="flex items-center justify-between py-8">
          <div className="flex items-center gap-6">
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden flex items-center justify-center text-grey-700 p-3 border border-grey-200 rounded-full hover:bg-grey-100"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>

            {/* Logo */}
            <a href="#" className="hover:opacity-70 transition-opacity">
              <Logo className="fill-grey-900 w-24 sm:w-24" />
            </a>
          </div>

          <div className="flex items-center gap-10">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`text-sm tracking-wide relative group transition-colors ${
                      isActive
                        ? "text-accent-500"
                        : "text-grey-700 hover:text-grey-600"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-px bg-accent-500 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </a>
                );
              })}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center text-grey-700 p-3 border border-grey-200 rounded-full hover:bg-grey-100"
              aria-label="Toggle dark mode"
            >
              <span
                className={`transition-transform duration-500 ${
                  theme === "dark" ? "rotate-180" : "rotate-0"
                }`}
              >
                {theme === "dark" ? (
                  <TbSun className="text-lg" />
                ) : (
                  <TbMoon className="text-lg" />
                )}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-grey-200 py-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-grey-700 hover:text-grey-600 transition-colors text-sm tracking-wide py-2"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </SectionDiv>
    </nav>
  );
}
