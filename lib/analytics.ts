export type ConsentState = "accepted" | "rejected" | "custom" | null;

const CONSENT_STORAGE_KEY = "bnavat_cookie_consent_v1";

export interface ConsentPreferences {
  essential: true;
  analytics: boolean;
  timestamp: string;
}

export function getStoredConsent(): ConsentPreferences | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as ConsentPreferences;
  } catch {
    return null;
  }
}

export function saveConsentPreferences(analyticsAllowed: boolean): ConsentPreferences {
  const payload: ConsentPreferences = {
    essential: true,
    analytics: analyticsAllowed,
    timestamp: new Date().toISOString(),
  };
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(payload));
      window.dispatchEvent(new CustomEvent("bnavat:consent-updated", { detail: payload }));
    } catch {
      // Ignore storage quota errors
    }
  }
  return payload;
}

export function trackEvent(eventName: string, metadata?: Record<string, string | number | boolean>) {
  const consent = getStoredConsent();
  if (!consent?.analytics) {
    return;
  }
  if (process.env.NODE_ENV === "development") {
    console.info(`[BNAVAT Telemetry] ${eventName}`, metadata || {});
  }
}
