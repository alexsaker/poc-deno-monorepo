import { assertEquals } from "@std/assert";
import { greet, sum } from "./mod.ts";

Deno.test("greet outputs a message", () => {
  assertEquals(greet("Alex"), "Bonjour, Alex 👋");
});

Deno.test("sum adds two numbers", () => {
  assertEquals(sum(2, 3), 5);
});
