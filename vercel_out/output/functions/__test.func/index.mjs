// import wasmModule from './wasm/sum.wasm?module';

export default async function handler() {
  const wasmModule = await import('./wasm/sum.wasm?module')
  const { exports } = await WebAssembly.instantiate(wasmModule)
  return new Response(`2+2=${exports.sum(2, 2)}`);
}
