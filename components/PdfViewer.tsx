"use client";
import { useState } from "react";

interface Props {
  url: string;
  title: string;
}

export default function PdfViewer({ url, title }: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <div className="flex gap-3 mb-4">
        <a href={url} target="_blank" rel="noopener noreferrer"
          className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-5 py-2 rounded-lg text-sm transition">
          Download PDF ↓
        </a>
        <a href={url} target="_blank" rel="noopener noreferrer"
          className="border border-slate-200 text-slate-600 hover:border-slate-400 px-5 py-2 rounded-lg text-sm transition">
          Open in new tab ↗
        </a>
      </div>

      {!loaded ? (
        <button
          onClick={() => setLoaded(true)}
          className="w-full border-2 border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center gap-3 text-slate-500 hover:border-amber-400 hover:text-amber-600 transition cursor-pointer bg-slate-50 hover:bg-amber-50"
          style={{ minHeight: 320 }}
        >
          <svg className="w-12 h-12 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
          <span className="font-semibold text-base">Click to view PDF in browser</span>
          <span className="text-xs text-slate-400">Opens inline via Google Docs Viewer</span>
        </button>
      ) : (
        <iframe
          src={`https://docs.google.com/viewer?url=${encodeURIComponent(url)}&embedded=true`}
          className="w-full border border-slate-200 rounded-xl"
          style={{ height: "80vh", minHeight: 600 }}
          title={title}
        />
      )}
    </>
  );
}
