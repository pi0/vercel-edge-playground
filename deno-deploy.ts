import { serve } from "https://deno.land/std@0.155.0/http/server.ts";

globalThis.test = "123";

serve((req: Request) => new Response("Test:" + test));
