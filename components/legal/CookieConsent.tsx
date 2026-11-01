"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getStoredConsent, saveConsentPreferences } from "@/lib/analytics";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    const existing = getStoredConsent();
    if (!existing) {
      setVisible(true);
    } else {
      setAnalyticsEnabled(existing.analytics);
    }

    const handleOpenSettings = () => {
      const current = getStoredConsent();
      setAnalyticsEnabled(Boolean(current?.analytics));
      setShowSettings(true);
      setVisible(true);
    };

    window.addEventListener("bnavat:open-cookie-settings", handleOpenSettings);
    return () => {
      window.removeEventListener("bnavat:open-cookie-settings", handleOpenSettings);
    };
  }, []);

  if (!visible) return null;

  const handleAcceptAll = () => {
    saveConsentPreferences(true);
    setVisible(false);
    setShowSettings(false);
  };

  const handleRejectOptional = () => {
    saveConsentPreferences(false);
    setVisible(false);
    setShowSettings(false);
  };

  const handleSaveCustom = () => {
    saveConsentPreferences(analyticsEnabled);
    setVisible(false);
    setShowSettings(false);
  };

  return (
    <aside
      aria-label="Cookie consent preferences"
      className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-4xl border border-bnavat-border bg-bnavat-surface/95 p-6 shadow-2xl backdrop-blur-md"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 bg-bnavat-primary" />
            <h2 className="font-heading text-base font-semibold tracking-tight text-bnavat-primary">
              Your privacy, your choice.
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-bnavat-muted">
            We use essential technologies to make this website work. With your permission, we may
            also use analytics and similar technologies to understand site usage and improve the
            experience. You can accept optional cookies, reject them, or choose your preferences.
            You can change your choice at any time. Read our{" "}
            <Link
              href="/cookie-policy"
              className="text-bnavat-primary underline underline-offset-4 hover:text-bnavat-muted"
            >
              Cookie Policy
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy-policy"
              className="text-bnavat-primary underline underline-offset-4 hover:text-bnavat-muted"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 pt-2 md:pt-0">
          <button
            type="button"
            onClick={handleAcceptAll}
            className="border border-bnavat-primary bg-bnavat-primary px-4 py-2 font-mono text-xs uppercase tracking-widest text-bnavat-base transition hover:bg-transparent hover:text-bnavat-primary"
          >
            Accept optional cookies
          </button>
          <button
            type="button"
            onClick={handleRejectOptional}
            className="border border-bnavat-border bg-bnavat-base px-4 py-2 font-mono text-xs uppercase tracking-widest text-bnavat-primary transition hover:border-bnavat-primary"
          >
            Reject optional cookies
          </button>
          <button
            type="button"
            onClick={() => setShowSettings((prev) => !prev)}
            className="border border-transparent px-3 py-2 font-mono text-xs uppercase tracking-widest text-bnavat-muted transition hover:text-bnavat-primary"
          >
            Cookie settings
          </button>
        </div>
      </div>

      {showSettings && (
        <div className="mt-5 border-t border-bnavat-border pt-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="border border-bnavat-border bg-bnavat-base p-3.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-bnavat-primary">
                  Essential Technologies
                </span>
                <span className="font-mono text-[11px] uppercase text-bnavat-muted">
                  Always Active
                </span>
              </div>
              <p className="mt-1.5 text-xs text-bnavat-muted">
                Required for core security, navigation and storing your privacy consent state.
              </p>
            </div>

            <div className="border border-bnavat-border bg-bnavat-base p-3.5">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="bnavat-analytics-toggle"
                  className="font-mono text-xs uppercase tracking-wider text-bnavat-primary cursor-pointer"
                >
                  Optional Analytics
                </label>
                <input
                  id="bnavat-analytics-toggle"
                  type="checkbox"
                  checked={analyticsEnabled}
                  onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                  className="h-4 w-4 accent-[#F4F3EE] cursor-pointer"
                />
              </div>
              <p className="mt-1.5 text-xs text-bnavat-muted">
                Helps us measure aggregate traffic and interface performance. Never loaded without
                explicit opt-in.
              </p>
            </div>
          </div>

          <div className="mt-4 flex justify-end">
            <button
              type="button"
              onClick={handleSaveCustom}
              className="border border-bnavat-primary px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-bnavat-primary hover:bg-bnavat-primary hover:text-bnavat-base transition"
            >
              Save Preferences
            </button>
          </div>
        </div>
      )}
    </aside>
  );
}

