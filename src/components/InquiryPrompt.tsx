"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Loader2, Send, X } from "lucide-react";

const DISMISSED_KEY = "redefine-inquiry-prompt-dismissed";

export default function InquiryPrompt() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  useEffect(() => {
    if (pathname === "/contact" || sessionStorage.getItem(DISMISSED_KEY)) return;
    const onScroll = () => setScrolled(window.scrollY > Math.max(180, window.innerHeight * 0.25));
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    if (!scrolled || pathname === "/contact" || sessionStorage.getItem(DISMISSED_KEY)) return;
    const timer = window.setTimeout(() => setOpen(true), 10_000);
    return () => window.clearTimeout(timer);
  }, [pathname, scrolled]);

  useEffect(() => {
    if (!open) return;
    const escape = (event: KeyboardEvent) => { if (event.key === "Escape") close(); };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", escape);
    return () => { document.body.style.overflow = previousOverflow; window.removeEventListener("keydown", escape); };
  // close is deliberately stable enough for the life of this modal state.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  function close() { sessionStorage.setItem(DISMISSED_KEY, "true"); setOpen(false); }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/inquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...Object.fromEntries(form), formType: "Popup enquiry", page: window.location.pathname }) });
      if (!response.ok) throw new Error("Unable to send");
      setStatus("sent");
      sessionStorage.setItem(DISMISSED_KEY, "true");
    } catch { setStatus("error"); }
  }

  if (!open) return null;
  return <div className="fixed inset-0 z-[70] grid place-items-center bg-[#141311]/65 px-4 py-6 backdrop-blur-sm" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) close(); }}>
    <section role="dialog" aria-modal="true" aria-labelledby="inquiry-prompt-title" className="relative w-full max-w-lg bg-[#FBFBFA] p-6 shadow-2xl sm:p-8">
      <button type="button" onClick={close} aria-label="Close enquiry form" className="absolute right-4 top-4 grid h-10 w-10 place-items-center text-[#5E5950] transition-colors hover:bg-[#EEE9DF] hover:text-[#141311]"><X className="h-5 w-5" /></button>
      {status === "sent" ? <div className="py-8 pr-6"><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9E7D2D]">Thank you</p><h2 id="inquiry-prompt-title" className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#141311]">Your enquiry has been received.</h2><p className="mt-3 text-sm leading-6 text-[#5E5950]">Our studio will be in touch shortly.</p><button type="button" onClick={close} className="mt-7 bg-[#141311] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#9E7D2D]">Close</button></div> : <>
        <p className="pr-10 text-[10px] font-bold uppercase tracking-[0.2em] text-[#9E7D2D]">Start a conversation</p>
        <h2 id="inquiry-prompt-title" className="mt-3 max-w-sm text-2xl font-semibold tracking-[-0.035em] text-[#141311] sm:text-3xl">Planning a project?</h2>
        <p className="mt-3 max-w-md text-sm leading-6 text-[#5E5950]">Tell us a little about it and the right member of our team will respond.</p>
        <form onSubmit={submit} className="mt-6 grid gap-4">
          <label className="grid gap-1.5 text-xs font-semibold text-[#403D37]">Name<input required name="name" autoComplete="name" className="h-11 border border-[#DCD6CA] bg-white px-3 text-sm font-normal outline-none transition-colors focus:border-[#9E7D2D]" /></label>
          <div className="grid gap-4 sm:grid-cols-2"><label className="grid gap-1.5 text-xs font-semibold text-[#403D37]">Email<input required type="email" name="email" autoComplete="email" className="h-11 border border-[#DCD6CA] bg-white px-3 text-sm font-normal outline-none transition-colors focus:border-[#9E7D2D]" /></label><label className="grid gap-1.5 text-xs font-semibold text-[#403D37]">Phone<input name="phone" autoComplete="tel" className="h-11 border border-[#DCD6CA] bg-white px-3 text-sm font-normal outline-none transition-colors focus:border-[#9E7D2D]" /></label></div>
          <label className="grid gap-1.5 text-xs font-semibold text-[#403D37]">Your project<textarea required name="message" rows={3} placeholder="Project type, location and scale" className="resize-y border border-[#DCD6CA] bg-white p-3 text-sm font-normal outline-none transition-colors focus:border-[#9E7D2D]" /></label>
          <input type="hidden" name="service" value="Website enquiry prompt" />
          {status === "error" && <p role="alert" className="text-sm text-[#A83A2B]">We could not send this right now. Please use the full enquiry form.</p>}
          <div className="mt-1 flex flex-wrap items-center gap-4"><button disabled={status === "sending"} type="submit" className="inline-flex h-11 items-center gap-2 bg-[#141311] px-5 text-[11px] font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#9E7D2D] disabled:opacity-60">{status === "sending" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-3.5 w-3.5" />} {status === "sending" ? "Sending" : "Send enquiry"}</button><Link href="/contact" onClick={close} className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#5E5950] underline underline-offset-4 hover:text-[#9E7D2D]">Full enquiry form</Link></div>
        </form>
      </>}
    </section>
  </div>;
}
