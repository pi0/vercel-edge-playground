Reproduction for vercel-edge global issue: https://github.com/pi0/vercel-edge-reproduction

# Vercel-edge `globalThis` issue reproduction

This example copies the expected build output format from `vercel_out` to `.vercel` as build step.

You can deploy by running `vercel` command in clonned repository.

Check the [handler](./vercel_out/output/functions/__nitro.func/index.mjs).

Logs:

```
ReferenceError: test is not defined
    at (index.mjs:3:36)
```

## Other runtimes

It is worth to note that, usage of `globalThis` works in other runtimes:

- Node.js: [src](./node.mjs) - Works as expected with `node ./node.mjs`
- Cloudflare Workers: [src](./cf-worker.mjs) - Works https://globalthis-works.pi0.workers.dev/
- Deno Deploy: [src](./deno-deploy.ts) - Works https://globalthis-works.deno.dev/
