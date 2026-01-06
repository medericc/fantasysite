self.addEventListener("install", () => {
  self.skipWaiting()
})

self.addEventListener("fetch", () => {
  // noop – nécessaire juste pour rendre la PWA installable
})
