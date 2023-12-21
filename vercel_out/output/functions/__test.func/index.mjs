import wasmModule from './wasm/sum.wasm';

export default async function handler() {
  // const wasmModule = await import('./wasm/sum.wasm').then(r => r.default)
  const { exports } = await WebAssembly.instantiate(wasmModule)
  return new Response(`1+2=${exports.sum(1, 2)}`);
}
