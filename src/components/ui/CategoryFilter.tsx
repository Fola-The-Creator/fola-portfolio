"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const VISIBLE_DESKTOP = 5;

type Props<T extends string> = {
  categories: readonly T[];
  active: T;
  onChange: (cat: T) => void;
};

export function CategoryFilter<T extends string>({
  categories,
  active,
  onChange,
}: Props<T>) {
  const [visibleCats, setVisibleCats] = useState<T[]>(
    categories.slice(0, VISIBLE_DESKTOP) as T[],
  );
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const moreCats = categories.filter((c) => !visibleCats.includes(c));

  const handleMoreSelect = (cat: T) => {
    setVisibleCats((prev) => {
      const next = [...prev] as T[];
      // Replace where the current active sits (skip index 0 = "All") or fall back to last slot
      const activeIdx = next.indexOf(active);
      const replaceIdx = activeIdx > 0 ? activeIdx : next.length - 1;
      next[replaceIdx] = cat;
      return next;
    });
    onChange(cat);
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const pillClass = (cat: T) =>
    `px-4 py-1.5 text-xs tracking-wider uppercase transition-all duration-200 border rounded-full whitespace-nowrap ${
      active === cat
        ? "bg-grey-900 text-grey-0 border-grey-900"
        : "bg-grey-0 text-grey-700 border-grey-200 hover:border-grey-900 hover:text-grey-900"
    }`;

  return (
    <>
      {/* Mobile: horizontal scroll with fading edges */}
      <div className="md:hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-linear-to-r from-grey-0 to-transparent z-10 pointer-events-none" />
        <div className="flex gap-2 overflow-x-auto no-scrollbar px-1 py-0.5">
          {categories.map((cat) => (
            <button key={cat} onClick={() => onChange(cat)} className={pillClass(cat)}>
              {cat}
            </button>
          ))}
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-linear-to-l from-grey-0 to-transparent z-10 pointer-events-none" />
      </div>

      {/* Desktop: first 5 visible + More dropdown */}
      <div className="hidden md:flex gap-2 items-center">
        {visibleCats.map((cat) => (
          <button key={cat} onClick={() => onChange(cat)} className={pillClass(cat)}>
            {cat}
          </button>
        ))}

        {moreCats.length > 0 && (
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownOpen((v) => !v)}
              className={`flex items-center gap-1 px-4 py-1.5 text-xs tracking-wider uppercase transition-all duration-200 border rounded-full ${
                moreCats.includes(active)
                  ? "bg-grey-900 text-grey-0 border-grey-900"
                  : "bg-grey-0 text-grey-700 border-grey-200 hover:border-grey-900 hover:text-grey-900"
              }`}
            >
              More
              <ChevronDown
                size={12}
                className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full mt-2 left-0 bg-grey-0 border border-grey-200 rounded-2xl overflow-hidden shadow-sm z-200 min-w-[160px]">
                {moreCats.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleMoreSelect(cat)}
                    className={`w-full text-left px-4 py-2.5 text-xs tracking-wider uppercase transition-colors ${
                      active === cat
                        ? "bg-grey-900 text-grey-0"
                        : "text-grey-700 hover:bg-grey-100 hover:text-grey-900"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
