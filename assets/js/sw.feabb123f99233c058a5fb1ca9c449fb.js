importScripts('https://cdn.ampproject.org/sw/amp-sw.js');
AMP_SW.init(
  {
    assetCachingOptions: [
      {
        regexp: /\.(?:png|jpe?g|woff2|woff|css|js)/,
        cachingStrategy: 'CACHE_FIRST',
      },
    ],
  }
);
