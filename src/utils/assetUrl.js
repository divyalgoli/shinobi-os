/**
 * Resolves static asset paths (like /images/characters/...) to work correctly
 * across all hosting environments (GitHub Pages subdirectory, Netlify, localhost).
 *
 * @param {string|null|undefined} path - The raw asset path
 * @returns {string|null} - The fully-qualified or environment-relative URL
 */
export function resolveAssetUrl(path) {
  if (!path || typeof path !== "string") return null;

  // External URLs or data URIs remain untouched
  if (/^(?:https?:)?\/\//i.test(path) || path.startsWith("data:")) {
    return path;
  }

  // Strip leading slashes and relative indicators
  const cleanPath = path.replace(/^(\.\/|\/)+/, "");

  // Determine base path at runtime
  let base = import.meta.env.BASE_URL || "./";

  if (typeof window !== "undefined") {
    const pathname = window.location.pathname || "";
    // If hosted on GitHub Pages (e.g. /shinobi-os/)
    if (pathname.includes("/shinobi-os")) {
      base = "/shinobi-os/";
    }
  }

  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  return `${normalizedBase}${cleanPath}`;
}

export default resolveAssetUrl;
