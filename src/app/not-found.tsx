import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#FBFBFA] px-6 py-24">
      <div className="max-w-md w-full text-center space-y-6 border border-[#E7E3DA] bg-[#FFFFFF] p-10">
        <div className="flex items-center justify-center gap-3">
          <span className="w-8 h-[1px] bg-[#9E7D2D]" />
          <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#9E7D2D]">
            404 · Page Not Found
          </span>
          <span className="w-8 h-[1px] bg-[#9E7D2D]" />
        </div>

        <h1 className="text-3xl sm:text-4xl font-serif text-[#141311]">
          Structure Not Found
        </h1>

        <p className="text-xs text-[#68635A] leading-relaxed font-sans">
          The requested architectural document or page does not exist or has been relocated within the practice archive.
        </p>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#141311] text-[#FBFBFA] text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#9E7D2D] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Return to Studio Home
          </Link>
        </div>
      </div>
    </div>
  );
}
