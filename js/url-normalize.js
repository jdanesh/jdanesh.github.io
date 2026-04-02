/**
 * GitHub Pages may keep /index.html in the visible URL. Replace with the
 * canonical directory path (/) without a full reload. Safe for crawlers:
 * initial HTML response still loads; canonical <link> in <head> is primary for SEO.
 */
(function () {
  var path = window.location.pathname;
  if (!path.endsWith("/index.html")) return;

  var without = path.slice(0, -"/index.html".length);
  var next = without === "" ? "/" : without.endsWith("/") ? without : without + "/";
  window.history.replaceState(null, "", next + window.location.search + window.location.hash);
})();
