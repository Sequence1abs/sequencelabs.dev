"use client";

import { useEffect, useState } from "react";
import FaultyTerminal from "./components/FaultyTerminal";

const terminalPropsDesktop = {
  scale: 2,
  gridMul: [2, 1] as [number, number],
  digitSize: 2,
  timeScale: 0.5,
  pause: false,
  scanlineIntensity: 0.5,
  glitchAmount: 1,
  flickerAmount: 1,
  noiseAmp: 1,
  chromaticAberration: 0,
  dither: 0,
  curvature: 0.1,
  tint: "#323432",
  mouseReact: true,
  mouseStrength: 0.5,
  pageLoadAnimation: true,
  brightness: 0.6,
} as const;

const terminalPropsMobile = {
  ...terminalPropsDesktop,
  scale: 1.45,
  dpr: 1,
  brightness: 0.62,
  mouseStrength: 0.55,
} as const;

function useResponsiveTerminalProps() {
  const [props, setProps] = useState<typeof terminalPropsDesktop | typeof terminalPropsMobile>(
    terminalPropsDesktop
  );

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639.98px)");
    const apply = () => {
      setProps(mq.matches ? terminalPropsMobile : terminalPropsDesktop);
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return props;
}

const socialLinks = [
  {
    href: "https://instagram.com",
    label: "Instagram",
    icon: (
      <svg
        width={20}
        height={20}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    href: "https://linkedin.com",
    label: "LinkedIn",
    icon: (
      <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: "https://tiktok.com",
    label: "TikTok",
    icon: (
      <svg width={19} height={19} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.71a8.35 8.35 0 0 0 4.76 1.49V6.75a4.79 4.79 0 0 1-1-.06z" />
      </svg>
    ),
  },
  {
    href: "https://facebook.com",
    label: "Facebook",
    icon: (
      <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
] as const;

export default function Home() {
  const terminalProps = useResponsiveTerminalProps();

  return (
    <div className="relative flex min-h-dvh flex-col overflow-hidden bg-black text-white">
      <div className="absolute inset-0 z-0">
        <FaultyTerminal {...terminalProps} />
      </div>

      <div className="relative z-10 flex min-h-dvh flex-col">
        <header
          className="pointer-events-none fixed top-0 right-0 left-0 z-30 flex justify-center pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] pt-[max(1.25rem,env(safe-area-inset-top))] sm:pl-[max(1.75rem,env(safe-area-inset-left))] sm:pr-[max(1.75rem,env(safe-area-inset-right))] sm:pt-[max(1.75rem,env(safe-area-inset-top))] md:pl-[max(2.25rem,env(safe-area-inset-left))] md:pr-[max(2.25rem,env(safe-area-inset-right))] md:pt-[max(2rem,env(safe-area-inset-top))]"
          aria-label="Sequence Labs"
        >
          <p className="svc-brand-pill pointer-events-auto">Sequence Labs</p>
        </header>

        <main className="flex flex-1 flex-col items-center justify-center px-4 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] pt-[max(5rem,env(safe-area-inset-top))] pb-52 sm:px-6 sm:pb-36 md:pl-[max(2.25rem,env(safe-area-inset-left))] md:pr-[max(2.25rem,env(safe-area-inset-right))] md:pt-24 md:pb-40">
          <div className="svc-hero-message relative z-10 mx-auto w-full max-w-full text-center">
            <h1 className="svc-hero-title text-balance">
              Sorry! We&apos;re under construction maintenance!
            </h1>
          </div>
        </main>

        <footer
          className="pointer-events-none fixed inset-x-0 bottom-0 z-20 flex w-full flex-col gap-5 pt-4 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:flex-row sm:items-end sm:justify-between sm:gap-8 sm:pt-2 sm:pb-[max(1.75rem,env(safe-area-inset-bottom))] md:pl-[max(2.25rem,env(safe-area-inset-left))] md:pr-[max(2.25rem,env(safe-area-inset-right))] md:pb-[max(2rem,env(safe-area-inset-bottom))]"
        >
          <div className="pointer-events-auto min-w-0 w-full max-w-none text-center sm:max-w-sm sm:text-left">
            <p className="svc-tagline">
              We&apos;re giving the site
              <br />
              a little makeover.
            </p>
            <div className="mt-3 space-y-2 sm:mt-4">
              <p className="svc-reveal">In the meantime, reach us at:</p>
              <a href="mailto:hello@sequencelabs.dev" className="svc-email inline-block max-w-full break-words">
                hello@sequencelabs.dev
              </a>
            </div>
          </div>

          <div className="svc-footer-social pointer-events-auto flex w-full shrink-0 flex-wrap items-center justify-center gap-2 sm:w-auto sm:justify-end sm:gap-3.5">
            {socialLinks.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="svc-social-link"
              >
                {icon}
              </a>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}
