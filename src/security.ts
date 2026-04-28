// Security bridge for Trusted Types violations
if (typeof window !== "undefined" && window.trustedTypes && window.trustedTypes.createPolicy) {
  if (!window.trustedTypes.defaultPolicy) {
    try {
      window.trustedTypes.createPolicy("default", {
        createHTML: (s) => s,
        createScript: (s) => s,
        createScriptURL: (s) => s,
      });
    } catch (e) {
      console.error("Trusted Types policy creation failed:", e);
    }
  }
}

// Redirect to HTTPS
if (typeof window !== "undefined" && window.location.protocol !== "https:" && window.location.hostname !== "localhost" && window.location.hostname !== "127.0.0.1") {
  window.location.replace("https://" + window.location.host + window.location.pathname + window.location.search);
}

export {};
