globalThis.test = "123";

export default async function handleEvent(request, event) {
  return new Response(`Test value: ${test}`);
}
