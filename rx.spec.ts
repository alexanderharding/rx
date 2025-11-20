import { rx } from "./rx.ts";
import { assertEquals } from "@std/assert";

Deno.test("rx should allow any kind of custom piping", () => {
  // Arrange

  // Act
  const result = rx(2, (source) => source * 2);

  // Assert
  assertEquals(result, 4);
});
