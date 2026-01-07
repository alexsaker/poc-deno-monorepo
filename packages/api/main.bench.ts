// url_bench.ts
Deno.bench("URL parsing", () => {
  new URL("http://localhost:8080/greet?name=Denorunner");
});
