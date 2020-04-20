# prefetch-preload

## prefetch

This “Resource Hint” tells the browser that this is a resource that is probably needed for some navigation in the future.

Browsers usually fetch this resource when they are in idle state.

After fetched the resource sits ready in the HTTP cache to fulfill future requests.

Multiple prefetch hints queue up and are fetched while idling.

When leaving idle state while prefetching to browser may cancel any ongoing fetch (and put the partial response into cache, to be continued with Content-Range headers) and stop processing the prefetch queue.

To sum it up: Fetch while idle.

## preload

This “Resource Hint” tells the browser that this is a resource that is definitely needed for this navigation, but will be discovered later. Chrome even prints a warning when the resource isn’t used 3 seconds after load.

Browsers usually fetch this resource with medium priority (not layout-blocking).
To sum it up: Fetch like normal, just earlier discovered.

## links

- [<link rel=”prefetch/preload”> in webpack](https://medium.com/webpack/link-rel-prefetch-preload-in-webpack-51a52358f84c)
