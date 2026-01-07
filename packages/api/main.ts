import { greet } from "@shared/mod.ts";

import helloRoute from "./routes/hello.ts";

const handler = (req: Request): Response => {
  const url = new URL(req.url);

  if (url.pathname === "/") {
    return new Response("API Deno monorepo ✅", { status: 200 });
  }
  if (url.pathname === "/greet") {
    const name = url.searchParams.get("name") ?? "Monde";
    return new Response(greet(name), { status: 200 });
  }
  if (url.pathname.startsWith("/hello")) {
    return helloRoute(req);
  }

  return new Response("Not found", { status: 404 });
};

console.log("🚀 API sur http://localhost:8080");
Deno.serve({ port: 8080 }, handler);
