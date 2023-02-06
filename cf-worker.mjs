globalThis.test = "123";

export default {
  async fetch(request, env) {
    return new Response(`Test value: ${test}`);
  },
};
