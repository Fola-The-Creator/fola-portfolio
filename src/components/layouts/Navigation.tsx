"use client";

import { useState, useEffect, useRef } from "react";
import Logo from "../icons/Logo";
import { SectionDiv } from "./SectionDiv";
import { TbMoon, TbSun } from "react-icons/tb";
import { useDarkTheme } from "@/context/DarkThemeContext";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import Link from "next/link";

const getSectionFromHref = (href: string) => {
  if (href.startsWith("/#")) return href.slice(2);
  if (href.startsWith("/")) return href.slice(1);
  return href;
};

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { theme, toggleTheme } = useDarkTheme();
  const pathname = usePathname();

  const topBarRef = useRef<HTMLSpanElement>(null);
  const botBarRef = useRef<HTMLSpanElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuLinksRef = useRef<HTMLAnchorElement[]>([]);
  const isAnimatingRef = useRef(false);

  // Set active state immediately when the path changes (page nav)
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (pathname === "/tech") setActiveSection("tech");
    else if (pathname === "/projects") setActiveSection("projects");
    else setActiveSection("");
  }, [pathname]);

  // Scroll-based active section detection for homepage hash links
  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["about", "tech", "projects", "skills", "contact"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Track scrolled state on non-home pages too (for nav bg)
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2-bar → X animation
  useEffect(() => {
    const top = topBarRef.current;
    const bot = botBarRef.current;
    if (!top || !bot) return;

    if (isMobileMenuOpen) {
      gsap.to(top, { y: 4, rotate: 45, duration: 0.32, ease: "power2.inOut" });
      gsap.to(bot, { y: -4, rotate: -45, duration: 0.32, ease: "power2.inOut" });
    } else {
      gsap.to(top, { y: 0, rotate: 0, duration: 0.32, ease: "power2.inOut" });
      gsap.to(bot, { y: 0, rotate: 0, duration: 0.32, ease: "power2.inOut" });
    }
  }, [isMobileMenuOpen]);

  // Mobile menu panel + staggered links
  useEffect(() => {
    const menu = mobileMenuRef.current;
    const links = menuLinksRef.current.filter(Boolean);
    if (!menu) return;

    if (isMobileMenuOpen) {
      gsap.fromTo(
        menu,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.4, ease: "power3.out" },
      );
      gsap.fromTo(
        links,
        { x: -18, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.35, ease: "power2.out", stagger: 0.07, delay: 0.12 },
      );
    } else {
      gsap.to(links, { x: -12, opacity: 0, duration: 0.2, ease: "power2.in", stagger: 0.04 });
      gsap.to(menu, { height: 0, opacity: 0, duration: 0.3, ease: "power3.in", delay: 0.1 });
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "/#about", label: "About" },
    { href: "/tech", label: "Tech Stack" },
    { href: "/projects", label: "Projects" },
    { href: "/#skills", label: "Skills" },
    { href: "/#contact", label: "Contact" },
  ];

  const toggleMobileMenu = () => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setTimeout(() => { isAnimatingRef.current = false; }, 400);
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${isScrolled ? "bg-grey-0/90 backdrop-blur-md border-grey-200!" : "bg-grey-0/50 backdrop-blur-md"
        }`}
    >
      <SectionDiv>
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-4">
            {/* Mobile menu toggle — 2 bars → X */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden flex items-center justify-center text-grey-700 p-2.5 border border-grey-200 rounded-full hover:bg-grey-100 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="flex flex-col justify-center items-center w-[16px] h-[12px] relative">
                <span
                  ref={topBarRef}
                  className="block absolute w-[14px] h-[2px] bg-current rounded-full"
                  style={{ top: "1px", transformOrigin: "center" }}
                />
                <span
                  ref={botBarRef}
                  className="block absolute w-[14px] h-[2px] bg-current rounded-full"
                  style={{ bottom: "1px", transformOrigin: "center" }}
                />
              </span>
            </button>

            {/* Logo */}
            <Link
              href="/#"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:opacity-70 transition-opacity"
            >
              <Logo className="fill-grey-900 w-18" />
            </Link>
          </div>

          <div className="flex items-center gap-8">
            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => {
                const section = getSectionFromHref(link.href);
                const isActive = activeSection === section;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-sm tracking-wide relative group transition-colors ${isActive ? "text-grey-900" : "text-grey-600 hover:text-grey-900"
                      }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-px bg-grey-900 transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center text-grey-700 p-2.5 border border-grey-200 rounded-full hover:bg-grey-100 transition-colors"
              aria-label="Toggle dark mode"
            >
              <span
                className={`transition-transform duration-500 ${theme === "dark" ? "rotate-180" : "rotate-0"
                  }`}
              >
                {theme === "dark" ? (
                  <TbSun className="text-base" />
                ) : (
                  <TbMoon className="text-base" />
                )}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile menu — GSAP controls height */}
        <div
          ref={mobileMenuRef}
          className="md:hidden border-t border-grey-200 overflow-hidden"
          style={{ height: 0, opacity: 0 }}
        >
          <div className="flex flex-col gap-1 py-3">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                ref={(el) => { if (el) menuLinksRef.current[i] = el; }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-grey-700 hover:text-grey-900 transition-colors text-sm tracking-wide py-2 px-1 opacity-0"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </SectionDiv>
    </nav>
  );
}
