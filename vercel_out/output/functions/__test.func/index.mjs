const wasmModule = await import('./wasm/sum.wasm').then(r => r.default)
const { exports } = await WebAssembly.instantiate(wasmModule)

export default async function handler() {
  return new Response(`2+3=${exports.sum(2, 3)}`);
}
