import { expect, test } from "vitest";
import { keyCodesByName } from "../../../src/shared/model/KeyCodes";

test("return correct keyCode definition", () => {
  expect(keyCodesByName["A"].name).equal("A");
  expect(keyCodesByName["F12"].name).equal("F12");
});
