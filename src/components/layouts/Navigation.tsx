"use client";

import { useState, useEffect, useRef } from "react";
import Logo from "../icons/Logo";
import { SectionDiv } from "./SectionDiv";
import { TbMoon, TbSun } from "react-icons/tb";
import { useDarkTheme } from "@/context/DarkThemeContext";
import gsap from "gsap";
import Link from "next/link";

const getSectionFromHref = (href: string) => {
  if (href.startsWith("/#")) return href.slice(2); // "/#about" -> "about"
  if (href.startsWith("/")) return href.slice(1); // "/tech" -> "tech"
  return href;
};

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { theme, toggleTheme } = useDarkTheme();

  // Refs for GSAP targets
  const topBarRef = useRef<HTMLSpanElement>(null);
  const midBarRef = useRef<HTMLSpanElement>(null);
  const botBarRef = useRef<HTMLSpanElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuLinksRef = useRef<HTMLAnchorElement[]>([]);
  const isAnimatingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

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

  // Animate hamburger ↔ X
  useEffect(() => {
    const top = topBarRef.current;
    const mid = midBarRef.current;
    const bot = botBarRef.current;
    if (!top || !mid || !bot) return;

    if (isMobileMenuOpen) {
      // Morph to X
      gsap.to(top, { y: 6, rotate: 45, duration: 0.35, ease: "back.out(2)" });
      gsap.to(mid, { scaleX: 0, opacity: 0, duration: 0.2, ease: "power2.in" });
      gsap.to(bot, { y: -6, rotate: -45, duration: 0.35, ease: "back.out(2)" });
    } else {
      // Revert to hamburger
      gsap.to(top, { y: 0, rotate: 0, duration: 0.35, ease: "back.out(2)" });
      gsap.to(mid, {
        scaleX: 1,
        opacity: 1,
        duration: 0.25,
        ease: "power2.out",
        delay: 0.05,
      });
      gsap.to(bot, { y: 0, rotate: 0, duration: 0.35, ease: "back.out(2)" });
    }
  }, [isMobileMenuOpen]);

  // Animate mobile menu panel + stagger links
  useEffect(() => {
    const menu = mobileMenuRef.current;
    const links = menuLinksRef.current.filter(Boolean);
    if (!menu) return;

    if (isMobileMenuOpen) {
      // Reveal panel
      gsap.fromTo(
        menu,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.4, ease: "power3.out" },
      );
      // Stagger links in
      gsap.fromTo(
        links,
        { x: -18, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.35,
          ease: "power2.out",
          stagger: 0.07,
          delay: 0.12,
        },
      );
    } else {
      // Collapse panel
      gsap.to(links, {
        x: -12,
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
        stagger: 0.04,
      });
      gsap.to(menu, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power3.in",
        delay: 0.1,
      });
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "/#about", label: "About" },
    { href: "/tech", label: "Tech Stack" },
    { href: "/projects", label: "Projects" },
    { href: "/#skills", label: "Skills" },
    { href: "/#contact", label: "Contact" },
  ];

  // const scrollToSection = (
  //   e: React.MouseEvent<HTMLAnchorElement>,
  //   href: string,
  // ) => {
  //   // Only intercept hash links
  //   if (href.startsWith("#") || href.startsWith("/#")) {
  //     e.preventDefault();
  //     const selector = href.startsWith("/#") ? href.slice(1) : href;
  //     const element = document.querySelector(selector);
  //     if (element) {
  //       element.scrollIntoView({ behavior: "smooth" });
  //       setIsMobileMenuOpen(false);
  //     }
  //   }
  //   // Otherwise, allow default navigation (e.g. /tech)
  // };

  const toggleMobileMenu = () => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setTimeout(() => {
      isAnimatingRef.current = false;
    }, 450);
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
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
              aria-expanded={isMobileMenuOpen}
            >
              {/* Custom animated hamburger — 3 bars managed by GSAP */}
              <span className="flex flex-col justify-center items-center w-[18px] h-[18px] gap-0 relative">
                <span
                  ref={topBarRef}
                  className="block absolute w-[16px] h-[1.5px] bg-current rounded-full"
                  style={{ top: "3px", transformOrigin: "center" }}
                />
                <span
                  ref={midBarRef}
                  className="block absolute w-[16px] h-[1.5px] py-px bg-current rounded-full"
                  style={{
                    top: "50%",
                    transform: "translateY(-50%)",
                    transformOrigin: "center",
                  }}
                />
                <span
                  ref={botBarRef}
                  className="block absolute w-[16px] h-[1.5px] py-px bg-current rounded-full"
                  style={{ bottom: "3px", transformOrigin: "center" }}
                />
              </span>
            </button>

            {/* Logo */}
            <Link
              href="/#"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:opacity-70 transition-opacity"
            >
              <Logo className="fill-grey-900 w-24 sm:w-24" />
            </Link>
          </div>

          <div className="flex items-center gap-10">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const section = getSectionFromHref(link.href);
                const isActive = activeSection === section;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    // onClick={(e) => scrollToSection(e, link.href)}
                    onClick={() => setIsMobileMenuOpen(false)}
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
                  </Link>
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

        {/* Mobile Menu — always rendered, GSAP controls visibility */}
        <div
          ref={mobileMenuRef}
          className="md:hidden border-t border-grey-200 overflow-hidden"
          style={{ height: 0, opacity: 0 }}
        >
          <div className="flex flex-col gap-1 py-4">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                ref={(el) => {
                  if (el) menuLinksRef.current[i] = el;
                }}
                // onClick={(e) => scrollToSection(e, link.href)}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-grey-700 hover:text-accent-500 transition-colors text-sm tracking-wide py-2 px-1 opacity-0"
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
