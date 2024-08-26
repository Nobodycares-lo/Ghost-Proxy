/*global UVServiceWorker,__uv$config*/
/*
 * Stock service worker script.
 * Users can provide their own sw.js if they need to extend the functionality of the service worker.
 * Ideally, this will be registered under the scope in uv.config.js so it will not need to be modified.
 * However, if a user changes the location of uv.bundle.js/uv.config.js or sw.js is not relative to them, they will need to modify this script locally.
 */
importScripts("/search/uv.bundle.js");
importScripts("/search/uv.config.js");
importScripts(__uv$config.sw || "/search/uv.sw.js");

const uv = new UVServiceWorker();

async function handleRequest(event) {
  if (uv.route(event)) {
    return await uv.fetch(event);
  }

  return await fetch(event.request);
}

self.addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event));
});
