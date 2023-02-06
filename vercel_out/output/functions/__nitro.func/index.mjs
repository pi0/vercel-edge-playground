globalThis.test = "123";

export default async function handleEvent(request, event) {
  // This works
  return new Response(`Test value: ${globalThis.test}`);
  // This won't
  // return new Response(`Test value: ${test}`);
}
