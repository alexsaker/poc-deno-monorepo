import { assert, assertEquals } from "@std/assert";
import { greet } from "@shared/mod.ts";

Deno.test("CLI uses greet", () => {
  assert(greet("CLI").includes("CLI"));
  assertEquals(typeof greet("CLI"), "string");
});
