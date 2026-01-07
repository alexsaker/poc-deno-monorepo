// url_bench.ts
Deno.bench("URL parsing", () => {
  new URL("http://localhost:9000/greet?name=Denorunner");
});
