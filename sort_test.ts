import { assertEquals } from "https://deno.land/std@0.84.0/testing/asserts.ts";
import sort from "./sort.ts";

Deno.test("sort fn", () => {
  const x = { b: 22, a: 123, c: [2, 8, 3, 6] };
  assertEquals(sort(x), { a: 123, b: 22, c: [2, 3, 6, 8] });
});
