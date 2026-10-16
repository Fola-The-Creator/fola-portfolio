"use client";

import { useState, useEffect, useRef } from "react";
import Logo from "../icons/Logo";
import { TbMoon, TbSun } from "react-icons/tb";
import { useDarkTheme } from "@/context/DarkThemeContext";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import Link from "next/link";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/tech", label: "Tech Stack" },
  { href: "/projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
];

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

  // Set the active link straight away on page navigation.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (pathname === "/tech") setActiveSection("tech");
    else if (pathname === "/projects") setActiveSection("projects");
    else setActiveSection("");
  }, [pathname]);

  // One passive, frame-throttled scroll listener handles both the pill's
  // scrolled state and the active-section highlight on the home page.
  useEffect(() => {
    const isHome = pathname === "/";
    let frame = 0;

    const read = () => {
      frame = 0;
      setIsScrolled(window.scrollY > 20);

      if (!isHome) return;

      const sections = ["about", "tech", "projects", "skills", "contact"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveSection(section);
          return;
        }
      }
      setActiveSection("");
    };

    const handleScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(read);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [pathname]);

  // Two bars morph into an X.
  useEffect(() => {
    const top = topBarRef.current;
    const bot = botBarRef.current;
    if (!top || !bot) return;

    gsap.to(top, {
      y: isMobileMenuOpen ? 4 : 0,
      rotate: isMobileMenuOpen ? 45 : 0,
      duration: 0.32,
      ease: "power2.inOut",
    });
    gsap.to(bot, {
      y: isMobileMenuOpen ? -4 : 0,
      rotate: isMobileMenuOpen ? -45 : 0,
      duration: 0.32,
      ease: "power2.inOut",
    });
  }, [isMobileMenuOpen]);

  // Mobile menu panel with staggered links.
  useEffect(() => {
    const menu = mobileMenuRef.current;
    const links = menuLinksRef.current.filter(Boolean);
    if (!menu) return;

    if (isMobileMenuOpen) {
      gsap.fromTo(
        menu,
        { height: 0, autoAlpha: 0, y: -8 },
        { height: "auto", autoAlpha: 1, y: 0, duration: 0.4, ease: "power3.out" },
      );
      gsap.fromTo(
        links,
        { x: -14, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.35, ease: "power2.out", stagger: 0.06, delay: 0.1 },
      );
    } else {
      gsap.to(links, { x: -10, opacity: 0, duration: 0.18, ease: "power2.in", stagger: 0.03 });
      gsap.to(menu, { height: 0, autoAlpha: 0, y: -8, duration: 0.3, ease: "power3.in", delay: 0.08 });
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setTimeout(() => {
      isAnimatingRef.current = false;
    }, 400);
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMenu = () => setIsMobileMenuOpen(false);

  const iconButton =
    "flex items-center justify-center w-10 h-10 rounded-full text-grey-700 hover:text-grey-900 hover:bg-grey-100 transition-colors";

  return (
    <header className="fixed inset-x-0 top-3 md:top-5 z-50 pointer-events-none">
      {/* Same max width and gutters as SectionDiv, so the pill lines up with the page. */}
      <div className="max-w-360 mx-auto px-6 md:px-8 lg:px-18">
        <nav
          aria-label="Main"
          className={`pointer-events-auto w-full rounded-full border backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300 ${
            isScrolled || isMobileMenuOpen
              ? "bg-grey-0/90 border-grey-200 shadow-lg shadow-black/5"
              : "bg-grey-0/60 border-grey-200/70"
          }`}
        >
          <div className="flex items-center justify-between p-1.5 md:pl-6">
            <div className="flex items-center gap-1">
              {/* Mobile menu toggle */}
              <button
                onClick={toggleMobileMenu}
                className={`md:hidden ${iconButton}`}
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="flex flex-col justify-center items-center w-4 h-3 relative">
                  <span
                    ref={topBarRef}
                    className="block absolute w-3.5 h-0.5 bg-current rounded-full"
                    style={{ top: "1px", transformOrigin: "center" }}
                  />
                  <span
                    ref={botBarRef}
                    className="block absolute w-3.5 h-0.5 bg-current rounded-full"
                    style={{ bottom: "1px", transformOrigin: "center" }}
                  />
                </span>
              </button>

              <Link
                href="/#"
                onClick={closeMenu}
                aria-label="Home"
                className="px-2 md:px-0 hover:opacity-70 transition-opacity"
              >
                <Logo className="fill-grey-900 w-16" />
              </Link>
            </div>

            <div className="flex items-center gap-2">
              {/* Desktop links */}
              <div className="hidden md:flex items-center gap-0.5">
                {navLinks.map((link) => {
                  const isActive = activeSection === getSectionFromHref(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`text-sm tracking-wide px-3.5 py-2 rounded-full transition-colors duration-300 ${
                        isActive
                          ? "bg-grey-900 text-grey-0"
                          : "text-grey-600 hover:text-grey-900 hover:bg-grey-100"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              <span className="hidden md:block w-px h-5 bg-grey-200 mx-1" aria-hidden />

              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                className={iconButton}
                aria-label="Toggle dark mode"
              >
                <span
                  className={`transition-transform duration-500 ${theme === "dark" ? "rotate-180" : "rotate-0"}`}
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
        </nav>

        {/* Mobile menu panel, height driven by GSAP */}
        <div
          ref={mobileMenuRef}
          className="md:hidden pointer-events-auto w-full mt-2 rounded-3xl border border-grey-200 bg-grey-0 shadow-lg shadow-black/5 overflow-hidden"
          style={{ height: 0, opacity: 0, visibility: "hidden" }}
        >
          <div className="flex flex-col p-2">
            {navLinks.map((link, i) => {
              const isActive = activeSection === getSectionFromHref(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  ref={(el) => {
                    if (el) menuLinksRef.current[i] = el;
                  }}
                  onClick={closeMenu}
                  className={`text-sm tracking-wide px-4 py-3 rounded-2xl opacity-0 transition-colors ${
                    isActive
                      ? "bg-grey-100 text-grey-900"
                      : "text-grey-700 hover:text-grey-900 hover:bg-grey-100"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
