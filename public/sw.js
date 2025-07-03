if (!self.define) {
  let e,
    s = {};
  const a = (a, n) => (
    (a = new URL(a + '.js', n).href),
    s[a] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script');
          ((e.src = a), (e.onload = s), document.head.appendChild(e));
        } else ((e = a), importScripts(a), s());
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, i) => {
    const t =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (s[t]) return;
    let c = {};
    const r = (e) => a(e, t),
      o = { module: { uri: t }, exports: c, require: r };
    s[t] = Promise.all(n.map((e) => o[e] || r(e))).then((e) => (i(...e), c));
  };
}
define(['./workbox-e9849328'], function (e) {
  'use strict';
  (importScripts('fallback-_0EXSA63jgWEP2Io5F6E7.js'),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/app-build-manifest.json',
          revision: '3302b3156edad4e8ea966f0a409b096c',
        },
        {
          url: '/_next/static/_0EXSA63jgWEP2Io5F6E7/_buildManifest.js',
          revision: 'bc23970669075938093e7230fc43845a',
        },
        {
          url: '/_next/static/_0EXSA63jgWEP2Io5F6E7/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        {
          url: '/_next/static/chunks/235.145675ee8340c78e.js',
          revision: '145675ee8340c78e',
        },
        {
          url: '/_next/static/chunks/302-684ef561f01bb8ea.js',
          revision: '_0EXSA63jgWEP2Io5F6E7',
        },
        {
          url: '/_next/static/chunks/4b4de6ea-665a875f98ebaaa5.js',
          revision: '_0EXSA63jgWEP2Io5F6E7',
        },
        {
          url: '/_next/static/chunks/529-4fe3be35d0c3289e.js',
          revision: '_0EXSA63jgWEP2Io5F6E7',
        },
        {
          url: '/_next/static/chunks/591-ecc4ed6dc3d54129.js',
          revision: '_0EXSA63jgWEP2Io5F6E7',
        },
        {
          url: '/_next/static/chunks/app/_not-found/page-bc22b42c133387aa.js',
          revision: '_0EXSA63jgWEP2Io5F6E7',
        },
        {
          url: '/_next/static/chunks/app/api/contact/route-533555a9862cbbcd.js',
          revision: '_0EXSA63jgWEP2Io5F6E7',
        },
        {
          url: '/_next/static/chunks/app/book/page-a4345a0bac02d741.js',
          revision: '_0EXSA63jgWEP2Io5F6E7',
        },
        {
          url: '/_next/static/chunks/app/error-8fd3a640d659fd30.js',
          revision: '_0EXSA63jgWEP2Io5F6E7',
        },
        {
          url: '/_next/static/chunks/app/layout-c97f30c777fda19a.js',
          revision: '_0EXSA63jgWEP2Io5F6E7',
        },
        {
          url: '/_next/static/chunks/app/not-found-41b9cd3c64d67114.js',
          revision: '_0EXSA63jgWEP2Io5F6E7',
        },
        {
          url: '/_next/static/chunks/app/page-4137143f73c597a1.js',
          revision: '_0EXSA63jgWEP2Io5F6E7',
        },
        {
          url: '/_next/static/chunks/app/robots.txt/route-a47551f1aa20dfcc.js',
          revision: '_0EXSA63jgWEP2Io5F6E7',
        },
        {
          url: '/_next/static/chunks/app/sitemap.xml/route-360ee376842dd13a.js',
          revision: '_0EXSA63jgWEP2Io5F6E7',
        },
        {
          url: '/_next/static/chunks/framework-c3df2e8db6888bb1.js',
          revision: '_0EXSA63jgWEP2Io5F6E7',
        },
        {
          url: '/_next/static/chunks/main-app-6c03d873d98ded03.js',
          revision: '_0EXSA63jgWEP2Io5F6E7',
        },
        {
          url: '/_next/static/chunks/main-f1ca769a9a4f5afc.js',
          revision: '_0EXSA63jgWEP2Io5F6E7',
        },
        {
          url: '/_next/static/chunks/pages/_app-b5af5fd44550645f.js',
          revision: '_0EXSA63jgWEP2Io5F6E7',
        },
        {
          url: '/_next/static/chunks/pages/_error-4626c70afe6cfa85.js',
          revision: '_0EXSA63jgWEP2Io5F6E7',
        },
        {
          url: '/_next/static/chunks/polyfills-42372ed130431b0a.js',
          revision: '846118c33b2c0e922d7b3a7676f81f6f',
        },
        {
          url: '/_next/static/chunks/webpack-11e35d9eea38ca08.js',
          revision: '_0EXSA63jgWEP2Io5F6E7',
        },
        {
          url: '/_next/static/css/6fcc604c2d944646.css',
          revision: '6fcc604c2d944646',
        },
        {
          url: '/_next/static/media/26a46d62cd723877-s.woff2',
          revision: 'befd9c0fdfa3d8a645d5f95717ed6420',
        },
        {
          url: '/_next/static/media/55c55f0601d81cf3-s.woff2',
          revision: '43828e14271c77b87e3ed582dbff9f74',
        },
        {
          url: '/_next/static/media/581909926a08bbc8-s.woff2',
          revision: 'f0b86e7c24f455280b8df606b89af891',
        },
        {
          url: '/_next/static/media/8e9860b6e62d6359-s.woff2',
          revision: '01ba6c2a184b8cba08b0d57167664d75',
        },
        {
          url: '/_next/static/media/97e0cb1ae144a2a9-s.woff2',
          revision: 'e360c61c5bd8d90639fd4503c829c2dc',
        },
        {
          url: '/_next/static/media/df0a9ae256c0569c-s.woff2',
          revision: 'd54db44de5ccb18886ece2fda72bdfe0',
        },
        {
          url: '/_next/static/media/e4af272ccee01ff0-s.p.woff2',
          revision: '65850a373e258f1c897a2b3d75eb74de',
        },
        { url: '/_offline.html', revision: '856eb2e235feecc4ce39022772b3f325' },
        {
          url: '/classes/hiit.jpg',
          revision: '53e1a5025e032464d43d7d7873e5c708',
        },
        {
          url: '/classes/power.jpg',
          revision: '9c1c2cbb9706a9a7767fe8371b712b6d',
        },
        {
          url: '/classes/yoga.jpg',
          revision: '9db2e30d063f4fefbced709485ddce06',
        },
        { url: '/favicon.ico', revision: 'cd5e282e6af923c74392a5fb4bfdd9f0' },
        {
          url: '/icons/icon-192.png',
          revision: 'f20644758ef32340777d33e3e5cc8c26',
        },
        {
          url: '/icons/icon-512.png',
          revision: 'f20644758ef32340777d33e3e5cc8c26',
        },
        { url: '/robots.txt', revision: '70ed0778f53ed05280e615261010c623' },
        {
          url: '/site.webmanifest',
          revision: '5ecfd013eeffcfb86a9c81cb40c84e82',
        },
        { url: '/sitemap.xml', revision: '4a638701beca6202e28bdea78e1c9740' },
        { url: '/team/maja.jpg', revision: '1fd76c5e8c284e115607587caa447835' },
        {
          url: '/team/milan.jpg',
          revision: '8b0a108e40887fa55a15ed8e2653abd7',
        },
        {
          url: '/team/nikola.jpg',
          revision: '355a6634adb0cc38d13865f3c93e599a',
        },
        {
          url: '/testimonials/ana.jpg',
          revision: 'f4fafaf122d00f0775aa586b8a061d0b',
        },
        {
          url: '/testimonials/jelena.jpg',
          revision: 'f40e9e6ef38d48d522956106dd3f26bf',
        },
        {
          url: '/testimonials/luka.jpg',
          revision: 'dc5161dd5e36744d184e0b98e97d31ba',
        },
        {
          url: '/testimonials/marko.jpg',
          revision: 'b907dc756c5ac066437b40a2dd900187',
        },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: a,
              state: n,
            }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: s.headers,
                  })
                : s,
          },
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ));
});
