"use client";

import { useState } from "react";

// ─── Nav ─────────────────────────────────────────────────────────────────────

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-[#e8e8e8]">
      <div className="mx-auto max-w-5xl px-6 h-14 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <span className="w-5 h-5 rounded-full bg-[#0a0a0a] flex items-center justify-center">
            <svg width="11" height="11" viewBox="0 0 9 9" fill="none" shapeRendering="crispEdges">
              {/* Lens outline */}
              <rect x="2" y="0" width="3" height="1" fill="white" />
              <rect x="1" y="1" width="1" height="1" fill="white" />
              <rect x="5" y="1" width="1" height="1" fill="white" />
              <rect x="0" y="2" width="1" height="3" fill="white" />
              <rect x="6" y="2" width="1" height="3" fill="white" />
              <rect x="1" y="5" width="1" height="1" fill="white" />
              <rect x="5" y="5" width="1" height="1" fill="white" />
              <rect x="2" y="6" width="3" height="1" fill="white" />
              {/* Handle */}
              <rect x="6" y="6" width="1" height="1" fill="white" />
              <rect x="7" y="7" width="1" height="1" fill="white" />
              <rect x="8" y="8" width="1" height="1" fill="white" />
              {/* Animated scan line */}
              <rect x="1" y="2" width="5" height="1" fill="white" fillOpacity="0.55">
                <animate attributeName="y" values="2;3;4;3;2" dur="2s" repeatCount="indefinite" calcMode="discrete" />
              </rect>
            </svg>
          </span>
          <span style={{ fontFamily: "var(--font-space-grotesk)" }} className="font-semibold text-sm tracking-tight">Reveal</span>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm text-[#6b6b6b]">
          <a href="#features" className="hover:text-[#0a0a0a] transition-colors">Features</a>
          <a href="#extension" className="hover:text-[#0a0a0a] transition-colors">Extension</a>
          <a href="#faq" className="hover:text-[#0a0a0a] transition-colors">FAQ</a>
        </nav>

        <a
          href="#waitlist"
          className="text-sm font-medium bg-[#0a0a0a] text-white px-4 py-2 rounded-lg hover:bg-[#333] transition-colors"
        >
          Join waitlist
        </a>
      </div>
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 text-center">
      <div className="mx-auto max-w-3xl">
        <a href="#faq" className="inline-flex items-center gap-1.5 text-xs text-[#2563eb] font-medium mb-8 hover:underline">
          Now in private beta &rarr;
        </a>

        <h1
          style={{ fontFamily: "var(--font-space-grotesk)" }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05] text-[#0a0a0a] mb-6"
        >
          Know what&rsquo;s true.<br />Right now.
        </h1>

        <p className="text-lg text-[#6b6b6b] max-w-lg mx-auto leading-relaxed mb-10">
          Reveal listens to debates, broadcasts, and anything you read online &mdash; and flags misleading claims before the conversation moves on.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#waitlist"
            className="inline-flex items-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-medium px-5 py-2.5 rounded-lg text-sm transition-colors"
          >
            Reserve a spot
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 text-sm text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors"
          >
            See how it works &darr;
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-2xl mt-16">
        <div className="border border-[#e8e8e8] rounded-xl overflow-hidden shadow-sm bg-white text-left">
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[#e8e8e8] bg-[#fafafa]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#e8e8e8]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#e8e8e8]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#e8e8e8]" />
            <span className="ml-3 flex items-center gap-1.5 text-[11px] text-[#6b6b6b]">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              LIVE &mdash; Reveal is listening
            </span>
          </div>

          <div className="divide-y divide-[#f0f0f0]">
            <div className="px-5 py-3.5">
              <span className="text-[10px] font-semibold text-[#9ca3af] uppercase tracking-widest block mb-1">Speaker A</span>
              <p className="text-sm text-[#374151] leading-relaxed">
                &ldquo;We&rsquo;ve brought inflation down to its lowest point in over thirty years.&rdquo;
              </p>
            </div>

            <div className="px-5 py-3.5 bg-[#fff8f8]">
              <span className="text-[10px] font-semibold text-[#9ca3af] uppercase tracking-widest block mb-1">Speaker B</span>
              <p className="text-sm text-[#374151] leading-relaxed">
                &ldquo;Crime in this country has{" "}
                <span className="bg-red-100 text-red-700 px-1 rounded underline decoration-red-300">
                  doubled since 2020
                </span>
                &rdquo; &mdash; we need stronger measures immediately.&rdquo;
              </p>
              <div className="mt-2.5 flex items-start gap-2 bg-white border border-red-100 rounded-lg px-3 py-2.5">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="shrink-0 mt-0.5">
                  <circle cx="6.5" cy="6.5" r="6" fill="#fee2e2" stroke="#fca5a5" strokeWidth="0.8" />
                  <path d="M6.5 4v3M6.5 8.5v.5" stroke="#ef4444" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                <div>
                  <p className="text-[11px] font-semibold text-red-600">Inaccurate</p>
                  <p className="text-[11px] text-[#6b6b6b] mt-0.5">FBI Uniform Crime Report (2024) shows violent crime down 5% since 2020, not doubled.</p>
                  <a href="#" className="text-[10px] text-[#2563eb] mt-1 inline-block hover:underline">Source &rarr;</a>
                </div>
              </div>
            </div>

            <div className="px-5 py-3.5">
              <span className="text-[10px] font-semibold text-[#9ca3af] uppercase tracking-widest block mb-1">Speaker A</span>
              <p className="text-sm text-[#374151] leading-relaxed">
                &ldquo;Our jobs programme created 4.2 million new positions last quarter.&rdquo;
              </p>
              <div className="mt-2.5 flex items-start gap-2 bg-white border border-red-100 rounded-lg px-3 py-2.5">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="shrink-0 mt-0.5">
                  <circle cx="6.5" cy="6.5" r="6" fill="#fee2e2" stroke="#fca5a5" strokeWidth="0.8" />
                  <path d="M6.5 4v3M6.5 8.5v.5" stroke="#ef4444" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                <div>
                  <p className="text-[11px] font-semibold text-red-600">Overstated</p>
                  <p className="text-[11px] text-[#6b6b6b] mt-0.5">Bureau of Labor Statistics reports 2.1M jobs added &mdash; the claim is overstated by 100%.</p>
                  <a href="#" className="text-[10px] text-[#2563eb] mt-1 inline-block hover:underline">Source &rarr;</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Social proof ─────────────────────────────────────────────────────────────

const LOGOS = ["The Guardian", "Reuters", "PolitiFact", "FullFact", "Snopes", "AP News"];

function SocialProof() {
  return (
    <section className="py-12 border-t border-[#e8e8e8]">
      <p className="text-center text-xs text-[#9ca3af] uppercase tracking-widest mb-8">
        Trusted by early partners
      </p>
      <div className="mx-auto max-w-4xl px-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
        {LOGOS.map((name) => (
          <span key={name} className="text-sm font-semibold text-[#c4c4c4]">
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}

// ─── Features ─────────────────────────────────────────────────────────────────

function Features() {
  const features = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <rect x="7" y="2" width="8" height="11" rx="4" stroke="#0a0a0a" strokeWidth="1.5" />
          <path d="M3 11a8 8 0 0016 0M11 19v2" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      title: "Live transcription",
      body: "Sub-second speech-to-text with speaker attribution. Works on debates, press conferences, and live broadcasts.",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <circle cx="10" cy="10" r="7" stroke="#0a0a0a" strokeWidth="1.5" />
          <path d="M15.5 15.5l4 4" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M7 10h6M10 7v6" stroke="#0a0a0a" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      ),
      title: "Claim detection",
      body: "Every assertion is broken into discrete claims and checked against live government data, academic sources, and verified databases.",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <rect x="3" y="5" width="16" height="12" rx="2" stroke="#0a0a0a" strokeWidth="1.5" />
          <path d="M7 10h8M7 13h5" stroke="#0a0a0a" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      ),
      title: "Chrome extension",
      body: "Highlights suspicious sentences on any article or social post. Hover to see the evidence without leaving the page.",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <rect x="2" y="2" width="18" height="18" rx="3" stroke="#0a0a0a" strokeWidth="1.5" strokeDasharray="3 2" />
          <rect x="6" y="6" width="10" height="10" rx="2" fill="#f0f0f0" stroke="#0a0a0a" strokeWidth="1.3" />
          <path d="M9 11l2 2 3-3" stroke="#0a0a0a" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "App overlay",
      body: "A discreet overlay that sits on top of any app. Silent until it finds something worth surfacing.",
    },
  ];

  return (
    <section id="features" className="py-20 px-6 border-t border-[#e8e8e8]">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12">
          <h2
            style={{ fontFamily: "var(--font-space-grotesk)" }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0a0a0a]"
          >
            Everything you need to stay informed.
          </h2>
          <p className="mt-3 text-[#6b6b6b] text-base max-w-md">
            Reveal works across whatever you&rsquo;re already doing &mdash; no new habits required.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-[#f9f9f9] rounded-xl p-6 border border-[#efefef]"
            >
              <div className="mb-4">{f.icon}</div>
              <h3
                style={{ fontFamily: "var(--font-space-grotesk)" }}
                className="font-semibold text-[#0a0a0a] mb-1.5"
              >
                {f.title}
              </h3>
              <p className="text-sm text-[#6b6b6b] leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Extension ────────────────────────────────────────────────────────────────

function ExtensionSection() {
  return (
    <section id="extension" className="py-20 px-6 border-t border-[#e8e8e8]">
      <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-widest mb-3">Chrome extension</p>
          <h2
            style={{ fontFamily: "var(--font-space-grotesk)" }}
            className="text-3xl font-bold tracking-tight text-[#0a0a0a] mb-4"
          >
            Fact-check the whole web.
          </h2>
          <p className="text-[#6b6b6b] leading-relaxed mb-8">
            The Reveal extension runs silently in the background. When you read an article or watch a video, it highlights anything worth questioning and explains why &mdash; right where you are.
          </p>
          <a
            href="#waitlist"
            className="inline-flex items-center gap-2 bg-[#0a0a0a] text-white font-medium px-5 py-2.5 rounded-lg text-sm hover:bg-[#333] transition-colors"
          >
            Get early access
          </a>
          <p className="text-xs text-[#9ca3af] mt-3">Chrome extension &middot; coming soon</p>
        </div>

        <div className="border border-[#e8e8e8] rounded-xl overflow-hidden shadow-sm bg-white text-sm">
          <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-[#e8e8e8] bg-[#fafafa]">
            <span className="w-2 h-2 rounded-full bg-[#e8e8e8]" />
            <span className="w-2 h-2 rounded-full bg-[#e8e8e8]" />
            <span className="w-2 h-2 rounded-full bg-[#e8e8e8]" />
            <span className="ml-3 text-[11px] text-[#9ca3af]">bbc.com/news/politics</span>
          </div>

          <div className="p-5">
            <div className="text-[11px] font-semibold text-[#9ca3af] uppercase tracking-widest mb-3">Article text</div>
            <p className="text-sm text-[#374151] leading-relaxed">
              The minister claimed the new policy has{" "}
              <span className="bg-amber-50 border-b-2 border-amber-400 text-[#0a0a0a]">
                reduced waiting times by 40%
              </span>
              {" "}across all NHS trusts, citing figures from an internal audit.
            </p>

            <div className="mt-4 border border-[#e8e8e8] rounded-lg p-3.5 bg-white shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span className="text-[10px] font-semibold text-[#6b6b6b] uppercase tracking-wider">Reveal</span>
              </div>
              <p className="text-[11px] font-semibold text-[#0a0a0a] mb-1">Partially supported</p>
              <p className="text-[11px] text-[#6b6b6b] leading-snug">NHS England data shows 14% average reduction. The 40% figure appears in a single trust, not system-wide.</p>
              <a href="#" className="text-[10px] text-[#2563eb] mt-1.5 inline-block hover:underline">NHS England report &rarr;</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Trust ────────────────────────────────────────────────────────────────────

function Trust() {
  const items = [
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M9 2L3 5v5c0 3.5 2.5 6.5 6 7.5 3.5-1 6-4 6-7.5V5L9 2z" stroke="#0a0a0a" strokeWidth="1.4" strokeLinejoin="round" />
          <path d="M6 9l2 2 4-4" stroke="#0a0a0a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "No audio stored",
      body: "Transcription happens on-device or in an ephemeral stream. Your words are never saved to our servers.",
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect x="3" y="8" width="12" height="8" rx="2" stroke="#0a0a0a" strokeWidth="1.4" />
          <path d="M6 8V5.5a3 3 0 016 0V8" stroke="#0a0a0a" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      ),
      title: "Open methodology",
      body: "Our fact-checking sources and scoring logic are publicly documented. You can see exactly how a verdict is reached.",
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <circle cx="9" cy="9" r="7" stroke="#0a0a0a" strokeWidth="1.4" />
          <path d="M9 5v4l2.5 2.5" stroke="#0a0a0a" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      ),
      title: "Under 2 seconds",
      body: "Claims are verified and surfaced within two seconds of being spoken. Fast enough to matter.",
    },
  ];

  return (
    <section className="py-20 px-6 border-t border-[#e8e8e8] bg-[#fafafa]">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center gap-3 mb-10">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 2L3 6v6c0 3.5 3 6.5 7 7.5 4-1 7-4 7-7.5V6L10 2z" stroke="#2563eb" strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
          <h2
            style={{ fontFamily: "var(--font-space-grotesk)" }}
            className="text-3xl font-bold tracking-tight text-[#0a0a0a]"
          >
            Privacy you can verify.
          </h2>
        </div>

        <div className="divide-y divide-[#e8e8e8]">
          {items.map((item) => (
            <div key={item.title} className="flex items-start gap-5 py-5">
              <div className="w-8 h-8 rounded-lg bg-white border border-[#e8e8e8] flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div>
                <p
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                  className="font-semibold text-[#0a0a0a] mb-0.5"
                >
                  {item.title}
                </p>
                <p className="text-sm text-[#6b6b6b] leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

const FAQS = [
  { q: "How fast is the fact-checking?", a: "TBC" },
  { q: "What sources does Reveal use?", a: "TBC" },
  { q: "Does it work with any language?", a: "TBC" },
  { q: "Will there be a free tier?", a: "TBC" },
  { q: "Is my audio stored anywhere?", a: "TBC" },
  { q: "When does Reveal launch?", a: "TBC" },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-6 border-t border-[#e8e8e8]">
      <div className="mx-auto max-w-2xl">
        <h2
          style={{ fontFamily: "var(--font-space-grotesk)" }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0a0a0a] mb-2 text-center"
        >
          Questions &amp; answers
        </h2>
        <p className="text-[#9ca3af] text-sm text-center mb-12">Everything worth knowing before you sign up.</p>

        <div className="divide-y divide-[#e8e8e8]">
          {FAQS.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left flex items-center justify-between gap-4 text-[#0a0a0a] hover:text-[#2563eb] transition-colors"
                style={{ paddingTop: "1.125rem", paddingBottom: "1.125rem" }}
              >
                <span className="font-medium text-sm">{faq.q}</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  style={{ transform: open === i ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}
                  className="shrink-0 text-[#9ca3af]"
                >
                  <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {open === i && (
                <p className="pb-4 text-sm text-[#6b6b6b] leading-relaxed pr-6">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Waitlist ─────────────────────────────────────────────────────────────────

function Waitlist() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.status === 409) {
        setError("You're already on the list.");
      } else if (!res.ok) {
        setError("Something went wrong. Try again.");
      } else {
        setDone(true);
      }
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="waitlist" className="py-24 px-6 border-t border-[#e8e8e8] text-center">
      <div className="mx-auto max-w-md">
        <h2
          style={{ fontFamily: "var(--font-space-grotesk)" }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0a0a0a] mb-3"
        >
          Be first in.
        </h2>
        <p className="text-[#6b6b6b] text-base mb-8">
          Early supporters get access before anyone else. We&rsquo;ll reach out before the public launch.
        </p>

        {done ? (
          <div className="flex items-center justify-center gap-2 text-sm font-medium text-[#0a0a0a]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2.5 8.5l3.5 3.5 7-7" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            You&rsquo;re on the list &mdash; we&rsquo;ll be in touch.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 border border-[#e8e8e8] bg-white text-[#0a0a0a] placeholder:text-[#9ca3af] text-sm px-4 py-2.5 rounded-lg outline-none focus:border-[#2563eb] transition-colors"
            />
            <button
              type="submit"
              disabled={loading}
              className="shrink-0 bg-[#2563eb] hover:bg-[#1d4ed8] disabled:opacity-50 text-white font-medium px-5 py-2.5 rounded-lg text-sm transition-colors"
            >
              {loading ? "Saving…" : "Reserve a spot"}
            </button>
          </form>
        )}
        {error && <p className="text-xs text-red-500 mt-3">{error}</p>}
        {!error && <p className="text-xs text-[#c4c4c4] mt-3">No spam. Unsubscribe at any time.</p>}
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t border-[#e8e8e8] py-8 px-6">
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full bg-[#0a0a0a] flex items-center justify-center">
            <svg width="9" height="9" viewBox="0 0 9 9" fill="none" shapeRendering="crispEdges">
              <rect x="2" y="0" width="3" height="1" fill="white" />
              <rect x="1" y="1" width="1" height="1" fill="white" />
              <rect x="5" y="1" width="1" height="1" fill="white" />
              <rect x="0" y="2" width="1" height="3" fill="white" />
              <rect x="6" y="2" width="1" height="3" fill="white" />
              <rect x="1" y="5" width="1" height="1" fill="white" />
              <rect x="5" y="5" width="1" height="1" fill="white" />
              <rect x="2" y="6" width="3" height="1" fill="white" />
              <rect x="6" y="6" width="1" height="1" fill="white" />
              <rect x="7" y="7" width="1" height="1" fill="white" />
              <rect x="8" y="8" width="1" height="1" fill="white" />
              <rect x="1" y="2" width="5" height="1" fill="white" fillOpacity="0.55">
                <animate attributeName="y" values="2;3;4;3;2" dur="2s" repeatCount="indefinite" calcMode="discrete" />
              </rect>
            </svg>
          </span>
          <span style={{ fontFamily: "var(--font-space-grotesk)" }} className="text-xs font-semibold">Reveal</span>
        </div>
        <nav className="flex items-center gap-5 text-xs text-[#9ca3af]">
          <a href="#features" className="hover:text-[#6b6b6b] transition-colors">Features</a>
          <a href="#extension" className="hover:text-[#6b6b6b] transition-colors">Extension</a>
          <a href="#faq" className="hover:text-[#6b6b6b] transition-colors">FAQ</a>
          <a href="#waitlist" className="hover:text-[#6b6b6b] transition-colors">Waitlist</a>
        </nav>
        <p className="text-[11px] text-[#c4c4c4]">&copy; {new Date().getFullYear()} Reveal</p>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <ExtensionSection />
        <Trust />
        <FAQ />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
