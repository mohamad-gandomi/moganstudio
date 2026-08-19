"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigation } from "@/lib/site";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const trigger = triggerRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key !== "Tab" || !panelRef.current) return;
      const focusable = [...panelRef.current.querySelectorAll<HTMLElement>("a, button")];
      const first = focusable[0];
      const last = focusable.at(-1);
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      trigger?.focus({ preventScroll: true });
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? "Close menu" : "Open menu"}
        className="relative grid size-11 place-items-center rounded-[10px] border bg-white shadow-sm transition hover:border-neutral-400"
        onClick={() => setOpen((value) => !value)}
      >
        <Menu aria-hidden="true" className={`absolute size-5 transition ${open ? "scale-75 opacity-0" : "scale-100 opacity-100"}`} strokeWidth={1.7} />
        <X aria-hidden="true" className={`absolute size-5 transition ${open ? "scale-100 opacity-100" : "scale-75 opacity-0"}`} strokeWidth={1.7} />
      </button>

      {open && (
        <div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="absolute inset-x-0 top-full h-[calc(100dvh-72px)] w-full bg-black/20 p-3 backdrop-blur-[2px]"
          onMouseDown={(event) => { if (event.target === event.currentTarget) setOpen(false); }}
        >
          <div ref={panelRef} className="ml-auto flex h-full max-w-sm flex-col rounded-xl border bg-canvas p-5 shadow-[0_18px_50px_rgba(0,0,0,.16)]">
            <p className="eyebrow mb-3">Navigation</p>
            <nav aria-label="Mobile navigation links">
              {navigation.map((item, index) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="group flex items-center gap-4 border-b py-4">
                  <span className="w-6 text-xs text-muted">0{index + 1}</span>
                  <span className="flex-1 text-xl font-semibold tracking-[-.025em]">{item.label}</span>
                  <ArrowUpRight aria-hidden="true" className="size-4 text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" strokeWidth={1.7} />
                </a>
              ))}
            </nav>
            <div className="mt-auto pt-6">
              <a href="#contact" onClick={() => setOpen(false)} className="button-primary w-full">Start a Conversation <ArrowUpRight aria-hidden="true" className="size-4" /></a>
              <p className="mt-4 text-center text-xs leading-5 text-muted">Direct collaboration with Gandomi, Developer.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
