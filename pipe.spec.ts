import { pipe } from "./pipe.ts";
import { assertEquals } from "@std/assert";

Deno.test("pipe should pipe values through multiple functions", () => {
  // Arrange
  const double = pipe<number, number>((value) => value * 2);
  const quadruple = pipe(double, double);

  // Act
  const doubled = double(10);
  const quadrupled = quadruple(10);

  // Assert
  assertEquals(doubled, 20);
  assertEquals(quadrupled, 40);
});
