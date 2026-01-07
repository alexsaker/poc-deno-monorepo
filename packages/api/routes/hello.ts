export default function helloRoute(_req: Request): Response {
  return new Response(JSON.stringify({ message: "Hello depuis /hello" }), {
    headers: { "content-type": "application/json" },
  });
}
