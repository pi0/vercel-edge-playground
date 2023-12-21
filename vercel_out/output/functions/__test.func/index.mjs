import wasmModule from './wasm/sum.wasm?module';

export default async function handler() {
  const { exports } = await WebAssembly.instantiate(wasmModule)
  return new Response(`2+3=${exports.sum(2, 3)}`);
}
