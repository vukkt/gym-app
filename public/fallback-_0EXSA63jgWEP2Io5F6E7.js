(() => {
  'use strict';
  self.fallback = async (e) =>
    'document' === e.destination
      ? caches.match('/_offline.html', { ignoreSearch: !0 })
      : Response.error();
})();
